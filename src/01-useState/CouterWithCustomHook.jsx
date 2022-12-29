import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CouterWithCustomHook = () => {
    const { counter,increment,decrement,reset } = useCounter(5);
    return (
        <>
            <h1>CouterWithCustomHook: { counter } </h1>
            <hr />
            <button className="btn btn-outline-primary ml-2" onClick={ ()=>increment(2) }>+1</button>
            <button className="btn btn-outline-primary ml-2" onClick={ reset }>Reset</button>
            <button className="btn btn-outline-primary ml-2" onClick={ ()=>decrement(5) }>-1</button>
        </>
    )
}
