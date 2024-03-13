import '../css/TextField.css'

function TextField({ value, setInput }) {

    const handleChange = ( event ) => {
        if ( event.target.value === '' || event.target.value.match(/^[0-9+\-*/]+$/) ) {
            setInput( event.target.value )
        } else {
            event.preventDefault()
        }
    }

    return (
        <input id='inputLine' type='text' value={value} onChange={ handleChange } />
    )
}

export default TextField