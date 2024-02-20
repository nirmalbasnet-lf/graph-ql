export const typeDefs = `
  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }

  type Geo {
    lat: Float!
    lng: Float!
  }

  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geo!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    address: Address!
    phone: String!
    website: String!
    company: Company!
    posts: [Post!]
    favouritePosts: [Post]
  }

  type Post {
    id: ID!
    userId: Int!
    title: String!
    body: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  input GeoInput {
    lat: Float!
    lng: Float!
  }
  

  input AddressInput {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: GeoInput!
  }
  
  input CompanyInput {
    name: String!
    catchPhrase: String!
    bs: String!
  }

  input createUserInput {
    name: String!
    username: String!
    email: String!
    address: AddressInput!
    phone: String!
    website: String!
    company: CompanyInput = {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models"
    }
  }

  type Mutation {
    createUser(input: createUserInput!): User
    deleteUser(id: ID!): String!
  }
`;
