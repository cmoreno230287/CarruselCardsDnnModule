function generateHtmlFromCards(jsonData) {
    const { cards } = jsonData;
    const htmlOutput = [];

    if (cards.length > 0) {
        cards.forEach(cardItem => {
            if (cardItem.showcard) {
                // Iterate over each language property (e.g., chkShowEnglishLanguage)
                for (const [key, value] of Object.entries(cardItem)) {
                    // Check if the current property has 'show' as true and contains a 'card' array
                    if (value?.show && Array.isArray(value.card)) {
                        // Generate HTML for each card element in the 'card' array
                        const cardHtml = value.card.map(element => createHtmlElement(element, value.card))[0];
                        htmlOutput.push(`<div>${cardHtml}</div>`);
                    }
                }
            }
        });
    }
    // Combine all generated HTML strings and return them
    return htmlOutput.join("");
}

// Helper function to create HTML element from an object
function createHtmlElement(element, allElements) {
    const { htmltag, value, classes, cssstyle, href, src, id, parentId, culture } = element;
    const tag = htmltag || "div"; // Default to 'div' if no tag is specified

    const classList = classes ? classes.join(" ") : "";
    const style = cssstyle ? ` style="${cssstyle}"` : "";
    const idAttr = id ? ` id="${id}"` : "";
    const cultureAttr = culture ? ` culture="${culture}"` : "";

    // Handle self-closing tags like <img>
    if (tag === "img" && src) {
        return `<img${idAttr} class="${classList}" src="${src}"${style} alt="${value || ''}"/>`;
    }

    // Handle anchor tags
    if (tag === "a" && href) {
        return `<a${idAttr} class="${classList}" href="${href}"${style}>${value}</a>`;
    }

    // Create a regular HTML element
    let content = value || "";

    // Append child elements based on parentId
    const childElements = allElements.filter(el => el.parentId === id);
    if (childElements.length > 0) {
        content += childElements.map(child => createHtmlElement(child, allElements)).join("");
    }

    return `<${tag}${idAttr}${cultureAttr} class="${classList}"${style}>${content}</${tag}>`;
}

function generateJsonFromHtml(mainhtml) {
    const jsonResult = [];

    function processElement(element) {
        // Get relevant attributes if they exist
        //let value = "";
        let checked = false;

        //if (element.tagName == "SELECT") { value = element.value; }
        if (element.type == "checkbox") { checked = element.checked; }
        const obj = {
            tagName: element.tagName.toLowerCase(),
            style: element.getAttribute('style') || '',
            id: element.getAttribute('id') || '',
            class: element.getAttribute('class') || '',
            href: element.getAttribute('href') || '',
            role: element.getAttribute('role') || '',
            'aria-controls': element.getAttribute('aria-controls') || '',
            'aria-selected': element.getAttribute('aria-selected') || '',
            'data-bs-target': element.getAttribute('data-bs-target') || '',
            'data-bs-toggle': element.getAttribute('data-bs-toggle') || '',
            type: element.getAttribute('type') || '',
            for: element.getAttribute('for') || '',
            json_section: element.getAttribute('json_section') || '',
            draggable: element.getAttribute('draggable') || '',
            src: element.getAttribute('src') || '',
            value: element.value || '',
            checked: checked
        };
        
        jsonResult.push(obj);

        // Process child nodes recursively
        for (let i = 0; i < element.children.length; i++) {
            processElement(element.children[i]);
        }
    }

    processElement(mainhtml);
    return jsonResult;
}

async function applyPropertiesFromJson(filename) {
    var jsonArray = null;
    let jsonArrayObject = null;

    let setting = await getData(filename);
    if (setting != null && setting?.fileContent != "" && setting?.fileContent != null) {
        jsonArray = decodeFromBase64(setting.fileContent);
        if (jsonArray) {
            jsonArrayObject = JSON.parse(jsonArray);
            if (jsonArrayObject != {} && jsonArrayObject.length > 0) {
                let itemsTabs = jsonArrayObject.filter(item => item.type == "button" && item.id.startsWith("tab") && item.id.length < 8);
                jsonArrayObject.forEach(item => {
                    const element = document.getElementById(item.id);// item.id ? document.getElementById(item.id) : document.querySelector(item.tagName);

                    // Ensure the element exists before applying properties
                    /*(element &&
                        !((element.classList.contains("nav-link") || element.classList.contains("active")) &&
                         element.type == "button" && element.id.startsWith("tab")))*/
                    if (element) {
                        // Override the properties
                        if (item.style) element.style.cssText = item.style;
                        if (item.class) element.className = item.class;
                        if (item.href) element.setAttribute('href', item.href);
                        if (item.role) element.setAttribute('role', item.role);
                        if (item['aria-controls']) {
                            element.setAttribute('aria-controls', item['aria-controls']);
                        }
                        if (item['aria-selected']) element.setAttribute('aria-selected', item['aria-selected']);
                        if (item['data-bs-target']) element.setAttribute('data-bs-target', item['data-bs-target']);
                        if (item['data-bs-toggle']) element.setAttribute('data-bs-toggle', item['data-bs-toggle']);
                        if (item.type) element.setAttribute('type', item.type);
                        if (item.for) element.setAttribute('for', item.for);
                        if (item.json_section) element.setAttribute('json_section', item.json_section);
                        if (item.draggable) element.setAttribute('draggable', item.draggable);
                        if (item.src) element.setAttribute('src', item.src);
                        if (item.value && item.type != "file") {
                            element.value = item.value;
                            if (item.tagName == "select") {
                                SetSectionStyle();
                            }
                        }
                        if (item.type == "checkbox") {
                            element.checked = item.checked;
                        }

                        if (element.id == "tab1" && element.type == "button") {
                            for (var i = 1; i < itemsTabs.length; i++) {
                                addNewTab();
                                //element.click();
                                //itemsTabs[i].class = "nav-link"
                                //let tab = document.getElementById(itemsTabs[i].id);
                                //let tabPane = document.getElementById(tab.getAttribute('data-bs-target').replace("#", ""))
                                //tab.classList.remove("active");
                                //tabPane.classList.remove("active");
                                //tab.click();
                                //let TabPaneId = itemsTabs[i];
                                //let tabPane = document.getElementById(TabPaneId['data-bs-target'].replace("#", ""));
                                //tabPane.class = "tab-pane fade oascard";
                            }
                            //for (var ele of itemsTabs) {
                            //    let tab = document.getElementById(ele.id);
                            //    let tabPane = document.getElementById(tab.getAttribute('data-bs-target').replace("#", ""))
                            //    tab.classList.remove("active");
                            //    tabPane.classList.remove("active");
                            //    tab.click();
                            //}
                            //element.click();
                        }
                    }
                });
            }
        }
    }
}



