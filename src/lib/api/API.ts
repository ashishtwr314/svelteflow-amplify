export class API {
    async getShapes() {
        try {
            const response = await fetch('https://mocki.io/v1/6dd8530e-c3a8-427e-8694-a4597255018f');
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
}
