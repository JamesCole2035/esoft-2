import './Profile.css'
import photo from "../../images/bms.jpeg"

function Profile(props) {
  const { name, mail, tg } = props; 
  return (
    <>
      <div className="profile">
        <img className="profile__image" src={photo} alt="моя фотография" />
        <div className="profile__info">
            <p className="profile__name">{name}</p>
            <p className="profile__mail">{mail}</p>
            <p className="profile__tg">{tg}</p>   
        </div>             
      </div>      
    </>
  )
}
export default Profile