// returns the total amount of reviews and assigns the value to #reviews
import { LoyaltyUsers } from "./enums";
export function totalReviews(value, reviewer, loyal) {
    const reviewTotalDisplay = document.querySelector("#reviews");
    const star = () => {
        if (loyal === LoyaltyUsers.GOLD_USER) {
            return `🌟`;
        }
    };
    reviewTotalDisplay.innerHTML = `Total reviews: ${value.toString()} | last reviewed by ${reviewer} ${star()}`;
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
