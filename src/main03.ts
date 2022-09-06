// UNION & TYPE ALIASES

 // TYPE ALIASES
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface IUser2 {
    id: ID;
    name: string;
    surname?: string;
}

const popularTags: PopularTag[] = ["draagon", "coffee"];

const dragonsTag: MaybePopularTag = "draagon";

let username: string = "Alex";
let pageName: string | number = "1"; // | Union sign

let errorMessage: string | null = null;
let user: IUser | null = null;

