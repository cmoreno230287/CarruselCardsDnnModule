const teplateContentTab = `<div class="row mt-4">                
    <input type="hidden" id="showcard{tabCounter}" value="true"/>
    <input type="hidden" id="showcardLanguage{tabCounter}" value="true"/>
    <div class="form-group row">
        <div class="col-sm-1">
        </div>
        <div class="col-sm-10 pipe">  
            <label for="compartirImagen{tabCounter}">Imagen multilingüe</label>
            <input type="checkbox" class="chkShowLanguage" name="compartirImagen{tabCounter}" id="compartirImagen{tabCounter}"></input>	
            <span class="separatorNavItem">|</span>
            <label for="chkShowEnglishLanguage{tabCounter}">English</label>
            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliEnglish{tabCounter}" name="English" id="chkShowEnglishLanguage{tabCounter}" onchange="ShowCardLangage(this)"></input>	
            <label for="chkShowSpanishLanguage{tabCounter}">Spanish</label>
            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliSpanish{tabCounter}" name="Spanish" id="chkShowSpanishLanguage{tabCounter}" onchange="ShowCardLangage(this)"></input>	
            <label for="chkShowFrenchLanguage{tabCounter}">French</label>
            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliFrench{tabCounter}" name="French" id="chkShowFrenchLanguage{tabCounter}" onchange="ShowCardLangage(this)"></input>		
            <label for="chkShowPortuguesLanguage{tabCounter}">Portugues</label>
            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliPortugues{tabCounter}" name="Portugues" id="chkShowPortuguesLanguage{tabCounter}" onchange="ShowCardLangage(this)"></input>					
            <span class="separatorNavItem">|</span><a href="#" id="eyebutton{tabCounter}" class="bi bi-eye eyeNavMenuItem" onclick="ShowHideCard()"></a>
            <span class="separatorNavItem">|</span><a href="#" class="bi bi-floppy eyeNavMenuItem"></a>
        </div>
    </div>
    <input type="file" id="file-input{tabCounter}" accept="image/*" onchange="loadImage(event, 'image{tabCounter}', 'scaleRange{tabCounter}', {tabCounter})" class="file-input-card">
    <input type="file" id="file-input-Spanish{tabCounter}" accept="image/*" onchange="loadImage(event, 'imageSpanish{tabCounter}', 'scaleRangeSpanish{tabCounter}', {tabCounter})" class="file-input-card">
    <input type="file" id="file-input-French{tabCounter}" accept="image/*" onchange="loadImage(event, 'imageFrench{tabCounter}', 'scaleRangeFrench{tabCounter}', {tabCounter})" class="file-input-card">
    <input type="file" id="file-input-Portugues{tabCounter}" accept="image/*" onchange="loadImage(event, 'imagePortugues{tabCounter}', 'scaleRangePortugues{tabCounter}', {tabCounter})" class="file-input-card">
    <!-- Left Side: Form Controls -->
    <div class="col-md-10">     
        <ul class="nav nav-tabs" id="tabListLanguagesImages" role="tablist">
            <li class="nav-item" role="presentation" id="tabliEnglish{tabCounter}">
                <button class="nav-link active" id="tabEnglish{tabCounter}" data-bs-toggle="tab" data-bs-target="#tabPaneEnglish{tabCounter}" type="button"
                        role="tab" aria-controls="tabPaneEnglish{tabCounter}" aria-selected="true">                
                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabEnglish{tabCounter}')" onkeydown="checkEnter(event, this)">English</span>
                </button>
            </li>
            <li class="nav-item" role="presentation" id="tabliSpanish{tabCounter}">
                <button class="nav-link" id="tabSpanish{tabCounter}" data-bs-toggle="tab" data-bs-target="#tabPaneSpanish{tabCounter}" type="button"
                        role="tab" aria-controls="tabPaneSpanish{tabCounter}" aria-selected="true">                
                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabSpanish{tabCounter}')" onkeydown="checkEnter(event, this)">Spanish</span>
                </button>
            </li> 
            <li class="nav-item" role="presentation" id="tabliFrench{tabCounter}">
                <button class="nav-link" id="tabFrench{tabCounter}" data-bs-toggle="tab" data-bs-target="#tabPaneFrench{tabCounter}" type="button"
                        role="tab" aria-controls="tabPaneFrench{tabCounter}" aria-selected="true">                
                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabFrench{tabCounter}')" onkeydown="checkEnter(event, this)">French</span>
                </button>
            </li> 
            <li class="nav-item" role="presentation" id="tabliPortugues{tabCounter}">
                <button class="nav-link" id="tabPortugues{tabCounter}" data-bs-toggle="tab" data-bs-target="#tabPanePortugues{tabCounter}" type="button"
                        role="tab" aria-controls="tabPanePortugues{tabCounter}" aria-selected="true">                
                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabPortugues{tabCounter}')" onkeydown="checkEnter(event, this)">Portugues</span>
                </button>
            </li> 
        </ul> 
        <div class="tab-content" id="tabContentLanguagesImagesEnglish">
            <!-- Tab 1 Content -->
            <div class="tab-pane oascard fade show active" id="tabPaneEnglish{tabCounter}" role="tabpanel" aria-labelledby="tabEnglish">
                <div class="form-group row">
                    <label for="scaleRange{tabCounter}" class="col-sm-1 col-form-label">Size</label>
                    <div class="col-sm-2">
                        <input type="range" class="form-control-range mt-3" id="scaleRange{tabCounter}" data-target-id="image{tabCounter}" min="10" max="200" value="100">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="card col-md-4" id="card{tabCounter}">
                        <div class="image-wrapper" json-data="true" id="imagewrapper{tabCounter}">						  
                            <div id="image-container{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input{tabCounter}').click();">
                                <img id="image{tabCounter}" class="image" draggable="false">
                                <div class="linksitems" id="linksitems{tabCounter}" json-data="true">
                                <p id="DescriptionImageCarrusel{tabCounter}">OAS/CICAD publishes Thematic National Evaluation Reports 2023 of the Eighth Round of the Multilateral Evaluation Mechanism</p>
                                <ul id="linkslist{tabCounter}"></ul>
                                </div>
                            </div>
                        </div>						
                        <div class="card-body">
                            <h5 class="card-title" id="cardtitle{tabCounter}">Lorem ipsum dolor sit amet, consectetuer ipsum dolor</h5>
                            <p class="card-text" id="cardText{tabCounter}">The Organization of American States is the oldest regional organization in the world. The origin of the Organization of American States (OAS).</p>
                            <a href="#" class="readmorelink" id="readmorelink{tabCounter}">read more</a>
                        </div>
                    </div>
                    <div class="col-md-6 RightColumnForm">
                        <form class="formCard">
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="title{tabCounter}">Title</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" id="title{tabCounter}" role="title" data-target-id="cardtitle{tabCounter}" onchange="changeTextContent(this)" placeholder="Enter title">
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="description{tabCounter}">Description</label>
                                </div>
                                <div class="col-md-1">
                                    <textarea class="form-control" id="description{tabCounter}" data-target-id="cardText{tabCounter}" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                                </div>
                            </div>
                            <div class="row mt-4" control-role="legend">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="legend{tabCounter}">Legend</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" id="legend{tabCounter}" placeholder="Enter legend" hide-for-section-type="3des">
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="linkName{tabCounter}">Link Name</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" data-target-id="readmorelink{tabCounter}" id="linkName{tabCounter}" placeholder="Enter link name" onchange="setLinkText(this, '')">
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="linkUrl{tabCounter}">Link URL</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="url" class="form-control" data-target-id="readmorelink{tabCounter}" id="linkUrl{tabCounter}" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                                </div>
                            </div>
                        </form>
                        <form class="addlink">                                        
                            <div class="addlinkcontainer">
                                <div class="addlinksubcontainer">
                                    <label for="addLinkName{tabCounter}" class="secondlabel">Link Name</label>
                                    <input type="text" class="form-control" id="addLinkName{tabCounter}" placeholder="Enter link name">
                                    <label for="addLinkUrl{tabCounter}" class="secondlabel">Link URL</label>
                                    <input type="url" class="form-control" id="addLinkUrl{tabCounter}" placeholder="Enter URL">
                                    <button type="button" class="btn btn-primary" onclick="addLink('addLinkName{tabCounter}', 'addLinkUrl{tabCounter}', 'addLinkDescription{tabCounter}', 'DescriptionImageCarrusel{tabCounter}', 'linkslist{tabCounter}')">Add Link</button>
                                </div>
                            </div>
                            <div class="addlinkcontainer">
                                <div class="addlinksubcontainer">
                                    <label for="addUrlLinkImage{tabCounter}" class="secondlabel">Link Url Photo</label>
                                    <input type="text" class="form-control" id="addUrlLinkImage{tabCounter}" placeholder="Link Url Photo">
                                    <label for="addLinkDescription{tabCounter}" class="secondlabel">Description</label>
                                    <input type="text" class="form-control addLinkDescription" id="addLinkDescription{tabCounter}" placeholder="Enter Description">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="tab-pane oascard fade" id="tabPaneSpanish{tabCounter}" role="tabpanel" aria-labelledby="tabSpanish">
                <div class="form-group row">
                    <label for="scaleRangeSpanish{tabCounter}" class="col-sm-1 col-form-label">Size</label>
                    <div class="col-sm-2">
                        <input type="range" class="form-control-range mt-3" id="scaleRangeSpanish{tabCounter}" data-target-id="imageSpanish{tabCounter}" min="10" max="200" value="100">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="card col-md-4" id="cardSpanish{tabCounter}">
                        <div class="image-wrapper" json-data="true" id="imagewrapperSpanish{tabCounter}">						  
                            <div id="image-container-Spanish{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input-Spanish{tabCounter}').click();">
                                <img id="imageSpanish{tabCounter}" class="image" draggable="false">
                                <div class="linksitems" id="linksitemsSpanish{tabCounter}" json-data="true">
                                <p id="DescriptionImageCarruselSpanish{tabCounter}">OAS/CICAD publishes Thematic National Evaluation Reports 2023 of the Eighth Round of the Multilateral Evaluation Mechanism</p>
                                <ul id="linkslistSpanish{tabCounter}"></ul>
                                </div>
                            </div>
                        </div>						
                        <div class="card-body">
                            <h5 class="card-title" id="cardtitleSpanish{tabCounter}">Lorem ipsum dolor sit amet, consectetuer ipsum dolor</h5>
                            <p class="card-text" id="cardTextSpanish{tabCounter}">The Organization of American States is the oldest regional organization in the world. The origin of the Organization of American States (OAS).</p>
                            <a href="#" class="readmorelink" id="readmorelinkSpanish{tabCounter}">read more</a>
                        </div>
                    </div>
                    <div class="col-md-6 RightColumnForm">
                        <form class="formCard">
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="titleSpanish{tabCounter}">Title</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" id="titleSpanish{tabCounter}" data-target-id="cardtitleSpanish{tabCounter}" onchange="changeTextContent(this)" placeholder="Enter title">
                                </div>
                            </div>                                    
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="descriptionSpanish{tabCounter}">Description</label>
                                </div>
                                <div class="col-md-1">
                                    <textarea class="form-control" id="descriptionSpanish{tabCounter}" data-target-id="cardTextSpanish{tabCounter}" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                                </div>
                            </div>                                    
                            <div class="row mt-4" control-role="legend">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="legendSpanish{tabCounter}">Legend</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" id="legendSpanish{tabCounter}" placeholder="Enter legend">
                                </div>
                            </div>                                   
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="linkNameSpanish{tabCounter}">Link Name</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" data-target-id="readmorelinkSpanish{tabCounter}" id="linkNameSpanish{tabCounter}" placeholder="Enter link name" onchange="setLinkText(this, '')">
                                </div>
                            </div>                                   
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="linkUrlSpanish{tabCounter}">Link URL</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="url" class="form-control" data-target-id="readmorelinkSpanish{tabCounter}" id="linkUrlSpanish{tabCounter}" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                                </div>
                            </div>  
                        </form>
                        <form class="addlink">
                            <div class="addlinkcontainer">
                                <div class="addlinksubcontainer">
                                    <label for="addLinkNameSpanish{tabCounter}" class="secondlabel">Link Name</label>
                                    <input type="text" class="form-control" id="addLinkNameSpanish{tabCounter}" placeholder="Enter link name">
                                    <label for="addLinkUrlSpanish{tabCounter}" class="secondlabel">Link URL</label>
                                    <input type="url" class="form-control" id="addLinkUrlSpanish{tabCounter}" placeholder="Enter URL">
                                    <button type="button" class="btn btn-primary" onclick="addLink('addLinkNameSpanish{tabCounter}', 'addLinkUrlSpanish{tabCounter}', 'addLinkDescriptionSpanish{tabCounter}', 'DescriptionImageCarruselSpanish{tabCounter}', 'linkslistSpanish{tabCounter}')">Add Link</button>
                                </div>
                            </div>
                            <div class="addlinkcontainer">
                                <div class="addlinksubcontainer">
                                    <label for="addUrlLinkImageSpanish{tabCounter}" class="secondlabel">Link Url Photo</label>
                                    <input type="text" class="form-control" id="addUrlLinkImageSpanish{tabCounter}" placeholder="Link Url Photo">
                                    <label for="addLinkDescriptionSpanish{tabCounter}" class="secondlabel">Description</label>
                                    <input type="text" class="form-control addLinkDescription" id="addLinkDescriptionSpanish{tabCounter}" placeholder="Enter Description">
                                </div>
                            </div>
                        </form>                             
                    </div>
                </div>
            </div> 
            <div class="tab-pane oascard fade" id="tabPaneFrench{tabCounter}" role="tabpanel" aria-labelledby="tabFrench{tabCounter}">
                <div class="form-group row">
                    <label for="scaleRangeFrench{tabCounter}" class="col-sm-1 col-form-label">Size</label>
                    <div class="col-sm-2">
                        <input type="range" class="form-control-range mt-3" id="scaleRangeFrench{tabCounter}" data-target-id="imageFrench{tabCounter}" min="10" max="200" value="100">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="card col-md-4" id="cardFrench{tabCounter}">
                        <div class="image-wrapper" json-data="true" id="imagewrapperFrench{tabCounter}">						  
                            <div id="image-container-French{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input-French{tabCounter}').click();">
                                <img id="imageFrench{tabCounter}" class="image" draggable="false">
                                <div class="linksitems" id="linksitemsFrench{tabCounter}" json-data="true">
                                    <p id="DescriptionImageCarruselFrench{tabCounter}">OAS/CICAD publishes Thematic National Evaluation Reports 2023 of the Eighth Round of the Multilateral Evaluation Mechanism</p>
                                    <ul id="linkslistFrench{tabCounter}"></ul>
                                </div>
                            </div>
                        </div>						
                        <div class="card-body">
                            <h5 class="card-title" id="cardtitleFrench{tabCounter}">Lorem ipsum dolor sit amet, consectetuer ipsum dolor</h5>
                            <p class="card-text" id="cardTextFrench{tabCounter}">The Organization of American States is the oldest regional organization in the world. The origin of the Organization of American States (OAS).</p>
                            <a href="#" class="readmorelink" id="readmorelinkFrench{tabCounter}">read more</a>
                        </div>
                    </div>
                    <div class="col-md-6 RightColumnForm">
                        <form class="formCard">
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="titleFrench{tabCounter}">Title</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" id="titleFrench{tabCounter}" data-target-id="cardtitleFrench{tabCounter}" onchange="changeTextContent(this)" placeholder="Enter title">
                                </div>
                            </div>                                    
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="descriptionFrench{tabCounter}">Description</label>
                                </div>
                                <div class="col-md-1">
                                    <textarea class="form-control" id="descriptionFrench{tabCounter}" data-target-id="cardTextFrench{tabCounter}" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                                </div>
                            </div>                                    
                            <div class="row mt-4" control-role="legend">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="legend{tabCounter}">Legend</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" id="legendFrench{tabCounter}" placeholder="Enter legend">
                                </div>
                            </div>                                    
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="linkNameFrench{tabCounter}">Link Name</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" data-target-id="readmorelinkFrench{tabCounter}" id="linkNameFrench{tabCounter}" placeholder="Enter link name" onchange="setLinkText(this, '')">
                                </div>
                            </div>                                    
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="linkUrlFrench{tabCounter}">Link URL</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="url" class="form-control" data-target-id="readmorelinkFrench{tabCounter}" id="linkUrlFrench{tabCounter}" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                                </div>
                            </div>
                        </form>
                        <form class="addlink">
                            <div class="addlinkcontainer">
                                <div class="addlinksubcontainer">
                                    <label for="addLinkNameFrench{tabCounter}" class="secondlabel">Link Name</label>
                                    <input type="text" class="form-control" id="addLinkNameFrench{tabCounter}" placeholder="Enter link name">
                                    <label for="addLinkUrlFrench{tabCounter}" class="secondlabel">Link URL</label>
                                    <input type="url" class="form-control" id="addLinkUrlFrench{tabCounter}" placeholder="Enter URL">
                                    <button type="button" class="btn btn-primary" onclick="addLink('addLinkNameFrench{tabCounter}', 'addLinkUrlFrench{tabCounter}', 'addLinkDescriptionFrench{tabCounter}', 'DescriptionImageCarruselFrench{tabCounter}', 'linkslistFrench{tabCounter}')">Add Link</button>
                                </div>
                            </div>
                            <div class="addlinkcontainer">
                                <div class="addlinksubcontainer">
                                    <label for="addUrlLinkImageFrench{tabCounter}" class="secondlabel">Link Url Photo</label>
                                    <input type="text" class="form-control" id="addUrlLinkImageFrench{tabCounter}" placeholder="Link Url Photo">
                                    <label for="addLinkDescriptionFrench{tabCounter}" class="secondlabel">Description</label>
                                    <input type="text" class="form-control addLinkDescription" id="addLinkDescriptionFrench{tabCounter}" placeholder="Enter Description">
                                </div>
                            </div>
                        </form>                                                                        
                    </div>
                </div>
            </div>  
            <div class="tab-pane oascard fade" id="tabPanePortugues{tabCounter}" role="tabpanel" aria-labelledby="tabPortugues{tabCounter}">
                <div class="form-group row">
                    <label for="scaleRangePortugues{tabCounter}" class="col-sm-1 col-form-label">Size</label>
                    <div class="col-sm-2">
                        <input type="range" class="form-control-range mt-3" id="scaleRangePortugues{tabCounter}" data-target-id="imagePortugues{tabCounter}" min="10" max="200" value="100">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="card col-md-4" id="cardPortugues{tabCounter}">
                        <div class="image-wrapper" json-data="true" id="imagewrapperPortugues{tabCounter}">						  
                            <div id="image-container-Portugues{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input-Portugues{tabCounter}').click();">
                                <img id="imagePortugues{tabCounter}" class="image" draggable="false">
                                <div class="linksitems" id="linksitemsPortugues{tabCounter}" json-data="true">
                                    <p id="DescriptionImageCarruselPortugues{tabCounter}">OAS/CICAD publishes Thematic National Evaluation Reports 2023 of the Eighth Round of the Multilateral Evaluation Mechanism</p>
                                    <ul id="linkslistPortugues{tabCounter}"></ul>
                                </div>
                            </div>
                        </div>						
                        <div class="card-body">
                            <h5 class="card-title" id="cardtitlePortugues{tabCounter}">Lorem ipsum dolor sit amet, consectetuer ipsum dolor</h5>
                            <p class="card-text" id="cardTextPortugues{tabCounter}">The Organization of American States is the oldest regional organization in the world. The origin of the Organization of American States (OAS).</p>
                            <a href="#" class="readmorelink" id="readmorelinkPortugues{tabCounter}">read more</a>
                        </div>
                    </div>
                    <div class="col-md-6 RightColumnForm">
                        <form class="formCard">
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="titlePortugues{tabCounter}">Title</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" id="titlePortugues{tabCounter}" data-target-id="cardtitlePortugues{tabCounter}" onchange="changeTextContent(this)" placeholder="Enter title">
                                </div>
                            </div>                                    
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="descriptionPortugues{tabCounter}">Description</label>
                                </div>
                                <div class="col-md-1">
                                    <textarea class="form-control" id="descriptionPortugues{tabCounter}" data-target-id="cardTextPortugues{tabCounter}" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                                </div>
                            </div>                                    
                            <div class="row mt-4" control-role="legend">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="legend{tabCounter}">Legend</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" id="legendPortugues{tabCounter}" placeholder="Enter legend">
                                </div>
                            </div>                                    
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="linkNamePortugues{tabCounter}">Link Name</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="text" class="form-control" data-target-id="readmorelinkPortugues{tabCounter}" id="linkNamePortugues{tabCounter}" placeholder="Enter link name" onchange="setLinkText(this, '')">
                                </div>
                            </div>                                    
                            <div class="row mt-4">
                                <div class="col-md-4 inputLabelContainer">
                                    <label for="linkUrlPortugues{tabCounter}">Link URL</label>
                                </div>
                                <div class="col-md-1">
                                    <input type="url" class="form-control" data-target-id="readmorelinkPortugues{tabCounter}" id="linkUrlPortugues{tabCounter}" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                                </div>
                            </div>
                        </form> 
                        <form class="addlink">
                            <div class="addlinkcontainer">
                                <div class="addlinksubcontainer">
                                    <label for="addLinkNamePortugues{tabCounter}" class="secondlabel">Link Name</label>
                                    <input type="text" class="form-control" id="addLinkNamePortugues{tabCounter}" placeholder="Enter link name">
                                    <label for="addLinkUrlPortugues{tabCounter}" class="secondlabel">Link URL</label>
                                    <input type="url" class="form-control" id="addLinkUrlPortugues{tabCounter}" placeholder="Enter URL">
                                    <button type="button" class="btn btn-primary" onclick="addLink('addLinkNamePortugues{tabCounter}', 'addLinkUrlPortugues{tabCounter}', 'addLinkDescriptionPortugues{tabCounter}', 'DescriptionImageCarruselPortugues{tabCounter}', 'linkslistPortugues{tabCounter}')">Add Link</button>
                                </div>
                            </div>
                            <div class="addlinkcontainer">
                                <div class="addlinksubcontainer">
                                    <label for="addUrlLinkImagePortugues{tabCounter}" class="secondlabel">Link Url Photo</label>
                                    <input type="text" class="form-control" id="addUrlLinkImagePortugues{tabCounter}" placeholder="Link Url Photo">
                                    <label for="addLinkDescriptionPortugues{tabCounter}" class="secondlabel">Description</label>
                                    <input type="text" class="form-control addLinkDescription" id="addLinkDescriptionPortugues{tabCounter}" placeholder="Enter Description">
                                </div>
                            </div>
                        </form>                                                                       
                    </div>
                </div>
            </div>     
        </div>   
    </div>
</div>
`;

function GetTemplate(valtabCounter){
    let tabCounter = valtabCounter;
    const regex = /{tabCounter}/gi;
    return teplateContentTab.replaceAll(regex, `-${tabCounter}`);
}