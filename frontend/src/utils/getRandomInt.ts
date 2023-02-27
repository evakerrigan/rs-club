type getRandomIntType = (min: number, max: number)=> number;
export const getRandomInt: getRandomIntType = (min, max) => Math.floor(Math.random() * (max - min)) + min

