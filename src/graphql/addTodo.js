import { gql } from "apollo-boost";
export default gql`
  mutation addTodo($todo: String!) {
    addTodo(todo: $todo) @client
  }
`;
