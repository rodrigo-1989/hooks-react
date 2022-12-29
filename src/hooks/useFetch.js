import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({data:null,isLoading:true,hasError:null});
    const { data, isLoading, hasError } = state;
    
    const getFetch = async () => {
        setState({...state,isLoading:true})

        const respuesta = await fetch(url);
        const data = await respuesta.json();

        setState({data,isLoading:false,hasError:null});
    }
    useEffect(() => {
        getFetch();
    }, [url])

    return { data,isLoading, hasError }
}
