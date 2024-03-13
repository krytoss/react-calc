import NumberButtons from "./NumberButtons"
import FunctionButtons from "./FunctionButtons"
import TextField from "./TextField"
import '../css/Calculator.css'

function Calculator() {
    return (
        <div id='calculator'>
            <TextField />
            <div className='calculatorButtons'>
                <NumberButtons />
                <FunctionButtons />
            </div>
        </div>
    )
}

export default Calculator