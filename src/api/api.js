const baseUrl = "http://localhost:5000";
export default class API {
    // Получает сообщение по id
    static async getDash(id) {
            const resp = await fetch(`${baseUrl}/dash/${id}`);
            const json = await resp.json();
            return json;
        }
        // Получает последний ID
    static async getID() {
        const resp = await fetch(`${baseUrl}/getid`);
        const json = await resp.json();
        return json;
    }
}