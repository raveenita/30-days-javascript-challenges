// Challenge: calculate the average of the numbers in a array

export const calculateAverege = (...numbers: Array<number>): number => {
    const sum = numbers.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
    const average = sum / numbers.length; 
    const finalAverage = average.toFixed(3)

    return Number(finalAverage);
}