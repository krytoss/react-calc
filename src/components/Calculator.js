import NumberButtons from "./NumberButtons"
import FunctionButtons from "./FunctionButtons"
import TextField from "./TextField"

function Calculator() {
    return (
        <div id='calculator'>
            <TextField />
            <NumberButtons />
            <FunctionButtons />
        </div>
    )
}

export default Calculator