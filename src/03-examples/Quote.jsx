import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ data }) => {
    const { quote, image, character } = !!data && data[0];
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, heigth: 0 })
    useLayoutEffect(() => {
        console.log(pRef.current.getBoundingClientRect());
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [])
    return (
        <>
            <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
                <p className="mb-1" ref={pRef}>{quote}</p>
                <img src={image} alt="" />
                <footer className="blockquote-footer">{character}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
