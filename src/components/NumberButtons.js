import Button from "./Button";
import '../css/NumberButtons.css'

function NumberButtons({ addToInput }) {

    let buttons = [];
    for (let i = 0; i < 9; i++) {
        buttons.push(<Button key={i+1} value={i+1} className='number' addToInput={ addToInput } />)
    }

    return (
        <div className='numberButtons'>
            {buttons}
            <Button key='0' value='0' addToInput={ addToInput } />
        </div>
    )

}

export default NumberButtons