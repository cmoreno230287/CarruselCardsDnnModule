function generateHtmlFromCards(jsonData) {
    const { cards } = jsonData;
    const htmlOutput = [];

    cards.forEach(cardItem => {
        // Iterate over each language property (e.g., chkShowEnglishLanguage)
        for (const [key, value] of Object.entries(cardItem)) {
            // Check if the current property has 'show' as true and contains a 'card' array
            if (value?.show && Array.isArray(value.card)) {
                // Generate HTML for each card element in the 'card' array
                const cardHtml = value.card.map(element => createHtmlElement(element, value.card)).join("");
                htmlOutput.push(cardHtml);
            }
        }
    });

    // Combine all generated HTML strings and return them
    return htmlOutput.join("");
}

// Helper function to create HTML element from an object
function createHtmlElement(element, allElements) {
    const { htmltag, value, classes, cssstyle, href, src, id, parentId } = element;
    const tag = htmltag || "div"; // Default to 'div' if no tag is specified

    const classList = classes ? classes.join(" ") : "";
    const style = cssstyle ? ` style="${cssstyle}"` : "";
    const idAttr = id ? ` id="${id}"` : "";

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

    return `<${tag}${idAttr} class="${classList}"${style}>${content}</${tag}>`;
}
