var friends = [
    {
        Name: "Ahmed",
        Photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        Scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
        
},
]

function addPerson(personObj) {
    friends.push(personObj);
    console.log(friends);
}

module.exports = {
    friends: friends,
    addPerson: addPerson
};