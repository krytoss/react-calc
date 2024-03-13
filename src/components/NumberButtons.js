import Button from "./Button";

function NumberButtons() {

    let buttons = [];
    for (let i = 0; i < 9; i++) {
        buttons.push(<Button key={i+1} value={i+1} className='number'/>)
    }

    return (
        <div className='numberButtons'>
            {buttons}
            <Button key='0' value='0' className='wide' />
        </div>
    )

}

export default NumberButtons