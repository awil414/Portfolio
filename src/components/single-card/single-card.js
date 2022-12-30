import './style.css';
import './flip-transition.css';


function SingleCard( {onClick} ) {
    return (
        < div className='single-card' onClick={onClick}>
            <div className='card-back'>Back</div>
            <div className='card-front'>Front</div>

        </div>
    )
}

export default SingleCard;