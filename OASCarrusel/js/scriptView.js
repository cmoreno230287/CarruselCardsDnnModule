    createHtmlFromJson();    

    async function createHtmlFromJson(){        
        const CarruselViewSetting = await getData("CardView1");
        if (CarruselViewSetting != null && CarruselViewSetting?.fileContent != null) {
            let decodedCarruselViewSetting = decodeFromBase64(CarruselViewSetting?.fileContent);
            let carruselInfo = JSON.parse(decodedCarruselViewSetting);
            addCardsToView(carruselInfo);
            if (carruselInfo.sectionCardInfo.showButtonMore == "on") {
                let viewmorebutton = document.getElementById("viewmorebutton");
                let viewtitle = document.getElementById("viewtitle");
                viewmorebutton.style.display = "block";
                viewtitle.style.display = "block";
                viewtitle.innerText = carruselInfo.sectionCardInfo.sectionTitle;
            }
        }
    }

    function addCardsToView(carruselInfo){
        var html = generateHtmlFromCards(carruselInfo);
        var urlCulture = window.location.href.split("/")[3].toLowerCase();
        // Convert the object to a JSON string with indentation for readability
        const regex1 = /image-wrapper/gi;
        const regex2 = /image-container/gi;
        var html = html.replaceAll(regex1, "resultview-image-wrapper")
                       .replaceAll(regex2, "resultview-image-container");

        //const jsonString = JSON.stringify(carruselInfo, null, 4);
        var sectioncards = document.getElementById("sectioncards");
        sectioncards.innerHTML = html;
        var sectioncardsElements = sectioncards.querySelectorAll(".card");
        sectioncardsElements.forEach((ele) => {
            let currentCulture = ele.getAttribute("culture").toLowerCase();            
            (urlCulture == currentCulture) ? ele.style.display = "block" : ele.style.display = "none";
        });
    }


    