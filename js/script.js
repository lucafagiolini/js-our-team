// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

let teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "img/angela-caroll-chief-editor.jpg",
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "img/walter-gordon-office-manager.jpg",
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "img/angela-lopez-social-media-manager.jpg",
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        img: "img/scott-estrada-developer.jpg",
    }
]

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i in teamMembers) {

    console.log(teamMembers[i].name, teamMembers[i].role, teamMembers[i].img);

}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe 


// BONUS 1:
for (let member of teamMembers) {
    document.querySelector(".membercards").innerHTML += `<div>Name: ${member.name}, Role: ${member.role}, <img src= "${member.img}"></div>`;
}



