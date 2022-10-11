import { gql } from '@apollo/client'

export const CREATE_TODO = gql`
    mutation createTodo($todo: TodoInput!, $listId: String!, $userId: String!){
        createTodo(todo: $todo, listId: $listId, userId: $userId)
    }
`