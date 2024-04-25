import './Profile.css'
import photo from "../../images/bms.jpeg"


function Profile(props) {
  return (
    <>
      <div className="profile">
        <img className="profile__image" src={photo} alt="моя фотография" />
        <div className="profile__info">
            <p className="profile__name">{props.name}</p>
            <p className="profile__mail">{props.mail}</p>  
        </div>             
      </div>      
    </>
  )
}

export default Profile