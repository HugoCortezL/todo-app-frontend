import Login from './pages/Login'
import Register from './pages/Register'
import Todos from './pages/Todos'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'

import { onError } from '@apollo/client/link/error'

const errorLink = onError((
  {
    graphQLErrors, networkError
  }
) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`Graphql error ${message}`)
    })
  }
}
)

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" })
])

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todos/:name" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
