"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateUser = exports.totalReviews = void 0;
var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
// returns the total amount of reviews and assigns the value to #reviews
function totalReviews(value, reviewer, loyal) {
    var star = function () {
        if (loyal) {
            return "\uD83C\uDF1F";
        }
    };
    reviewTotalDisplay.innerHTML = "Total reviews: ".concat(value.toString(), " | last reviewed by ").concat(reviewer, " ").concat(star());
}
exports.totalReviews = totalReviews;
// displays the name of the user in the navbar
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;
