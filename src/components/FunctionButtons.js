import Button from "./Button"
import '../css/FunctionButtons.css'

function FunctionButtons({ addToInput, setInput, evalInput }) {

    const symbols = [ '+', '-', '*', '/', 'x^2', '√', '=' ]

    const square = () => {
        evalInput()
        setInput(input => (input ** 2).toString())
    }

    const squareRoot = () => {
        evalInput()
        setInput(input => (input ** (1/2)).toString())
    }

    return (
        <div className="functionButtons">
            {
                symbols.map((f, i) => {
                    return <Button key={i} value={f} onClick={
                        f === '=' ? evalInput :
                        f === 'x^2' ? square :
                        f === '√' ? squareRoot :
                        addToInput } />
                })
            }
        </div>
    )

}

export default FunctionButtons