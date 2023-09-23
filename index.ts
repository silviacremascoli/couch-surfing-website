import {populateUser, totalReviews, showDetails, getTopTwoReviews} from './functions.js';
import {LoyaltyUsers, Permissions} from './enums.js';
import {Price, Country} from "./types.js";
import {Review, Property, CurrentUser} from "./interfaces.js";

let isLoggedIn: boolean

const reviews: Review[] = [
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
        date: '27-03-2021'
    },
]

const you: CurrentUser = {
    firstName: 'Silvia',
    lastName: 'Cremascoli',
    age: 32,
    permissions: Permissions.ADMIN,
    isReturning: true,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

const properties: Property[] = [
    {
        image: "./images/dutch-flat.png",
        title: "Dutch Flat",
        price: 30,
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
        price: 25,
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
    /*
    {
        image: "./images/spanish-beach-house.png",
        title: "Spanish Beach House",
        price: 45,
        location: {
            address: "Comandante Izarduy 57",
            city: "Vilanova Del Camí",
            postcode: 98788,
            country: "Spain"
        },
        contact: [+34784539825, "thespanishbeachhouse@gmail.com"],
        isAvailable: true
    },
    */
]

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName)

const propertyContainer = document.querySelector(".properties") as HTMLElement;

for(let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    // adds the src attribute to the image element
    image.setAttribute('src', properties[i].image)
    // adds the image to the previously created card element
    card.appendChild(image)
    // adds the card element to the properties container
    propertyContainer.appendChild(card)
    // calls the showDetails function and adds the price to the card
    showDetails(you.permissions, card, properties[i].price)
}

const reviewContainer = document.querySelector('.reviews') as HTMLDivElement
const container = document.querySelector('.container') as HTMLDivElement

let count = 0
function addReviews(array: Review[]) : void {
    if (!count) {
        // increments count by 1, so that this block only executes the first time addReviews is called
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button)
    }
}

const button = document.querySelector('button') as HTMLButtonElement
button.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, string, number] = ["Milan", "16:30", 21];
const footer = document.querySelector("footer") as HTMLElement;
footer.innerHTML = `${currentLocation[0]} | ${currentLocation[1]} | ${currentLocation[2]}°<small>C</small>`;

class MainProperty {
    title: string
    src: string
    reviews: Review[]
    constructor(title: string, src: string, reviews: Review[]) {
        this.title = title
        this.src = src
        this.reviews = reviews
    }
}

let yourMainProperty = new MainProperty(
    "Spanish Beach House",
    "./images/spanish-beach-house.png",
    [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUsers.GOLD_USER,
        date: '12-04-2021'
    }]
)

const mainImageContainer = document.querySelector('.main-image') as HTMLDivElement
const image = document.createElement('img')
image.classList.add('img-fluid')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)