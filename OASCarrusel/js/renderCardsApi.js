function SendData(CarruselViewSetting, filename) {
    let encodeCarruselViewSetting = encodeToBase64(CarruselViewSetting);

    var datasend = {
        Filename: (filename != "") ? filename : "CardView1",
        FileContent: encodeCarruselViewSetting,
        IsSaving: true
    }

    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/API/OASCarrusel/CarruselApi/CardViewSetting',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(datasend),
            success: function (response) {
                //console.log(response);
                resolve(response);
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

function getData(filename) {
    var datareceive = null
    var datasend = {
        Filename: (filename != "") ? filename : "CardView1",
        FileContent: "",
        IsSaving: false
    }

    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/API/OASCarrusel/CarruselApi/CardViewSetting',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(datasend),
            success: function (response) {
                //console.log(response);
                resolve(response);
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

function encodeToBase64(inputString) {
    return btoa(inputString);
}

function decodeFromBase64(encodedString) {
    return atob(encodedString);
}