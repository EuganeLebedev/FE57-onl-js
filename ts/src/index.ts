import { TUser } from "./types";

const users: TUser[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];

const joinUserNames = (users: TUser[]): string => {
    return users.map(user => user.name).join(", ");
};

const countTotalCars = (users: TUser[]): number => {
    return users.reduce((total, user) => total + (user.cars ? user.cars.length : 0), 0);
};

const filterUsersWithEducation = (users: TUser[]): TUser[] => {
    return users.filter(user => user.hasEducation);
};

const filterUsersWithAnimals = (users: TUser[]): TUser[] => {
    return users.filter(user => user.animals && user.animals.length > 0);
};

const getCarBrands = (users: TUser[]): string => {
    const carBrands: string[] = users.reduce((brands, user) => {
        if (user.cars) {
            brands.push(...user.cars);
        }
        return brands;
    }, []);
    return carBrands.join(", ");
};

console.log(joinUserNames(users));
console.log(countTotalCars(users));
console.log(filterUsersWithEducation(users));
console.log(filterUsersWithAnimals(users));
console.log(getCarBrands(users));