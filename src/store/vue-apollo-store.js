import ADD_TODO from "../graphql/addTodo.js";
import TOGGLE_TODO from "../graphql/toggleTodo.js";
import { gql } from "apollo-boost";
// just playing around with a few ideas
// I want to make it possible to use
// $state.todos
// for fetch
// as well as using
// $state.todos.push(todo)
// to add a new todo
export default {
  todos: {
    all: gql`
      {
        todos @client {
          id
          todo
          completed
        }
      }
    `,
    push(todo, _apollo) {
      return _apollo.mutate({
        mutation: ADD_TODO,
        variables: {
          todo: todo
        }
      });
    }
  },
  get allTodos() {
    return gql`
      {
        todos @client {
          id
          todo
          completed
        }
      }
    `;
  },
  set allTdos(todo) {
    this.addTodos(todo);
  },
  addTodos(todo) {
    return this._apollo.mutate({
      mutation: ADD_TODO,
      variables: {
        todo: todo
      }
    });
  },
  toggleTodo(todo, _apollo) {
    const id = todo.id;
    return _apollo.mutate({
      mutation: TOGGLE_TODO,
      variables: {
        id: id
      }
    });
  },
  todo: {
    complete(todo, _apollo) {
      const id = todo.id;

      return _apollo.mutate({
        mutation: TOGGLE_TODO,
        variables: {
          id: id
        }
      });
    }
  },
  mutation: {
    ADD_TODO: ADD_TODO,
    TOGGLE_TODO: TOGGLE_TODO
  }
};
