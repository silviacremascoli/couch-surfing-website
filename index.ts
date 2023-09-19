import { totalReviews, populateUser } from './functions.js';

let isOpen: boolean;

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

const you: {
    firstName: string;
    lastName: string;
    age: number;
    isReturning: boolean;
    stayedAt: string[]
} = {
    firstName: 'Silvia',
    lastName: 'Cremascoli',
    age: 32,
    isReturning: true,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

const properties: {
    image: string;
    title: string;
    price: number;
    location: {
        address: string,
        city: string;
        postcode: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean
}[] = [
    {
        image: "./images/dutch-flat.png",
        title: "Dutch Flat",
        price: 50,
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
        price: 50,
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
        price: 50,
        location: {
            address: "Via Veronica 72",
            city: "Prato",
            postcode: 80585,
            country: "Italy"
        },
        contact: [+39063104903, "theitalianvilla@gmail.com"],
        isAvailable: true
    },
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
}

let currentLocation: [string, string, number] = ["Milan", "16:30", 21];
const footer = document.querySelector("footer") as HTMLElement;
footer.innerHTML = `${currentLocation[0]} | ${currentLocation[1]} | ${currentLocation[2]}°`;