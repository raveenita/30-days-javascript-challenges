import { calculateAverege } from "./challenge-01";

describe('Challenge 01 - Numbers average', () => {
    it('Should return the average of the numbers of 6.875', () => {
        const average = calculateAverege([10, 9, 6, 8, 9, 5, 1, 7]);

        expect(average).toEqual(6.875);
    });

    it('Should return the average of the numbers of 6.875', () => {
        const average = calculateAverege([2, 5, 7, 1, -2]);
        
        expect(average).toEqual(2.6);
    });

    it('Should return the average of the numbers of 6.875', () => {
        const average = calculateAverege([10, 10, 10, 10, 9]);
        
        expect(average).toEqual(9.8);
    });

    it('Should return the average of the numbers of 6.875', () => {
        const average = calculateAverege([25, 75]);
        
        expect(average).toEqual(50);
    });
});