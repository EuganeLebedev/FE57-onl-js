type Animal = "cat" | "dog" | "rabbit";
type Car = "bmw" | "audi" | "mercedes";

export type TUser<T0 extends Animal = Animal, T1 extends Car = Car> = {
    name: string;
    phone: string;
    email: string;
    animals?: T0[];
    cars?: T1[];
    hasChildren: boolean;
    hasEducation: boolean;
};
