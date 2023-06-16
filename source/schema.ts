import { gql } from "apollo-server";

const MyTypes = gql`
  type Flow {
    description: String
    components: [Component]
  }
  type Component {
    name: String
    description: String
  }
`

const typeDefs = gql`
  ${MyTypes}
  type Query {
    hello: String
    flow: Flow
  }
`;

export default typeDefs;