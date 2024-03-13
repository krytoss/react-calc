function Button({ value, addToInput }) {

    const handleButtonClick = ( event ) => {
        addToInput(value)
    }

    return(
        <button className='calculatorButton' onClick = { handleButtonClick }>{ value }</button>
    )
}

export default Button