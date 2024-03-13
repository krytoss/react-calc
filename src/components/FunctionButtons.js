import Button from "./Button"

function FunctionButtons() {

    const symbols = [ '+', '-', '*', '/', 'x^2', '√', '=' ]

    return (
        <div className="functionButtons">
            {
                symbols.map((f, i) => {
                    return <Button key={i} value={f} />
                })
            }
        </div>
    )

}

export default FunctionButtons