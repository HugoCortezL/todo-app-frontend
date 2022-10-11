import { gql } from '@apollo/client'

export const CREATE_LIST = gql`
    mutation createList($list: ListInput!, $userId: String!){
        createList(list: $list, userId: $userId)
    }
`

export const EDIT_LIST = gql`
    mutation editList($list: ListInput!, $listId: String!, $userId: String!){
        editList(list: $list, listId: $listId, userId: $userId)
    }
`

export const DELETE_LIST = gql`
    mutation deleteList($listId: String!, $userId: String!){
        deleteList(listId: $listId, userId: $userId)
    }
`

export const GET_LIST_BY_ID = gql`
    query getById($listId: String!, $userId: String!){
        getListById(listId: $listId, userId: $userId) {
            _id
            name
            todos {
                _id
                title
                priority
                status
                deadline
                favorite
            }
        }
    }
`
