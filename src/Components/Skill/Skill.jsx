import './Skill.css';
import Card from '../Card/Card';

function Skill(props) {
    const arr = props.skills;
    const text = props.text;    
    const cardItems = arr.map((value,index) => {
        return <Card key={index} text={value} />
    })
    return (
        <>
            <h2 className="skill__title">{text}</h2>
            {cardItems}       
        </>
        
    )
}

export default Skill