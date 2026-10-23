import './Card.css';
import Male from '../img/male.png';
import Female from '../img/female.png';

function Card(props)
{
    return (
        <div className='card'>
            <img src={props.human.photo} />
            <div className='name'>
                {props.human.name}
            {props.human.surname}
            </div>
            <div className='age'>
                {props.human.age}
            </div>
            <div className='pol'>
                <img src={props.human.pol === "male" ? Male : Female} />
            </div>
        </div>
    );
}

export default Card;