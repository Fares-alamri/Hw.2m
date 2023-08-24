let addButton = document.getElementById("addContentButton");

let savedImages = [];

window.addEventListener("load", function () {
    //
    savedImages = JSON.parse(this.localStorage.getItem("savedImages"));
    //
    for (let i = 0; i < savedImages.length; i++) {
        let imageSrc = savedImages.length[i];

        let targetElement = document.getElementById("myelement");

        let imageElement = document.createElement("img");
        let paragraph = document.createElement("p");
        let deleteButton = document.createElement("button");

        paragraph.innerText = "عنوان الصورة";
        paragraph.id = "photo";

        imageElement.src = "https://unsplash.com/photos/a-dark-street-at-night-with-a-building-in-the-background-1-cY6ldprcU";
        imageElement.alt = "image";

        deleteButton.innerText = "delete";

        deleteButton.addEventListener("click", function () {
            //
            savedImages.splice(i, 1);
            localStorage.setItem("savedImages", JSON.stringify(savedImages));

            targetElement.removeChild(paragraph)
            targetElement.removeChild(imageElement)
            targetElement.removeChild(deleteButton)
            
        })
        targetElement.appendChild(paragraph)
        targetElement.appendChild(imageElement)
        targetElement.appendChild(deleteButton)
    }
})

addButton.addEventListener("click", function () {
    let targetElement = document.getElementById("myelement");

    let imageElement = document.createElement("img");
    let paragraph = document.createElement("p");
    let deleteButton = document.createElement("button");

    paragraph.innerText = "عنوان الصورة";
    paragraph.id = "photo";

    imageElement.src = "https://unsplash.com/photos/a-dark-street-at-night-with-a-building-in-the-background-1-cY6ldprcU"
    imageElement.alt = "image";
    deleteButton.innerText="delete";

    deleteButton.addEventListener("click", function () {
        targetElement.removeChild(paragraph)
        targetElement.removeChild(imageElement)
        targetElement.removeChild(deleteButton)
    });

    savedImages.push(imageElement.src)
    localStorage.setItem("savedImages", JSON.stringify(savedImages));
    //
    targetElement.appendChild(paragraph)
    targetElement.appendChild(imageElement)
    targetElement.appendChild(deleteButton)
});

//
let username = localStorage.getItem("username");

if (username) {
    let welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent="مرحبا بك" + username + "!"
}else{
    window.location.href = "login.html"
}
