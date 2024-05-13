let mother = {
    name: "Ramona",
    age: 51,
    occupation: "Housewife",
    hobbies: ["hikes", "dancing", "cooking"],
    favoriteColor: "red",
    birthplace: "Sinaloa, Mexico",
    favoriteFoods: ["Green Enchiladas", "Marisco"],
    favoriteSaying: "Primeramente Dios (firstly God)",
    giftIdeas: ["Cruise trip", "Paid trip to hometown"]
};

const messages = [
    "Thank you for empowering me to advocate for myself",
    "Through your example, I've discovered the power of valuing myself and my principles unconditionally",
    "You have this fire for life in you that I admire and would love to one day have too",
    "Your loyalty for your people is unbreakable and that is something I'll always trust wholeheartedly",
    "I love to see how you are not afraid to be you, you've taught me to live my best life and do it courageously"
]


function displayMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").textContent = messages[randomIndex];
}

