import {LoyaltyUsers} from "./enums";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUsers;
    date: string;
}