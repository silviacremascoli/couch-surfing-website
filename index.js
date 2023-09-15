var reviewTotalDisplay = document.querySelector('#reviews');
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
// returns the total amount of reviews and assigns the value to #reviews
function totalReviews(value, reviewer, loyal) {
    var star = function () {
        if (loyal) {
            return "\uD83C\uDF1F";
        }
    };
    reviewTotalDisplay.innerHTML = "Total reviews: ".concat(value.toString(), " | last reviewed by ").concat(reviewer, " ").concat(star());
}
totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var you = {
    userName: 'Silvia',
    isReturning: true,
};
function populateUser(isReturning, userName) {
    var returningUserDisplay = document.querySelector("#returning-user");
    var userNameDisplay = document.querySelector("#user");
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.userName);
