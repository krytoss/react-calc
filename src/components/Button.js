function Button({ value, onClick }) {

    return(
        <button className='calculatorButton' onClick = { onClick }>{ value }</button>
    )
}

export default Button