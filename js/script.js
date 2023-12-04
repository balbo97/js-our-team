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

// STAMPO IN console.LOG I SINGOLI OGGETTI DEL MIO ARRAY 
for(let i=0; i<team_members.length; i++){
    console.log(team_members[i])
    for(let j=0; j<team_members.length[i]; j++){
        console.log((team_members[i])[j])
    }
}