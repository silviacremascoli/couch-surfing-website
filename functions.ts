import {LoyaltyUsers, Permissions} from "./enums.js";

// returns the total amount of reviews and assigns the value to #reviews
export function totalReviews(value: number, reviewer: string, loyal: LoyaltyUsers) {
  const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement;
  const star = () => {
    if (loyal === LoyaltyUsers.GOLD_USER) {
      return `🌟`;
    }
  };
  reviewTotalDisplay.innerHTML = `${value.toString()} Review${makePlural(value)} | last reviewed by ${reviewer} ${star()}`;
}

// displays the name of the user in the navbar
export function populateUser(isReturning: boolean, userName: string) {
  const returningUserDisplay = document.querySelector(
    "#returning-user"
  ) as HTMLElement;
  const userNameDisplay = document.querySelector("#user") as HTMLElement;
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

export function showDetails(value: (boolean | Permissions ), element : HTMLDivElement, price: number) {
  if (value) {
    const priceDisplay = document.createElement('div')
    priceDisplay.innerHTML = price.toString() + '€/night'
    element.appendChild(priceDisplay)
  }
}

export function makePlural(value: number) : string {
  if (value > 1 || value == 0 ) {
    return 's'
  } else return ''
}

export function getTopTwoReviews(reviews : {
  name: string;
  stars: number;
  date: string;
}[]) : {
  name: string;
  stars: number;
  date: string;
}[]  {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
  return sortedReviews.slice(0,2)
}
