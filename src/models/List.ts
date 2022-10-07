import { Todo } from "./"

export type List = {
    _id: string,
    name: string,
    todos: Todo[]
}

export type ListInput = {
    name: string,
    todos: Todo[]
}