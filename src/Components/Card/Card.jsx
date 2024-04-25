import './Card.css'

function Card(props) {
  return (
    <>
      <div className="card">
        
        <p className="card__text">{props.text}</p>       
      </div>      
    </>
  )
}

export default Card