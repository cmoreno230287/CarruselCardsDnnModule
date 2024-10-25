    let tabCount = 1;
    let scale = 1;
    let cardBackgroundColor = "#ffffff";
    const MAX_NUMBER_TABS = 40;
    const WIDTH_PRINCIPAL_CONTAINER = 1332;
// English
	var img = document.getElementById('image');
	var imgContainer = document.getElementById('image-container');
	var scaleRange = document.getElementById('scaleRange');
    
// Spanish
	var imgSpanish = document.getElementById('imageSpanish');
	var imgContainerSpanish = document.getElementById('image-container-Spanish');
	var scaleRangeSpanish = document.getElementById('scaleRangeSpanish');

// French
	var imgFrench = document.getElementById('imageFrench');
	var imgContainerFrench = document.getElementById('image-container-French');
	var scaleRangeFrench = document.getElementById('scaleRangeFrench');

// Portugues
    var imgPortugues = document.getElementById('imagePortugues');
    var imgContainerPortugues = document.getElementById('image-container-Portugues');
    var scaleRangePortugues = document.getElementById('scaleRangePortugues');

    var eyebutton = document.getElementById('eyebutton');
    var showcard = document.getElementById('showcard');
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    let dragOffsetX = 0, dragOffsetY = 0;
    let previustabFocusedId = "tab1";
    var sortable = null;
    
    ShowAllLanguageTabs("");

    addEventsImages(img, imgContainer);
    addEventsImages(imgSpanish, imgContainerSpanish); 
    addEventsImages(imgFrench, imgContainerFrench);  
    addEventsImages(imgPortugues, imgContainerPortugues);    

    // Scaling functionality with range input
    AddEventsRangeControls(scaleRange.id, '');
    AddEventsRangeControls(scaleRangeSpanish.id, '');
    AddEventsRangeControls(scaleRangeFrench.id, '');
    AddEventsRangeControls(scaleRangePortugues.id, '');
    
    SetSectionStyle();   

    applyPropertiesFromJson("CardSetting1").then(() => {
        fixTabIssuesOpening();
    });

	// Load the selected image into the container
    function loadImage(event, imgId, scaleId, tabcount) {
      const reader = new FileReader();	 
      let img  = document.getElementById(imgId);
      let scaleRange  = document.getElementById(scaleId);
      reader.onload = function() {
        let compartirImagen = document.getElementById("compartirImagen" + tabcount);
        setImageProperties(img, scaleRange, reader);
        if(compartirImagen.checked){
            setImageProperties(imgSpanish, imgContainerSpanish, reader);
            setImageProperties(imgFrench, imgContainerFrench, reader);
            setImageProperties(imgPortugues, imgContainerPortugues, reader);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }

    function setImageProperties(img, scaleRange, reader){
        img.src = reader.result;
        img.style.width = '100%';  // reset to original scale
        img.style.height = '100%';
        img.style.top = '0';
        img.style.left = '0';
        scaleRange.value = '100'
    }

    function addEventsImages(img, imgContainer){
        img.addEventListener('mousedown', (event) => {
            isDragging = true;
            const rect = img.getBoundingClientRect();
            dragOffsetX = event.clientX - rect.left;
            dragOffsetY = event.clientY - rect.top;
            event.preventDefault();
        });
    
        img.addEventListener('mousemove', (event) => {
        if (isDragging) {
            let img = document.getElementById(event.target.id);
            if(img != null){;
                const containerRect = imgContainer.getBoundingClientRect();
                const newLeft = event.clientX - dragOffsetX - containerRect.left;
                const newTop = event.clientY - dragOffsetY - containerRect.top;
                img.style.left = newLeft + 'px';
                img.style.top = newTop + 'px';
            }
        }
        });
    
        imgContainer.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    function AddEventsRangeControls(rangeControlId, tabcount){
		document.getElementById(rangeControlId + tabcount).addEventListener('input', (event) => {
            const scale = event.target.value / 100;
            let img = document.getElementById(event.target.getAttribute("data-target-id"));
            img.style.width = (scale * 100) + '%';
            img.style.height = (scale * 100) + '%';
        });
    }

	function validateAddTab(){     
        if(tabCount >= MAX_NUMBER_TABS) {
            document.getElementById("add-tab").style.display = "none"
            return;
        }else{   
            document.getElementById("add-tab").style.display = "block"
        }
    }

    function addNewTab() {
        let tabCounter = (tabCount++);
        const tabId = 'tab' + tabCount;
        const tabPaneId = 'tabPane' + tabCount;

        // Create new tab
        const newTab = document.createElement('li');
        newTab.classList.add('nav-item');
        newTab.innerHTML = `
            <button class="nav-link" id="${tabId}" data-bs-toggle="tab" onclick="focusedTab('-${tabCounter}')" data-bs-target="#${tabPaneId}" type="button" role="tab" aria-controls="${tabPaneId}" aria-selected="false">
                <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, '${tabId}')" onkeydown="checkEnter(event, this)">Card ${tabCount}</span>
                <span class="close-tab" onclick="removeTab(event, '${tabId}')">&times;</span>
            </button>
        `;
        const addTabBtn = document.getElementById('add-tab').parentNode;
        addTabBtn.before(newTab);

        // Create new tab content
        const newTabPane = document.createElement('div');
        newTabPane.classList.add('tab-pane', 'fade', 'oascard');
        newTabPane.id = tabPaneId;
        newTabPane.setAttribute('role', 'tabpanel');
        newTabPane.setAttribute('aria-labelledby', tabId);
        newTabPane.setAttribute('json_section', 'carruselCards');
        newTabPane.innerHTML = GetTemplate(tabCounter);
        document.getElementById('tabContent').appendChild(newTabPane);	
		focusedTab('-' + tabCounter);
        document.getElementById(tabId).click();        
        //changeLinkUrl(this, '');
        setCardsBackgroundColor();
        validateAddTab();
        SetSectionStyle();
        TabSortable("");
        ShowAllLanguageTabs('-' + tabCounter);
    }

    function removeTab(event, tabId) {
        event.stopPropagation();
        const tab = document.getElementById(tabId);
        const tabPaneId = tab.getAttribute('data-bs-target').replace('#', '');
        const tabPane = document.getElementById(tabPaneId);
        tab.remove();
        tabPane.remove();
        if (tabId === 'tab1' && tabCount === 1) {
            return; // Keep the first tab if it's the only one
        }
        if (tab.classList.contains('active')) {
            const firstTab = document.querySelector('.nav-link:not(#add-tab)');
            const firstTabPane = document.querySelector('.tab-pane');
            firstTab.classList.add('active');
            firstTabPane.classList.add('show', 'active');
        }
        tabCount = (tabCount-1);
        validateAddTab();
    }

    function focusedTab(tabcount) {	
		img = document.getElementById('image' + tabcount);
		imgContainer = document.getElementById('image-container' + tabcount);
		imgSpanish = document.getElementById('imageSpanish' + tabcount);
		imgContainerSpanish = document.getElementById('image-container-Spanish' + tabcount);        
	    imgFrench = document.getElementById('imageFrench' + tabcount);
	    imgContainerFrench = document.getElementById('image-container-French' + tabcount);
        imgPortugues = document.getElementById('imagePortugues' + tabcount);
        imgContainerPortugues = document.getElementById('image-container-Portugues' + tabcount);

        eyebutton = document.getElementById('eyebutton' + tabcount);
        showcard = document.getElementById('showcard' + tabcount);
        
        addEventsImages(img, imgContainer);
        addEventsImages(imgSpanish, imgContainerSpanish);
        addEventsImages(imgFrench, imgContainerFrench);
        addEventsImages(imgPortugues, imgContainerPortugues);

        AddEventsRangeControls(scaleRange.id, tabcount)
        AddEventsRangeControls(scaleRangeSpanish.id, tabcount)
        AddEventsRangeControls(scaleRangeFrench.id, tabcount)
        AddEventsRangeControls(scaleRangePortugues.id, tabcount)
        previustabFocusedId = tabcount;
    }	

    // Make the tab title editable on double click
    function makeTitleEditable(element) {
        element.contentEditable = true;
        element.focus();
    }

    // Save tab title when input loses focus or on 'Enter' key
    function updateTabTitle(element, tabId) {
        element.contentEditable = false;
        document.getElementById(tabId).querySelector('span').innerText = element.innerText;
    }

    // Detect Enter key to save the tab title
    function checkEnter(event, element) {
        if (event.key === 'Enter') {
            event.preventDefault();
            element.blur();  // Blur input to trigger saving title
        }
    }

    function ShowHideCard(event) {
        event.preventDefault();

        let showcardvalue = showcard.value;

        if (showcardvalue == "true") {
            showcard.value = "false";
            eyebutton.classList.remove("bi-eye");
            eyebutton.classList.add("bi-eye-slash")
        } else {
            showcard.value = "true";
            eyebutton.classList.remove("bi-eye-slash");
            eyebutton.classList.add("bi-eye")
        }
        return false;
    }

    function changeBackgroundColor(element){
        var elementCard = document.querySelectorAll('div.card');
        let backColor = element.getAttribute("backcolor");
        elementCard.forEach((element) => { 
            element.style.backgroundColor = backColor;
        });
    }

    function changeTextContent(element){

        let datatargetids = element.getAttribute("data-target-id").split(',');

        datatargetids.forEach((el) => { 
            let cardtitle = document.getElementById(el);
            cardtitle.innerText = element.value;
        });
    }
    
    function setLinkText(element, tabcount){   
        let readmorelinkId = element.getAttribute("data-target-id");
        let readmorelink = document.getElementById(readmorelinkId);
        readmorelink.innerText = element.value;
    }

    function setLinkUrl(element, tabcount){   
        let readmorelinkId = element.getAttribute("data-target-id");
        let readmorelink = document.getElementById(readmorelinkId);
        readmorelink.setAttribute("href", element.value);
    }

    function ShowCardLangage(element){
        let checked = element.checked;
        let targetElementId = element.getAttribute("data-target-id");
        let targetElementTabContentId = element.getAttribute("data-target-contenttab-id");
        let targetElement = document.getElementById(targetElementId);
        let targetElementTabContent = document.getElementById(targetElementTabContentId);

        if(checked){
            targetElement.style.display = "block";
        }else{
            targetElement.style.display = "none";
        }
    }

    function SetSectionStyle(){
        var tipoSeccion = document.getElementById("tipoSeccion");
        var legendelements = document.querySelectorAll('[control-role="legend"]');           
        var addlinkElements = document.querySelectorAll(".addlink");      
        var linksitemsElements = document.querySelectorAll(".linksitems");     
        DiabledEnableContainer("main-container", false, "");        
        setShowAddLinkFormAndLayout(false, addlinkElements, linksitemsElements);

        switch(tipoSeccion.value){
            case "3des" : 
                legendelements.forEach((element) => { 
                    element.style.display = "none";
                });
                this.cardBackgroundColor = "#f0f0f0";
                setCardsBackgroundColor();
                setMaxLengthTitleAndText(217, 64);
                setCardsWidth("332px", "400px", "50%", "50%");
                break;
            case "2des" : 
                legendelements.forEach((element) => { 
                    element.style.display = "none";
                });
                this.cardBackgroundColor = "#f0f0f0";
                setCardsBackgroundColor();
                setMaxLengthTitleAndText(217, 64);
                setCardsWidth("506px", "395px", "65%", "35%");
                break;
            case "eve":
                legendelements.forEach((element) => { 
                    element.style.display = "flex";
                });
                this.cardBackgroundColor = "#ffffff";
                setCardsBackgroundColor();
                setMaxLengthTitleAndText(155, 53);
                setCardsWidth("243px", "400px", "40%", "60%");
                break;
            case "not":
                legendelements.forEach((element) => { 
                    element.style.display = "flex";
                });
                this.cardBackgroundColor = "#f0f0f0";
                setCardsBackgroundColor();
                setMaxLengthTitleAndText(350, 64);
                setCardsWidth("243px", "400px", "40%", "60%");
                break;
            case "carr":
                legendelements.forEach((element) => { 
                    element.style.display = "none";
                });
                setShowAddLinkFormAndLayout(true, addlinkElements, linksitemsElements);
                this.cardBackgroundColor = "#f0f0f0";
                setCardsBackgroundColor();
                setMaxLengthTitleAndText(217, 64);
                setCardsWidth("1350px", "695px", "100%", "0%");
                break;
            case "sel":
                DiabledEnableContainer("main-container", true, ["tipoSeccion"]);
                setCardsWidth("332px", "400px", "50%", "50%");                
                addlinkElements.forEach((element) => { 
                    element.style.display = "none";
                });     
                linksitemsElements.forEach((element) => { 
                    element.style.display = "none";
                });       
                break;
        }
    }

    function DiabledEnableContainer(containerId, disabledValue, exceptionControlsIds){
        document.getElementById(containerId).disabled = disabledValue;
        var nodes = document.getElementById(containerId).getElementsByTagName('*');
        var links = document.querySelectorAll('a');        
        let options = document.querySelectorAll('#tipoSeccion option');
        
        for(var i = 0; i < nodes.length; i++){
            nodes[i].disabled = disabledValue;
        }

        for(var i1 = 0; i1 < exceptionControlsIds.length; i1++){
            let sectionType = document.getElementById(exceptionControlsIds[i1]);
            sectionType.disabled = !disabledValue;
        }

        if(exceptionControlsIds.length > 0){
            for(var i3 = 0; i3 < options.length; i3++){
                options[i3].disabled = !disabledValue;
            }
        }
    }

    function setMaxLengthTitleAndText(textareMaxLength, inputTitleMaxLength){
        let textareaList = document.querySelectorAll('textarea');
        let inputTitleList = document.querySelectorAll('input[role=title]');
        
        for(var i = 0; i < textareaList.length; i++){
            textareaList[i].maxLength = textareMaxLength;
        }
        
        for(var i2 = 0; i2 < inputTitleList.length; i2++){
            inputTitleList[i2].maxLength = inputTitleMaxLength;
        }
    }

    function setCardsBackgroundColor(){
        var elements = document.querySelectorAll('div.card');
        elements.forEach((element) => { 
            element.style.backgroundColor = this.cardBackgroundColor;
        });
    }

    function setCardsWidth(cardWidth, cardHeigh, imageHeigh, bodyTextHeigh){
        var elements = document.querySelectorAll('div.card');
        var elementsImage = document.querySelectorAll('div.card div.image-wrapper');
        var elementsBody = document.querySelectorAll('div.card div.card-body');
        elements.forEach((element) => { 
            element.style.width = cardWidth;
            element.style.height = cardHeigh;
        });
        
        elementsImage.forEach((element) => { 
            element.style.height = imageHeigh;
        });
        
        elementsBody.forEach((element) => { 
            element.style.height = bodyTextHeigh;
        });
    }

    function setShowAddLinkFormAndLayout(show, addlinkElements, linksitemsElements){            
        var cardBodyElements = document.querySelectorAll(".card .card-body");     
        var formCardElements = document.querySelectorAll("#tabContentLanguagesImagesEnglish .col-md-6 .row.mt-4");        
        //var formaddlinkElements = document.querySelectorAll("#tabContentLanguagesImagesEnglish .tab-pane .col-md-6");     
        var formaddlinkElements = document.querySelectorAll(".RightColumnForm");

        if(show){     
            cardBodyElements.forEach((element) => { 
                element.style.display = "none";
            });
            addlinkElements.forEach((element) => { 
                element.style.display = "block";
            });
            formCardElements.forEach((element) => { 
                element.style.display = "none";
            });
            linksitemsElements.forEach((element) => { 
                element.style.display = "inline-block";
            });
            formaddlinkElements.forEach((element) => { 
                element.classList.add("RightColumnForm");
            });
        }
        else{
            cardBodyElements.forEach((element) => { 
                element.style.display = "block";
            });
            addlinkElements.forEach((element) => { 
                element.style.display = "none";
            });
            formCardElements.forEach((element) => { 
                element.style.display = "block";
            });
            linksitemsElements.forEach((element) => { 
                element.style.display = "none";
            });
            formaddlinkElements.forEach((element) => { 
                element.classList.remove("RightColumnForm");
            });
        }
    }

    function ShowAllLanguageTabs(tabcount){
        document.getElementById('chkShowEnglishLanguage' + tabcount).checked = true;
        document.getElementById('chkShowSpanishLanguage' + tabcount).checked = true;
        document.getElementById('chkShowFrenchLanguage' + tabcount).checked = true;
        document.getElementById('chkShowPortuguesLanguage' + tabcount).checked = true;
    }

    function addLink(linknameId, linkurlId, linkDescriptionId, descriptionImageCarruselId, linkslistid){
        var linkname = document.getElementById(linknameId);
        var linkurl = document.getElementById(linkurlId); 
        var linkslist = document.getElementById(linkslistid); 
        var linkDescription = document.getElementById(linkDescriptionId); 
        var descriptionImageCarrusel = document.getElementById(descriptionImageCarruselId); 
        var createLiElement = document.createElement("li");
        var createAElement = document.createElement("a");
        var createSpanElement = document.createElement("span");
        var createSpanRemoveElement = document.createElement("span");
        createAElement.setAttribute("href", linkurl.value);
        createSpanElement.innerText = (linkslist.childNodes.length <= 0) ? "" : "|";
        createSpanRemoveElement.classList.add("xbuttonremove");
        createSpanRemoveElement.innerText = "X";
        createAElement.innerText = linkname.value;
        createLiElement.append(createSpanElement);
        createLiElement.append(createAElement);
        createLiElement.append(createSpanRemoveElement);
        descriptionImageCarrusel.innerText = linkDescription.value;
        linkslist.append(createLiElement);

        document.querySelectorAll('.xbuttonremove').forEach(function(button) {
            // Añade un evento al hacer clic
            button.addEventListener('click', function() {
                // Elimina el elemento padre del botón, que es el <li>
                this.parentElement.remove();
            });
        });
    }

    function LoadInformationFromJson(){

    }

    function createJsonFromParent() {
        const carruselCards = [];
        const sectionSelect = document.getElementById("tipoSeccion");

            // Select elements for carousel cards
        const elementsSectionCarruselCards = document.querySelectorAll('[json_section=carruselCards]');
    
        elementsSectionCarruselCards.forEach((element) => {
            const carruselCardsInfo = {};
            const cardsInfoElements = element.querySelectorAll("[json_section=carruselCardsInfo]");
    
            cardsInfoElements.forEach((ele) => {
                if (ele.type === "checkbox") {
                    if (ele.getAttribute("data-target-contenttab-id")?.startsWith("tabPane") && ele.checked) {
                        const tabPanelLanguageElementId = ele.getAttribute("data-target-contenttab-id");
                        const paneElement = document.getElementById(tabPanelLanguageElementId);
                        const cardsByLanguageElements = paneElement?.querySelectorAll("[json_section=CardsByLanguage]") || [];

                        const cardsByLanguage = Array.from(cardsByLanguageElements).map(el => generateJsonObject(el));

                        carruselCardsInfo[ele.id] = {
                            show: ele.checked,
                            card: cardsByLanguage
                        };
                    } else {
                        carruselCardsInfo[ele.id] = ele.checked;
                    }
                } else if (ele.type === "hidden") {
                    //let id = ele.id.startsWith("showcard") ? "showcard" : ele.id;
                    carruselCardsInfo[ele.id] = ele.value;
                }
                else if (ele.tagName.toLowerCase() === "a") {
                    if (ele.id.startsWith("eyebutton")) {
                        carruselCardsInfo["showcard"] = (ele.classList.contains("bi-eye-slash")) ? false : true;
                    } else {
                        carruselCardsInfo[id] = ele.value;
                    }
                }
            });
    
            carruselCards.push(carruselCardsInfo);
        });
    
        const carruselInfo = {
            sectionCardInfo: {
                sectionTitle: document.getElementById("sectionTitle")?.value || '',
                showButtonMore: document.getElementById("ButtonShowMore")?.value || '',
                sectionType: sectionSelect?.options[sectionSelect.selectedIndex]?.value || ''
            },
            cards: carruselCards
        };

        let jsonString = JSON.stringify(carruselInfo);
        SaveCardViewSetting(jsonString, "CardView1");
    }

    async function SaveCardViewSetting(carruselInfo, filename) {
        await SendData(carruselInfo, filename);
    }

    function generateJsonObject(element){
        const tagName = element.tagName.toLowerCase();
        let value = '';

        // Get value based on element type
        if (tagName === 'input' || tagName === 'textarea') {
            value = element.value; // For input or textarea, get the value
        } else if (tagName === 'select') {
            value = element.options[element.selectedIndex]?.value || ''; // For select, get the selected option
        } else if (
            element.id.startsWith("cardtitle") || 
            element.id.startsWith("cardText") || 
            element.id.startsWith("DescriptionImageCarrusel") || 
            element.id.startsWith("readmorelink")
        ) {
            value = element.innerText; // For other tags, get the inner text content
        }

        const parentId = element.parentElement?.id || 'no-parent-id';
        const cssStyle = element.getAttribute("style") || '';
        const culture = element.getAttribute("culture") || '';
        const cssClasses = Array.from(element.classList);

        return {
            id: element.id || 'no-id',
            htmltag: tagName,
            value: value,
            parentId: parentId,
            classes: cssClasses,
            cssstyle: cssStyle,
            href: tagName === 'a' ? element.getAttribute("href") || '' : '',
            src: tagName === 'img' ? element.getAttribute("src") || '' : '',
            culture: culture
        };
    }

    function generateJson()
    {
        const mainElement = document.querySelector('#main-container');
        const resultJson = generateJsonFromHtml(mainElement);
        let jsonString = JSON.stringify(resultJson);        
        // Example usage:
        createJsonFromParent();
        SaveCardViewSetting(jsonString, "CardSetting1").then(window.location.reload());
    }
    

    function TabSortable(tabcount){
        sortable = new Sortable(document.getElementById('tabList'), {
            animation: 150,  // Animation speed during sorting
            onEnd: function(evt) {
                // After sorting, rearrange the tab content based on the new tab order
                var tabs = document.querySelectorAll('#tabList .nav-link');
                var tabContent = document.querySelectorAll('.tab-pane');
                
                var tabContainer = document.getElementById('tabContent');
    
                tabs.forEach(function(tab) {
                    if(tab.id != "add-tab") {
                        var targetId = tab.getAttribute('data-bs-target').replace("#", ""); // Get the tab's target ID
                        var tabPane = document.getElementById(targetId + tabcount); // Find the corresponding content by ID
                        tabContainer.appendChild(tabPane); // Append the tab content in the new order
                    }
                });
            }
        });
    }

    function fixTabIssuesOpening() {
        let lastTabPaneId = document.getElementById("add-tab").closest("li").previousSibling.querySelector("button").getAttribute("data-bs-target").replace("#", "");
        let lastTab = document.getElementById("add-tab").closest("li").previousSibling.querySelector("button");
        let lastTabPane = document.getElementById(lastTabPaneId);
        let tabsListCount = document.getElementById("tabList").querySelectorAll("li").length;

        if (tabsListCount > 0) {
            let firstTab = document.getElementById("tabList").querySelectorAll("li")[0].querySelector("button");
            firstTab.click();
            lastTabPane.classList.remove("show");

            setTimeout(() => {
                lastTab.click();
            }, 500);

            setTimeout(() => {
                firstTab.click();
            }, 500);
        }
    }

    function generateHTMLFromTemplate(template, jsonData) {
        let cards = jsonData.cards;
        let htmlOut = document.createElement("div");

        cards.forEach((item) => {
            let htmlBylang = null;
            if(item.chkShowEnglishLanguage){
                item.chkShowEnglishLanguage.card.forEach((itm) => {
                    let html = document.createElement(itm.htmltag);
                    html.innerText = (itm.htmltag != "img") ? itm.value : "";
                    html.setAttribute("style", itm.cssstyle);
                    html.classList = itm.classes;
                    html.id = itm.id;

                    if(itm.htmltag == "img"){
                        html.src = itm.src;
                    }

                    if(itm.htmltag == "a"){
                        html.href = itm.href
                    }

                    if(itm.parentId == "no-parent-id"){
                        htmlBylang = html;
                    }
                    else{
                        html.parentId = itm.parentId;
                        if(htmlBylang.id == itm.parentId){
                            htmlBylang.appendChild(html);                     
                        }
                        else if(htmlBylang.childNodes.length > 0 && htmlBylang.id != itm.parentId){
                            let element = htmlBylang.getElementById(itm.parentId);
                            element.appendChild(html);   
                        }
                    }
                    
                    /* const replacements = {
                        "{style}": data.cssstyle ? `style="${data.cssstyle}"` : "",
                        "{cardtitletext}": data.cardtitletext || "Default Title",
                        "{carddescriptiontext}": data.carddescriptiontext || "Default description",
                        "{imageSrc}": data.imageSrc || "",
                        "{readmoreLink}": data.readmoreLink || "#"
                    }; */
                });                
            }

            htmlOut.append(htmlBylang);
        });
        // Create a map for replacing placeholders with values from the data
        
    
        // Replace placeholders in the template with the actual values
        return htmlOut;//template.replace(/\{(.*?)\}/g, (_, key) => replacements[`{${key}}`] || '');
    }


    