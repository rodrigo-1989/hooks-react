import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer";

const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewtodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        dispatch({ type: 'Remove Todo', payload: id });
    }
    const handleToggleTodo = (id) => {
        dispatch({ type: 'Toggle Todo', payload: id });
    }

    return { todos, handleRemoveTodo, handleToggleTodo, handleNewtodo, todosCount: todos.length, pendingTodosCount: todos.filter(todo => !todo.done).length }
}
