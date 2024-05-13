"use strict";

let mother = {
  name: "Ramona",
  age: 51,
  occupation: "Housewife",
  hobbies: ["hikes", "dancing", "cooking"],
  favoriteColor: "red",
  birthplace: "Sinaloa, Mexico",
  favoriteFoods: ["Green Enchiladas", "Marisco"],
  favoriteSaying: "Primeramente Dios (firstly God)",
  giftIdeas: ["Cruise trip", "Paid trip to hometown"],
};

const messages = [
  "Thank you for empowering me to advocate for myself",
  "Through your example, I've discovered the power of valuing myself and my principles unconditionally",
  "You have this fire for life in you that I admire and would love to one day have too",
  "Your loyalty for your people is unbreakable and that is something I'll always trust wholeheartedly",
  "I love to see how you are not afraid to be you, you've taught me to live my best life and do it courageously",
];

window.onload = function () {
  //Name of Fuction, prefrix INIT to indicate this is the first thing to Do
  initLoadDropdownGiftIdeas();
  const giftList = document.getElementById("giftIdeas");
  giftList.onchange = changeDropDownValue;
  giftList.value = "";

};

function initLoadDropdownGiftIdeas() {
  // load the dropdown list
  //  let states = ["Alabama", "Alaska", "Arizona", ... ];

  let gifts = [
    { idea: "Cruise Trip", value: "Gift1" },
    { idea: "Vacation", value: "Gift2" },
    { idea: "New Car", value: "Gift3" },
    { idea: "Concert", value: "Gift4" },
  ];

  //Grab the list from HTML
  const giftList = document.getElementById("giftIdeas");

  gifts.forEach((gift) => {
    let theOption = new Option(gift.idea, gift.value);
    // ADDing the elements to the list
    giftList.appendChild(theOption);
  });
}

/*
  let amoutOfGifts = gifts.length;
  for (let i = 0; i < amoutOfGifts; i++) {
    // create the option element
    let theOption = document.createElement("option");
 

    // ADDing the elements to the list
    giftlist.appendChild(theOption);
  }
    */

function displayItem() {
  //grab the giftlist
  const giftList = document.getElementById("giftIdeas");

  //let selected value

  //select a value instead of text
  let selectedValue = giftList.value;
  /*
  let selectedIndex = giftList.selectedIndex;
  let selectedText =  giftList.options[giftList.selectedIndex].text;
  */

  if (selectedValue === "") {
    document.getElementById("message").innerText =
      "Select an item from drop down.";
  } else if (selectedValue == "Gift1") {
    document.getElementById("message").innerText =
      "A cruise trip is an awesome choice!";
  } else if (selectedValue == "Gift2") {
    document.getElementById("message").innerText = "A vacation is great!";
  } else if (selectedValue == "Gift3") {
    document.getElementById("message").innerText = "Thats an awesome new car!";
  } else if (selectedValue == "Gift4") {
    document.getElementById("message").innerText = "Concerts are so much fun!";
  }
}
function changeDropDownValue () {
    //grab the giftlist
  const giftList = document.getElementById("giftIdeas");

  //let selected value
  let selectedvalue = giftList.value;
  document.getElementById("message").innerText = selectedvalue;
}

function displayMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").textContent = messages[randomIndex];
}

function clearFilters() {
  const giftList = document.getElementById("giftIdeas");
  giftList.value = "";
  const giftMessage = document.getElementById("message");
  giftMessage.innerText = "";
  const searchField = document.getElementById("searchField");
  searchField.value = "";
}
