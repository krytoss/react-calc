import { useState } from "react"
import NumberButtons from "./NumberButtons"
import FunctionButtons from "./FunctionButtons"
import TextField from "./TextField"
import '../css/Calculator.css'

function Calculator() {

    const [ input, setInput ] = useState('');

    const addToInput = (clicked) => {
        setInput(input + clicked)
    }

    return (
        <div id='calculator'>
            <TextField value={ input } setInput={ setInput } />
            <div className='calculatorButtons'>
                <NumberButtons addToInput={ addToInput }/>
                <FunctionButtons addToInput={ addToInput }/>
            </div>
        </div>
    )
}

export default Calculator