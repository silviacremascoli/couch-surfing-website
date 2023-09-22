import {LoyaltyUsers, Permissions} from "./enums";
import {Country} from "./types";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUsers;
    date: string;
}

export interface Property {
    image: string;
    title: string;
    price: number;
    location: {
        address: string,
        city: string;
        // union type which can take a number or a string
        postcode: number | string;
        country: Country;
    };
    contact: [number, string];
    isAvailable: boolean
}

export interface CurrentUser {
    firstName: string;
    lastName: string;
    age: number;
    permissions: Permissions;
    isReturning: boolean;
    stayedAt: string[]
}