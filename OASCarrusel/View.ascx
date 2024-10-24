<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="OASDnnModules.OASCarrusel.View" %>
<div id="containerSetting" style="display:none;">
    <div class="container my-4" id="main-container">
        <!-- Tabs Navigation -->
        <div class="form-group row">
            <!--<div class="col-sm-5">
            </div>
            <div class="col-sm-3">                
            </div>-->
            <div class="col-sm-12 textalignEnd">
                <label for="sectionTitle" class="marginleftbar">Titulo de la Seccion:</label>            
                <input type="text" class="form-control inputSectionTitle" id="sectionTitle" placeholder="Enter title section" json-data="true" json_section="carruselInfo">
                <label for="ButtonShowMore" class="marginleftbar">Mostrar boton ver mas</label>
                <input type="checkbox" name="ButtonShowMore" id="ButtonShowMore" json-data="true"  json_section="carruselInfo"></input>	
                <label for="tipoSeccion" class="marginleftbar">Tipo de Seccion:</label>
                <select id="tipoSeccion" onchange="SetSectionStyle()" json-data="true" json_section="carruselInfo">
                    <option value="sel">Seleccionar</option>
                    <option value="3des">3 Destacados</option>
                    <option value="eve">Eventos</option>
                    <option value="not">Noticias</option>
                    <option value="2des">2 Destacados</option>
                    <option value="carr">Carrusel</option>
                </select>
                <a href="#" id="saveConfiguration" class="bi bi-floppy marginleftbar" onclick="generateJson()"></a>
            </div>
        </div>
        <ul class="nav nav-tabs" id="tabList" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tabPane1" type="button"
                        role="tab" aria-controls="tabPane1" aria-selected="true" onclick="focusedTab('')">                
                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tab1')" onkeydown="checkEnter(event, this)">Card 1</span>
                    <span class="close-tab" onclick="removeTab(event, 'tab1')">&times;</span>
                </button>
            </li>
            <li class="nav-item">
                <button class="nav-link" id="add-tab" type="button" onclick="addNewTab()">+</button>
            </li>
        </ul>
        <div class="tab-content" id="tabContent">
            <!-- Tab 1 Content -->
            <div class="tab-pane oascard fade show active" id="tabPane1" role="tabpanel" aria-labelledby="tab1" json_section="carruselCards">
                <div class="row mt-4">                
                    <input type="hidden" id="showcard" value="true" json-data="true"/>
                    <input type="hidden" id="showcardLanguage" value="true"/>
                    <div class="form-group row">
                        <div class="col-sm-1">
                        </div>
                        <div class="col-sm-10 pipe">  
                            <label for="compartirImagen">Compartir Imagen</label>
                            <input type="checkbox" class="chkShowLanguage" name="compartirImagen" id="compartirImagen" json-data="true" json_section="carruselCardsInfo"></input>	
                            <span class="separatorNavItem">|</span>
                            <label for="chkShowEnglishLanguage">English</label>
                            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliEnglish" data-target-contenttab-id="tabPaneEnglish" name="English" id="chkShowEnglishLanguage" onchange="ShowCardLangage(this)" json-data="true" json_section="carruselCardsInfo"></input>	
                            <label for="chkShowSpanishLanguage">Spanish</label>
                            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliSpanish" data-target-contenttab-id="tabPaneSpanish" name="Spanish" id="chkShowSpanishLanguage" onchange="ShowCardLangage(this)" json-data="true" json_section="carruselCardsInfo"></input>	
                            <label for="chkShowFrenchLanguage">French</label>
                            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliFrench" data-target-contenttab-id="tabPaneFrench" name="French" id="chkShowFrenchLanguage" onchange="ShowCardLangage(this)" json-data="true" json_section="carruselCardsInfo"></input>		
                            <label for="chkShowPortuguesLanguage">Portugues</label>
                            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliPortugues" data-target-contenttab-id="tabPanePortugues" name="Portugues" id="chkShowPortuguesLanguage" onchange="ShowCardLangage(this)" json-data="true" json_section="carruselCardsInfo"></input>					
                            <span class="separatorNavItem">|</span><a href="#" id="eyebutton" class="bi bi-eye eyeNavMenuItem" onclick="ShowHideCard(event)" json_section="carruselCardsInfo"></a>
                            <span class="separatorNavItem">|</span>
                        </div>
                    </div>
                    <input type="file" id="file-input" accept="image/*" onchange="loadImage(event, 'image', 'scaleRange', '')" class="file-input-card">
                    <input type="file" id="file-input-Spanish" accept="image/*" onchange="loadImage(event, 'imageSpanish', 'scaleRangeSpanish', '')" class="file-input-card">
                    <input type="file" id="file-input-French" accept="image/*" onchange="loadImage(event, 'imageFrench', 'scaleRangeFrench', '')" class="file-input-card">
                    <input type="file" id="file-input-Portugues" accept="image/*" onchange="loadImage(event, 'imagePortugues', 'scaleRangePortugues', '')" class="file-input-card">
                    <!-- Left Side: Form Controls -->
                    <div class="col-md-10">     
                        <ul class="nav nav-tabs" id="tabListLanguagesImages" role="tablist">
                            <li class="nav-item" role="presentation" id="tabliEnglish">
                                <button class="nav-link active" id="tabEnglish" data-bs-toggle="tab" data-bs-target="#tabPaneEnglish" type="button"
                                        role="tab" aria-controls="tabPaneEnglish" aria-selected="true">                
                                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabEnglish')" onkeydown="checkEnter(event, this)">English</span>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation" id="tabliSpanish">
                                <button class="nav-link" id="tabSpanish" data-bs-toggle="tab" data-bs-target="#tabPaneSpanish" type="button"
                                        role="tab" aria-controls="tabPaneSpanish" aria-selected="true">                
                                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabSpanish')" onkeydown="checkEnter(event, this)">Spanish</span>
                                </button>
                            </li> 
                            <li class="nav-item" role="presentation" id="tabliFrench">
                                <button class="nav-link" id="tabFrench" data-bs-toggle="tab" data-bs-target="#tabPaneFrench" type="button"
                                        role="tab" aria-controls="tabPaneFrench" aria-selected="true">                
                                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabFrench')" onkeydown="checkEnter(event, this)">French</span>
                                </button>
                            </li> 
                            <li class="nav-item" role="presentation" id="tabliPortugues">
                                <button class="nav-link" id="tabPortugues" data-bs-toggle="tab" data-bs-target="#tabPanePortugues" type="button"
                                        role="tab" aria-controls="tabPanePortugues" aria-selected="true">                
                                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabPortugues')" onkeydown="checkEnter(event, this)">Portugues</span>
                                </button>
                            </li> 
                        </ul> 
                        <div class="tab-content" id="tabContentLanguagesImagesEnglish">
                            <!-- Tab 1 Content -->
                            <div class="tab-pane oascard fade show active" id="tabPaneEnglish" role="tabpanel" aria-labelledby="tabEnglish">
                                <div class="form-group row">
                                    <label for="scaleRange" class="col-sm-1 col-form-label">Size</label>
                                    <div class="col-sm-2">
                                        <input type="range" class="form-control-range mt-3" id="scaleRange" data-target-id="image" min="10" max="200" value="100">
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="card col-md-4" id="card" json-data="true" json_section="CardsByLanguage" culture="en-US">
                                        <div class="image-wrapper" json-data="true" json_section="CardsByLanguage" id="imagewrapper">						  
                                            <div id="image-container" class="image-container card-img-top" ondblclick="document.getElementById('file-input').click();" json-data="true" json_section="CardsByLanguage">
                                                <img id="image" class="image" draggable="false" json-data="true" json_section="CardsByLanguage">
                                                <div class="linksitems" id="linksitems" json-data="true" json_section="CardsByLanguage">
                                                <p id="DescriptionImageCarrusel" json-data="true" json_section="CardsByLanguage">OAS/CICAD publishes Thematic National Evaluation Reports 2023 of the Eighth Round of the Multilateral Evaluation Mechanism</p>
                                                <ul id="linkslist" json-data="true" json_section="CardsByLanguage"></ul>
                                                </div>
                                            </div>
                                        </div>						
                                        <div class="card-body" id="cardbody" json-data="true" json_section="CardsByLanguage">
                                            <h5 class="card-title" id="cardtitle" json-data="true" json_section="CardsByLanguage">Lorem ipsum dolor sit amet, consectetuer ipsum dolor</h5>
                                            <p class="card-text" id="cardText" json-data="true" json_section="CardsByLanguage">The Organization of American States is the oldest regional organization in the world. The origin of the Organization of American States (OAS).</p>
                                            <a href="#" class="readmorelink" id="readmorelink" json-data="true" json_section="CardsByLanguage">read more</span></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 RightColumnForm">
                                        <form class="formCard">
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="title">Title</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" id="title" role="title" data-target-id="cardtitle" onchange="changeTextContent(this)" placeholder="Enter title">
                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="description">Description</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <textarea class="form-control" id="description" data-target-id="cardText" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                                                </div>
                                            </div>
                                            <div class="row mt-4" control-role="legend">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="legend">Legend</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" id="legend" placeholder="Enter legend" hide-for-section-type="3des">
                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="linkName">Link Name</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" data-target-id="readmorelink" id="linkName" placeholder="Enter link name" onchange="setLinkText(this, '')">
                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="linkUrl">Link URL</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="url" class="form-control" data-target-id="readmorelink" id="linkUrl" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                                                </div>
                                            </div>
                                        </form>
                                        <form class="addlink">                                        
                                            <div class="addlinkcontainer">
                                                <div class="addlinksubcontainer">
                                                    <label for="addLinkName" class="secondlabel">Link Name</label>
                                                    <input type="text" class="form-control" id="addLinkName" placeholder="Enter link name">
                                                    <label for="addLinkUrl" class="secondlabel">Link URL</label>
                                                    <input type="url" class="form-control" id="addLinkUrl" placeholder="Enter URL">
                                                    <button type="button" class="btn btn-primary" onclick="addLink('addLinkName', 'addLinkUrl', 'addLinkDescription', 'DescriptionImageCarrusel', 'linkslist')">Add Link</button>
                                                </div>
                                            </div>
                                            <div class="addlinkcontainer">
                                                <div class="addlinksubcontainer">
                                                    <label for="addUrlLinkImage" class="secondlabel">Link Url Photo</label>
                                                    <input type="text" class="form-control" id="addUrlLinkImage" placeholder="Link Url Photo">
                                                    <label for="addLinkDescription" class="secondlabel">Description</label>
                                                    <input type="text" class="form-control" id="addLinkDescription" placeholder="Enter Description">
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane oascard fade" id="tabPaneSpanish" role="tabpanel" aria-labelledby="tabSpanish">
                                <div class="form-group row">
                                    <label for="scaleRangeSpanish" class="col-sm-1 col-form-label">Size</label>
                                    <div class="col-sm-2">
                                        <input type="range" class="form-control-range mt-3" id="scaleRangeSpanish" data-target-id="imageSpanish" min="10" max="200" value="100">
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="card col-md-4" id="cardSpanish" json_section="CardsByLanguage" culture="es-ES">
                                        <div class="image-wrapper" json-data="true" id="imagewrapperSpanish" json_section="CardsByLanguage">						  
                                        <div id="image-container-Spanish" class="image-container card-img-top" ondblclick="document.getElementById('file-input-Spanish').click();" json_section="CardsByLanguage">
                                            <img id="imageSpanish" class="image" draggable="false" json_section="CardsByLanguage">
                                            <div class="linksitems" id="linksitemsSpanish" json-data="true" json_section="CardsByLanguage">
                                            <p id="DescriptionImageCarruselSpanish" json_section="CardsByLanguage">OAS/CICAD publishes Thematic National Evaluation Reports 2023 of the Eighth Round of the Multilateral Evaluation Mechanism</p>
                                            <ul id="linkslistSpanish" json_section="CardsByLanguage"></ul>
                                            </div>
                                        </div>
                                        </div>						
                                        <div class="card-body" id="cardbodySpanish" json-data="true" json_section="CardsByLanguage">
                                            <h5 class="card-title" id="cardtitleSpanish" json_section="CardsByLanguage">Lorem ipsum dolor sit amet, consectetuer ipsum dolor</h5>
                                            <p class="card-text" id="cardTextSpanish" json_section="CardsByLanguage">The Organization of American States is the oldest regional organization in the world. The origin of the Organization of American States (OAS).</p>
                                            <a href="#" class="readmorelink" id="readmorelinkSpanish" json_section="CardsByLanguage">read more</a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 RightColumnForm">
                                        <form class="formCard">
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="titleSpanish">Title</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" id="titleSpanish" data-target-id="cardtitleSpanish" onchange="changeTextContent(this)" placeholder="Enter title">
                                                </div>
                                            </div>                                    
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="descriptionSpanish">Description</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <textarea class="form-control" id="descriptionSpanish" data-target-id="cardTextSpanish" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                                                </div>
                                            </div>                                    
                                            <div class="row mt-4" control-role="legend">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="legendSpanish">Legend</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" id="legendSpanish" placeholder="Enter legend">
                                                </div>
                                            </div>                                   
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="linkNameSpanish">Link Name</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" data-target-id="readmorelinkSpanish" id="linkNameSpanish" placeholder="Enter link name" onchange="setLinkText(this, '')">
                                                </div>
                                            </div>                                   
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="linkUrlSpanish">Link URL</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="url" class="form-control" data-target-id="readmorelinkSpanish" id="linkUrlSpanish" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                                                </div>
                                            </div>  
                                        </form>
                                        <form class="addlink">
                                            <div class="addlinkcontainer">
                                                <div class="addlinksubcontainer">
                                                    <label for="addLinkNameSpanish" class="secondlabel">Link Name</label>
                                                    <input type="text" class="form-control" id="addLinkNameSpanish" placeholder="Enter link name">
                                                    <label for="addLinkUrlSpanish" class="secondlabel">Link URL</label>
                                                    <input type="url" class="form-control" id="addLinkUrlSpanish" placeholder="Enter URL">
                                                    <button type="button" class="btn btn-primary" onclick="addLink('addLinkNameSpanish', 'addLinkUrlSpanish', 'addLinkDescriptionSpanish', 'DescriptionImageCarruselSpanish', 'linkslistSpanish')">Add Link</button>
                                                </div>
                                            </div>
                                            <div class="addlinkcontainer">
                                                <div class="addlinksubcontainer">
                                                    <label for="addUrlLinkImageSpanish" class="secondlabel">Link Url Photo</label>
                                                    <input type="text" class="form-control" id="addUrlLinkImageSpanish" placeholder="Link Url Photo">
                                                    <label for="addLinkDescriptionSpanish" class="secondlabel">Description</label>
                                                    <input type="text" class="form-control addLinkDescription" id="addLinkDescriptionSpanish" placeholder="Enter Description">
                                                </div>
                                            </div>
                                        </form>                             
                                    </div>
                                </div>
                            </div> 
                            <div class="tab-pane oascard fade" id="tabPaneFrench" role="tabpanel" aria-labelledby="tabFrench">
                                <div class="form-group row">
                                    <label for="scaleRangeFrench" class="col-sm-1 col-form-label">Size</label>
                                    <div class="col-sm-2">
                                        <input type="range" class="form-control-range mt-3" id="scaleRangeFrench" data-target-id="imageFrench" min="10" max="200" value="100">
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="card col-md-4" id="cardFrench" json_section="CardsByLanguage" culture="fr-FR">
                                        <div class="image-wrapper" json-data="true" id="imagewrapperFrench" json_section="CardsByLanguage">						  
                                            <div id="image-container-French" class="image-container card-img-top" ondblclick="document.getElementById('file-input-French').click();" json_section="CardsByLanguage">
                                                <img id="imageFrench" class="image" draggable="false" json_section="CardsByLanguage">
                                                <div class="linksitems" id="linksitemsFrench" json-data="true" json_section="CardsByLanguage">
                                                    <p id="DescriptionImageCarruselFrench" json_section="CardsByLanguage">OAS/CICAD publishes Thematic National Evaluation Reports 2023 of the Eighth Round of the Multilateral Evaluation Mechanism</p>
                                                    <ul id="linkslistFrench" json_section="CardsByLanguage"></ul>
                                                </div>
                                            </div>
                                        </div>						
                                        <div class="card-body" id="cardbodyFrench" json-data="true" json_section="CardsByLanguage">
                                            <h5 class="card-title" id="cardtitleFrench" json_section="CardsByLanguage">Lorem ipsum dolor sit amet, consectetuer ipsum dolor</h5>
                                            <p class="card-text" id="cardTextFrench" json_section="CardsByLanguage">The Organization of American States is the oldest regional organization in the world. The origin of the Organization of American States (OAS).</p>
                                            <a href="#" class="readmorelink" id="readmorelinkFrench" json_section="CardsByLanguage">read more</a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 RightColumnForm">
                                        <form class="formCard">
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="titleFrench">Title</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" id="titleFrench" data-target-id="cardtitleFrench" onchange="changeTextContent(this)" placeholder="Enter title">
                                                </div>
                                            </div>                                    
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="descriptionFrench">Description</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <textarea class="form-control" id="descriptionFrench" data-target-id="cardTextFrench" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                                                </div>
                                            </div>                                    
                                            <div class="row mt-4" control-role="legend">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="legend">Legend</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" id="legendFrench" placeholder="Enter legend">
                                                </div>
                                            </div>                                    
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="linkNameFrench">Link Name</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" data-target-id="readmorelinkFrench" id="linkNameFrench" placeholder="Enter link name" onchange="setLinkText(this, '')">
                                                </div>
                                            </div>                                    
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="linkUrlFrench">Link URL</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="url" class="form-control" data-target-id="readmorelinkFrench" id="linkUrlFrench" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                                                </div>
                                            </div>
                                        </form>
                                        <form class="addlink">
                                            <div class="addlinkcontainer">
                                                <div class="addlinksubcontainer">
                                                    <label for="addLinkNameFrench" class="secondlabel">Link Name</label>
                                                    <input type="text" class="form-control" id="addLinkNameFrench" placeholder="Enter link name">
                                                    <label for="addLinkUrlFrench" class="secondlabel">Link URL</label>
                                                    <input type="url" class="form-control" id="addLinkUrlFrench" placeholder="Enter URL">
                                                    <button type="button" class="btn btn-primary" onclick="addLink('addLinkNameFrench', 'addLinkUrlFrench', 'addLinkDescriptionFrench', 'DescriptionImageCarruselFrench', 'linkslistFrench')">Add Link</button>
                                                </div>
                                            </div>
                                            <div class="addlinkcontainer">
                                                <div class="addlinksubcontainer">
                                                    <label for="addUrlLinkImageFrench" class="secondlabel">Link Url Photo</label>
                                                    <input type="text" class="form-control" id="addUrlLinkImageFrench" placeholder="Link Url Photo">
                                                    <label for="addLinkDescriptionFrench" class="secondlabel">Description</label>
                                                    <input type="text" class="form-control addLinkDescription" id="addLinkDescriptionFrench" placeholder="Enter Description">
                                                </div>
                                            </div>
                                        </form>                                                                        
                                    </div>
                                </div>
                            </div>   
                            <div class="tab-pane oascard fade" id="tabPanePortugues" role="tabpanel" aria-labelledby="tabPortugues">
                                <div class="form-group row">
                                    <label for="scaleRangePortugues" class="col-sm-1 col-form-label">Size</label>
                                    <div class="col-sm-2">
                                        <input type="range" class="form-control-range mt-3" id="scaleRangePortugues" data-target-id="imagePortugues" min="10" max="200" value="100">
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="card col-md-4" id="cardPortugues" json_section="CardsByLanguage" culture="pt-PT">
                                        <div class="image-wrapper" json-data="true" id="imagewrapperPortugues" json_section="CardsByLanguage">						  
                                            <div id="image-container-Portugues" class="image-container card-img-top" ondblclick="document.getElementById('file-input-Portugues').click();" json_section="CardsByLanguage">
                                                <img id="imagePortugues" class="image" draggable="false" json_section="CardsByLanguage">
                                                <div class="linksitems" id="linksitemsPortugues" json-data="true" json_section="CardsByLanguage">
                                                    <p id="DescriptionImageCarruselPortugues" json_section="CardsByLanguage">OAS/CICAD publishes Thematic National Evaluation Reports 2023 of the Eighth Round of the Multilateral Evaluation Mechanism</p>
                                                    <ul id="linkslistPortugues" json_section="CardsByLanguage"></ul>
                                                </div>
                                            </div>
                                        </div>						
                                        <div class="card-body" id="cardbodyPortugues" json-data="true" json_section="CardsByLanguage">
                                            <h5 class="card-title" id="cardtitlePortugues" json_section="CardsByLanguage">Lorem ipsum dolor sit amet, consectetuer ipsum dolor</h5>
                                            <p class="card-text" id="cardTextPortugues" json_section="CardsByLanguage">The Organization of American States is the oldest regional organization in the world. The origin of the Organization of American States (OAS).</p>
                                            <a href="#" class="readmorelink" id="readmorelinkPortugues" json_section="CardsByLanguage">read more</a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 RightColumnForm">
                                        <form class="formCard">
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="titlePortugues">Title</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" id="titlePortugues" data-target-id="cardtitlePortugues" onchange="changeTextContent(this)" placeholder="Enter title">
                                                </div>
                                            </div>                                    
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="descriptionPortugues">Description</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <textarea class="form-control" id="descriptionPortugues" data-target-id="cardTextPortugues" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                                                </div>
                                            </div>                                    
                                            <div class="row mt-4" control-role="legend">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="legend">Legend</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" id="legendPortugues" placeholder="Enter legend">
                                                </div>
                                            </div>                                    
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="linkNamePortugues">Link Name</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="text" class="form-control" data-target-id="readmorelinkPortugues" id="linkNamePortugues" placeholder="Enter link name" onchange="setLinkText(this, '')">
                                                </div>
                                            </div>                                    
                                            <div class="row mt-4">
                                                <div class="col-md-4 inputLabelContainer">
                                                    <label for="linkUrlPortugues">Link URL</label>
                                                </div>
                                                <div class="col-md-1">
                                                    <input type="url" class="form-control" data-target-id="readmorelinkPortugues" id="linkUrlPortugues" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                                                </div>
                                            </div>
                                        </form> 
                                        <form class="addlink">
                                            <div class="addlinkcontainer">
                                                <div class="addlinksubcontainer">
                                                    <label for="addLinkNamePortugues" class="secondlabel">Link Name</label>
                                                    <input type="text" class="form-control" id="addLinkNamePortugues" placeholder="Enter link name">
                                                    <label for="addLinkUrlPortugues" class="secondlabel">Link URL</label>
                                                    <input type="url" class="form-control" id="addLinkUrlPortugues" placeholder="Enter URL">
                                                    <button type="button" class="btn btn-primary" onclick="addLink('addLinkNamePortugues', 'addLinkUrlPortugues', 'addLinkDescriptionPortugues', 'DescriptionImageCarruselPortugues', 'linkslistPortugues')">Add Link</button>
                                                </div>
                                            </div>
                                            <div class="addlinkcontainer">
                                                <div class="addlinksubcontainer">
                                                    <label for="addUrlLinkImagePortugues" class="secondlabel">Link Url Photo</label>
                                                    <input type="text" class="form-control" id="addUrlLinkImagePortugues" placeholder="Link Url Photo">
                                                    <label for="addLinkDescriptionPortugues" class="secondlabel">Description</label>
                                                    <input type="text" class="form-control addLinkDescription" id="addLinkDescriptionPortugues" placeholder="Enter Description">
                                                </div>
                                            </div>
                                        </form>                                                                       
                                    </div>
                                </div>
                            </div>     
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="containerViewResul">    
    <link rel="stylesheet" href="/DesktopModules/OASDnnModulesV2/pages/home/Section4/css/section_4.css"></link>
    <section class="row viewcardbar">
        <div class="col-sm-12">
            <a href="#" class="dnni dnni-cog" onclick="OpenConfiguration(event, true)"></a>
        </div>
    </section>
    <div id="header" class="resultview-oas-card-head">
        <div id="viewtitle" class="resultview-oas-card-head" style="display: none;">More Events</div>
        <div class="resultview-oas-card-head-right" id="viewmorebutton" style="display: none;">
            <a href="https://www.oas.org/ext/en/main/search/programs" class="resultview-linkbutton">
              MORE EVENTS
            </a>
        </div>
    </div>
    <section class="resultview-variable slider" id="sectioncards">
    
    </section>
