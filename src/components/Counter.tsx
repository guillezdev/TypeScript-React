import { useState } from "react"


function Counter() {
    const [counter, setCounter] = useState(0)

    const handleIncrement = (numero: number): void => {
        setCounter(counter + numero);
    }
    return (

        <div>
            <button onClick={() => handleIncrement(1)} className="p-2 bg-gray-950 hover:bg-gray-950/70 w-fit">Sumar contador en 1</button>
            <h3>Counter:{counter}</h3>
        </div>
    )
}

export default Counter