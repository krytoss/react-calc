import '../css/TextField.css'

function TextField({ value, setInput, evalInput }) {

    const handleChange = ( event ) => {
        if ( event.target.value === '' || event.target.value.match(/^[0-9+\-*/]+$/) ) {
            setInput( event.target.value )
        } else {
            event.preventDefault()
        }
    }

    const handleKeyDown = ( event ) => {
        if (event.keyCode === 13) {
            evalInput()
        }
    }

    return (
        <input id='inputLine' type='text' value={value} onChange={ handleChange } onKeyDown={ handleKeyDown } />
    )
}

export default TextField