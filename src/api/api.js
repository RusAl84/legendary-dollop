export default class API {
    // Получает сообщение по id
    static async getDash(id) {
        const url = "http://localhost:5000"
        const resp = await fetch(`${url}/dash/${id}`);
        const json = await resp.json();
        return json;
    }
}