// CREO UN ARRAY DEI MEMBRI DEL TEAM 
let team_members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'img',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'img',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'img',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'img',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'img',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'img',
    },
]

let team = document.getElementById('member')

// STAMPO IN console.LOG I SINGOLI OGGETTI DEL MIO ARRAY 
for(let i=0; i<team_members.length; i++){
    console.log(team_members[i])

    // for(let j in team_members[i]){

    //     console.log((team_members[i])[j])

    //     let member = document.createElement('li');

    //     member.innerHTML+= (team_members[i])[j];
    //     document.getElementById('team-members').appendChild(member);
    // }

    // INSERISCO L'IMMAGINE 
    team_members[0].image = "./img/wayne-barnett-founder-ceo.jpg"
    team_members[1].image = "./img/angela-caroll-chief-editor.jpg"
    team_members[2].image = "./img/walter-gordon-office-manager.jpg"
    team_members[3].image = "./img/angela-lopez-social-media-manager.jpg"
    team_members[4].image = "./img/scott-estrada-developer.jpg"
    team_members[5].image = "./img/barbara-ramos-graphic-designer.jpg"

    // CREO UNA CARD DOVE INSERISCO LE CONDIZIONI DEGLI OGGETTI DELL'ARRAY 
    let div = document.createElement('div');
    div.classList.add('my-3');

    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('text-center');
    card.classList.add('text-bg-warning');

    let img = `<img class="card-img-top" src="${team_members[i].image}"></img>`; 

    let h5 = `<h5 class="card-title">${team_members[i].name}</h5>`;

    let p = `<p class="card-text">${team_members[i].role}</p>`;

    card.innerHTML = img + h5 + p;

    div.appendChild(card);
    team.appendChild(div);

   
}