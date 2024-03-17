import Button from "./Button";
import '../css/NumberButtons.css'

function NumberButtons({ onClick }) {

    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];

    return (
        <div className='numberButtons'>
            {
                buttons.map((val, i) => {
                    return <Button key={ i } value={ val } onClick={ onClick } />
                })
            }
        </div>
    )

}

export default NumberButtons