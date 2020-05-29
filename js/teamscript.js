class Teammember {
    className = "";
    classEmail = "";
    ClassImg = "";
    ClassAbout = "";

    constructor(name, email, img, about) {
        this.className = name;
        this.classEmail = email;
        this.ClassImg = img;
        this.ClassAbout = about;
    }

    addTeammember() {
        document.getElementById("teamdiv").innerHTML +=
            `<div class="teamBox">
                <img class="teamBoxImg" src="${this.ClassImg}" alt="" />
                <h2 class="teamBoxName">${this.className}</h2>
                <h3 class="teamBoxEmail">${this.classEmail}</h3>
                <p class="teamBoxText" id="${this.className}about">${this.ClassAbout}</p>
            </div>`;

        document.getElementById(`${this.className}about`).style.display = "block";
    }
}

var team = [
    new Teammember("Fran", "fran@index.com", "img/person1.jpg", "I'm Fran, I will always find the best insurance deals for you!"),
    new Teammember("Bill", "bill@index.com", "img/person2.jpg", "I'm Bill, I am responsible for your insurance claims"),
    new Teammember("Fritz", "fritz@index.com", "img/person3.jpg", "I'm Fritz and am here for everything around our Add-on protection program"),
    new Teammember("Bianca", "bianca@index.com", "img/person4.jpg", "I'm Bianca and your contact person regarding all questions and concerns!")
];

for (var memberOutput of team) {
    memberOutput.addTeammember();
}