</div>
<link href="/DesktopModules/OASCarrusel/libraries/css/slick.css" rel="stylesheet">
<link href="/DesktopModules/OASCarrusel/libraries/css/slick-theme.css" rel="stylesheet">
<link href="/DesktopModules/OASCarrusel/libraries/css/bootstrap.min.css" rel="stylesheet">
<link href="/DesktopModules/OASCarrusel/libraries/css/bootstrap-icons-1.11.0/bootstrap-icons.min.css" rel="stylesheet">
<link href="/DesktopModules/OASCarrusel/css/viewgeneralStyle.css" rel="stylesheet">
<link href="/DesktopModules/OASCarrusel/css/style.css" rel="stylesheet"> 
<script src="/Resources/Libraries/jQuery/03_05_01/jquery.js"></script>
<script src="/DesktopModules/OASCarrusel/libraries/js/popper.min.js"></script>
<script src="/DesktopModules/OASCarrusel/libraries/js/bootstrap.min.js"></script>
<script src="/DesktopModules/OASCarrusel/libraries/js/bootstrap.bundle.min.js"></script>
<script src="/DesktopModules/OASCarrusel/libraries/js/Sortable.min.js"></script>
<script src="/DesktopModules/OASCarrusel/js/templates/templates.js"></script>
<script src="/DesktopModules/OASCarrusel/js/renderCards.js"></script>
<script src="/DesktopModules/OASCarrusel/js/renderCardsApi.js"></script>
<script src="/DesktopModules/OASCarrusel/js/script.js"></script>
<!-- 

-->