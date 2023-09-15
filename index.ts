const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

const reviews = [
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

// returns the total amount of reviews and assigns the value to #reviews
function totalReviews(value: number, reviewer: string, loyal: boolean) {
    const star = () => {
        if (loyal) {
            return `🌟`;
        }
    }
    reviewTotalDisplay.innerHTML = `Total reviews: ${value.toString()} | last reviewed by ${reviewer} ${star()}`;
}

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

const you = {
    userName: 'Silvia',
    isReturning: true,
}


function populateUser(isReturning: boolean, userName: string ) {
    const returningUserDisplay = document.querySelector("#returning-user") as HTMLElement
    const userNameDisplay = document.querySelector("#user") as HTMLElement
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName)