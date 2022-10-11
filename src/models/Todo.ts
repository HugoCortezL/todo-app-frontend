export enum PriorityEnum {
    Low = "Low",
    Mid = "Mid",
    High = "High"
}

export enum StatusEnum {
    Todo = "To-do",
    Progess = "In Progress",
    Review = "Review",
    Done = "Done"
}

export type Todo = {
    _id: string,
    title: string,
    priority: PriorityEnum,
    favorite: boolean,
    status?: StatusEnum,
    deadline?: string
}

export type TodoInput = {
    title: string,
    priority: PriorityEnum,
    status?: StatusEnum,
    favorite: boolean,
    deadline?: string
}