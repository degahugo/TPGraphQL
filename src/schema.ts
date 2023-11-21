import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Owner {
    id: ID!
    name: String!
  }
   type Pet {
    id: ID!
    name: String!
    age: Int!
    pictureUri: String
    ownerId: ID!
    owner:Owner
  }
  type Query {
        getOwners: [Owner]
        getOwner(id:ID!): Owner
        getPets: [Pet]
        getPet(id:ID!): Pet
        
    }
    type Mutation {
      createPet(name: String!, age: Int!, pictureUri: String, ownerId:
      String!): Pet!
      updatePet(id: ID!, name: String, age: Int, pictureUri: String,
      ownerId: String): Pet!
      deletePet(id: ID!): ID!
      createOwner(name: String!): Owner!
      }
`);

export default schema;
