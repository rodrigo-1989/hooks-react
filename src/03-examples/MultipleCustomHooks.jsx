import { useFetch } from "../hooks"
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const refresh = () => {
        location.reload();
    }
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                isLoading
                    ?
                    <LoadingQuote />
                    :
                    <Quote data={ data } />

            }
            <button className="btn btn-primary" onClick={refresh} disabled={isLoading}>Next Qoute</button>


        </>
    )
}
