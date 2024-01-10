import { generateChunks } from "./challenge-02";

describe('generateChunks',() => {
    it('', () => {
        const chunks = generateChunks(4);

        expect(chunks).toEqual('chunk-chunk-chunk-chunk');
    });

    it('', () => {
        const chunks = generateChunks(1);

        expect(chunks).toEqual('chunk');
    });

    it('', () => {
        const chunks = generateChunks(8);

        expect(chunks).toEqual('chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk');
    });

    it('', () => {
        const chunks = generateChunks(2);

        expect(chunks).toEqual('chunk-chunk');
    });
});