
import { useTodo } from "../hooks";
import { TodoAdd, TodoList } from "./";

export const TodoApp = () => {
    const { todos, handleRemoveTodo, handleToggleTodo, handleNewtodo, todosCount, pendingTodosCount } = useTodo();

    return (
        <>
            <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleRemoveTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd handleNewtodo={handleNewtodo} />
                </div>
            </div>
        </>
    )
}
