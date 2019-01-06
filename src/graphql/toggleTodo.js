import { gql } from "apollo-boost";
export default gql`
  mutation toggleTodo($id: id!) {
    toggleTodo(id: $id) @client
  }
`;
