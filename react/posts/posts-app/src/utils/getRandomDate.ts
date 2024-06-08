import date from "../components/Post/Date/Date.tsx";

export const getRandomDate = (start: typeof date, end: typeof date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export default getRandomDate