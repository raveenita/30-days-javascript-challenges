export function generateChunks(numberOfChunks: number): string {
    const chunk = 'chunk';
    const chunks = Array(numberOfChunks).fill(chunk).join('-');

    return chunks;
}