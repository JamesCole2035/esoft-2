import './Card.css'

function Card(props) {
  const text = props.text;
  return (
    <>
      <div className="card">        
        <p className="card__text">{text}</p>       
      </div>      
    </>
  )
}

export default Card