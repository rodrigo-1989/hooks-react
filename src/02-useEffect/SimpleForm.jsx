import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({ username: 'julio', email: 'julio@hotmail.com' });
    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    }

    useEffect(() => {
        // console.log("useEffect se llamo!!")
    }, [])

    useEffect(() => {
        // console.log("FormState se Cambio!!")
    }, [formState])

    useEffect(() => {
        // console.log("Email se Cambio!!")
    }, [email])


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input type="text"
                className="form-control"
                placeholder="User name"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input type="mail"
                className="form-control mt-2"
                placeholder="rodrigo@hotmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                (username === 'julio2') && <Message />
            }
        </>
    )
}
