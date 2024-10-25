function SendData(CarruselViewSetting, filename) {
    let encodeCarruselViewSetting = encodeToBase64(CarruselViewSetting);

    var datasend = {
        Filename: (filename != "") ? filename : "CardView1",
        FileContent: encodeCarruselViewSetting,
        IsSaving: true
    }

    return new Promise((resolve, reject) => {
        fetch('/API/OASCarrusel/CarruselApi/CardViewSetting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datasend)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // or response.text(), depending on the expected response type
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
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
        fetch('/API/OASCarrusel/CarruselApi/CardViewSetting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datasend)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // or response.text(), depending on the expected response type
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}

function encodeToBase64(inputString) {
    return btoa(inputString);
}

function decodeFromBase64(encodedString) {
    return atob(encodedString);
}