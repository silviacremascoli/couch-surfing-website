// returns the total amount of reviews and assigns the value to #reviews
export function totalReviews(value: number, reviewer: string, loyal: boolean) {
  const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement;
  const star = () => {
    if (loyal) {
      return `🌟`;
    }
  };
  reviewTotalDisplay.innerHTML = `Total reviews: ${value.toString()} | last reviewed by ${reviewer} ${star()}`;
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
