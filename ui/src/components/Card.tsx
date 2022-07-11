import '../index.css';

const Card = (props: {suit: string, rank: string} ) => {
    const { suit, rank } = props;

    return (
        <>
            <h1>Card Works!</h1>
            <img src={`cards/${rank}_of_${suit}.png`} alt="Card" className="card"/>
        </>
    )
}

export default Card;
