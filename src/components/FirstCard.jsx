import { useState } from 'react'

export default function FirstCard({ onDone }) {
  const [noLabel, setNoLabel] = useState('No')

  return (
    <div className="card">
      <h1 className="title">💌 Pregunta Importantísima</h1>
      <p className="text">
        Quieres ser mi valentine, y dejar de poner en duda todo lo que te digo?? 
      </p>

      <div className="buttons">
        <button className="btn btn-yes" onClick={onDone}>
          Sí
        </button>

        <button
          className="btn btn-no"
          onMouseEnter={() => setNoLabel('Si')}
          onMouseLeave={() => setNoLabel('No')}
          onClick={onDone}
        >
          {noLabel}
        </button>
      </div>
    </div>
  )
}