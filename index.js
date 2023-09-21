import { populateUser, totalReviews, showDetails } from './functions.js';
import { LoyaltyUsers, Permissions } from './enums.js';
let isLoggedIn;
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUsers.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUsers.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUsers.SILVER_USER,
        date: '27-03-2021',
        description: "Very nice place! Just a bit dirty"
    },
];
const you = {
    firstName: 'Silvia',
    lastName: 'Cremascoli',
    age: 32,
    permissions: Permissions.ADMIN,
    isReturning: true,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
const properties = [
    {
        image: "./images/dutch-flat.png",
        title: "Dutch Flat",
        price: 34,
        location: {
            address: "541 Finn straat",
            city: "Grootwoude",
            postcode: 5811,
            country: "Nederlands"
        },
        contact: [+31714962843, "thedutchflat@gmail.com"],
        isAvailable: true
    },
    {
        image: "./images/french-cottage.png",
        title: "French Cottage",
        price: 23,
        location: {
            address: "7078 Marcel des Saussaies",
            city: "Claudienfort",
            postcode: 49994,
            country: "France"
        },
        contact: [+33655578770, "thefrenchcottage@gmail.com"],
        isAvailable: false
    },
    {
        image: "./images/italian-villa.png",
        title: "Italian Villa",
        price: 45,
        location: {
            address: "Via Veronica 72",
            city: "Prato",
            postcode: 80585,
            country: "Italy"
        },
        contact: [+39063104903, "theitalianvilla@gmail.com"],
        isAvailable: true
    },
];
totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
const propertyContainer = document.querySelector(".properties");
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    // adds the src attribute to the image element
    image.setAttribute('src', properties[i].image);
    // adds the image to the previously created card element
    card.appendChild(image);
    // adds the card element to the properties container
    propertyContainer.appendChild(card);
    // calls the showDetails function and adds the price to the card
    showDetails(you.permissions, card, properties[i].price);
}
let currentLocation = ["Milan", "16:30", 21];
const footer = document.querySelector("footer");
footer.innerHTML = `${currentLocation[0]} | ${currentLocation[1]} | ${currentLocation[2]}°<small>C</small>`;
