import { useState } from "react"
import NumberButtons from "./NumberButtons"
import FunctionButtons from "./FunctionButtons"
import TextField from "./TextField"
import '../css/Calculator.css'

function Calculator() {

    const [ input, setInput ] = useState('');

    const addToInput = (event) => {
        setInput(input + event.target.innerHTML)
    }

    const evalInput = () => {
        setInput(eval(input))
    }

    return (
        <div id='calculator'>
            <TextField value={ input } setInput={ setInput } evalInput={ evalInput } />
            <div className='calculatorButtons'>
                <NumberButtons onClick={ addToInput }/>
                <FunctionButtons addToInput={ addToInput } setInput={ setInput } evalInput={ evalInput }/>
            </div>
        </div>
    )
}

export default Calculator