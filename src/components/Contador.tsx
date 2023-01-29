import React, { useState } from 'react'

export const Contador = () => {
    const [valor, setvalor] = useState(0);
    const calcular = (numero: number) => {
        setvalor(valor + numero);
    }

  return (
    <>
        <h1>Contador</h1>
        <h2>{valor}</h2>
        <button type="button" className="btn btn-outline-primary"
        onClick={() => {calcular(1)}}
        >+1</button>
        <button type="button" className="btn btn-outline-primary"
        onClick={() => {calcular(-1)}}
        >-1</button>
    </>
  )
}
