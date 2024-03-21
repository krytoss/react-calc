import { useState } from "react"
import NumberButtons from "./NumberButtons"
import FunctionButtons from "./FunctionButtons"
import TextField from "./TextField"
import { evaluate } from "mathjs"
import '../css/Calculator.css'

function Calculator() {

    const [ input, setInput ] = useState('');

    const addToInput = (event) => {
        setInput(input => (input === '0' ? '' : input) + event.target.innerHTML)
    }

    const evalInput = () => {
        if (input.match(/^\d+(.\d+)*([-+*/]\d+(.\d+)*)*$/)) {
            setInput(evaluate(input).toString())
        } else {
            setInput('0')
        }
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