export class API {
    async getShapes() {
        try {
            const response = await fetch('https://mocki.io/v1/d1a5e945-9913-4521-ae10-69a5090abde2');
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
}
