import './style.css';
import './flip-transition.css';


function SingleCard(props, {onClick} ) {
    return (
        < div className='single-card' onClick={onClick}>
            <div className='card-back'>{props.name}</div>
            <div className='card-front'>{props.description}</div>

        </div>
    )
}

export default SingleCard;