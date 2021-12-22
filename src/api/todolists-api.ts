import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "77b5659d-85ac-46a3-88e2-a77e18a50610"
    }
}

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {
        item: TodolistType
    }
}

type DeleteUpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}

export const todolistsApi = {
    getTodolist() {
        const promise = axios.get<Array<TodolistType>>('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise
    },
    createTodolist(title: string) {
        const promise = axios.post<CreateTodolistResponseType>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
        return promise
    },
    deleteTodolist(id: string) {
        const promise = axios.delete<DeleteUpdateTodolistResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
        return promise
    },
    updateTodolist(id: string, title: string) {
        const promise = axios.put<DeleteUpdateTodolistResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title}, settings)
        return promise
    }
}