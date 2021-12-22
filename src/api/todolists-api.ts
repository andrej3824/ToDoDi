import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "77b5659d-85ac-46a3-88e2-a77e18a50610"
    }
}

export const todolistsApi = {
    getTodolists() {
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise
    }
}