import { useForm } from "../hooks/useForm";

export const TodoAdd = ({handleNewtodo}) => {
    const {onInputChange,description,onResetForm} = useForm({description:''});

    const onAddTodo = (event) => {
        event.preventDefault();
        if(description.trim().length < 3) return;

        const todo = {id:new Date().getTime(),description,done:false};
        handleNewtodo(todo);
        onResetForm();
    }
    return (
        <form onSubmit={onAddTodo}>
            <input
                type="text"
                className="form-control"
                placeholder="¿Que hay que hacer?"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2"
            >Agregar</button>
        </form>
    )
}
