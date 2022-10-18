import { gql } from '@apollo/client'

export const CREATE_TODO = gql`
    mutation createTodo($todo: TodoInput!, $listId: String!, $userId: String!){
        createTodo(todo: $todo, listId: $listId, userId: $userId)
    }
`

export const UPDATE_TODO = gql`
    mutation editTodo($todo: TodoInput!, $todoId: String!, $listId: String!, $userId: String!){
        editTodo(todo: $todo, todoId: $todoId, listId: $listId, userId: $userId)
    }
`

export const DELETE_TODO = gql`
    mutation deleteTodo($todoId: String!, $listId: String!, $userId: String!){
        deleteTodo(todoId: $todoId, listId: $listId, userId: $userId)
    }
`

export const FAVORITE_TODO = gql`
    mutation favoriteTodo($todoId: String!, $listId: String!, $userId: String!){
        favoriteTodo(todoId: $todoId, listId: $listId, userId: $userId)
    }
`