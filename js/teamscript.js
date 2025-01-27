class Teammember {

    constructor(name, email, img, about, showmore) {
        this.className = name;
        this.classEmail = email;
        this.classImg = img;
        this.classAbout = about;
        this.classShowmore = showmore;
    }

    addTeammember() {
        document.getElementById("teamdiv").innerHTML +=
            `<div class="teamBox">
                <img class="teamBoxImg" src="${this.classImg}" alt="Team image" </>
                <h2 class="teamBoxName">${this.className}</h2>
                <h3 class="teamBoxEmail">${this.classEmail}</h3>
                <input type="Button" class="submitbuttonTeam" id="${this.className}button" value="Show more about ${this.className}">
                <p class="teamBoxAbout" id="${this.className}about">${this.classAbout}</p>
               
            </div>`;

        document.getElementById(`${this.className}about`).style.display = "none";
    }

}

var team = [
    new Teammember("Fran", "fran@index.com", "img/person1.jpg", "I'm Fran, I will always find the best insurance deals for you!"),
    new Teammember("Bill", "bill@index.com", "img/person2.jpg", "I'm Bill, I am responsible for your insurance claims"),
    new Teammember("Fritz", "fritz@index.com", "img/person3.jpg", "I'm Fritz and I am here for everything around our Add-on protection program"),
    new Teammember("Bianca", "bianca@index.com", "img/person4.jpg", "I'm Bianca and your contact person regarding all questions and concerns!", )
];

for (var memberOutput of team) {
    memberOutput.addTeammember();
}


/*Display the about Text*/


/*Didn't had enough time to figure out how to use the class keyword´s for this part*/


function showAboutFran() {
    document.getElementById("Franabout").style.display = "block";
};

function showAboutBill() {
    document.getElementById("Billabout").style.display = "block";
};

function showAboutFritz() {
    document.getElementById("Fritzabout").style.display = "block";
};

function showAboutBianca() {
    document.getElementById("Biancaabout").style.display = "block";
};



document.getElementById("Franbutton").addEventListener("click", showAboutFran);
document.getElementById("Billbutton").addEventListener("click", showAboutBill);
document.getElementById("Fritzbutton").addEventListener("click", showAboutFritz);
document.getElementById("Biancabutton").addEventListener("click", showAboutBianca);