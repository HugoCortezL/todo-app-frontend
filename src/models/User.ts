import { List } from "./"

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    lists: List[]
}

export type UserInput = {
    name: string,
    email: string,
    password: string
}

export type UserLogin = {
    email: string,
    password: string
}