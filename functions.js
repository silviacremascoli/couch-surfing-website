import { LoyaltyUsers } from "./enums.js";
// returns the total amount of reviews and assigns the value to #reviews
export function totalReviews(value, reviewer, loyal) {
    const reviewTotalDisplay = document.querySelector("#reviews");
    const star = () => {
        if (loyal === LoyaltyUsers.GOLD_USER) {
            return `🌟`;
        }
    };
    reviewTotalDisplay.innerHTML = `${value.toString()} Review${makeMultiple(value)} | last reviewed by ${reviewer} ${star()}`;
}
// displays the name of the user in the navbar
export function populateUser(isReturning, userName) {
    const returningUserDisplay = document.querySelector("#returning-user");
    const userNameDisplay = document.querySelector("#user");
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
export function showDetails(value, element, price) {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '€/night';
        element.appendChild(priceDisplay);
    }
}
export function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
