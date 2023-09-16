"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
var isOpen;
var reviews = [
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
];
var you = {
    firstName: 'Silvia',
    lastName: 'Cremascoli',
    age: 32,
    isReturning: true,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
(0, functions_1.totalReviews)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, functions_1.populateUser)(you.isReturning, you.firstName);
