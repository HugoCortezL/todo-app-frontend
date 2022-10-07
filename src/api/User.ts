import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation createUser($user: UserInput!){
        createUser(user: $user) {
            id
            email
            name
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($user: UserLogin!){
        loginUser(user: $user) {
            id
            name
            email
        }
    }
`

export const GET_LISTS_BY_USER_ID = gql`
    query getLists($id: String!){
        getListsById(id: $id) {
            _id
            name
        }
    }
`

