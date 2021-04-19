import React,{ Component }  from 'react';
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class CardItem extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render(){
        
return (
<>
<li className="cards__item">
<Link className="cards__item__link"   to={this.props.path}  style={{ textDecoration: "none"}}>
<figure className="cards__item__pic-wrap">
<img src={this.props.src} alt="web image" className="cards__item__img"/>
</figure>
<div className="cards__item__info">
<h3 className="card__item__text" >{this.props.label}</h3>
{/* <button onClick={()=>{this.props.history.push('/info')}}>Go to services</button> */}
</div>
</Link>

</li>
</>
)
}
}

export default withRouter(CardItem);