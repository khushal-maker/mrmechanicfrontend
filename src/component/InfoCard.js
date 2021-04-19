import React from 'react'
import "./info.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import c1 from './imagecard/c1.jpg'

export default function InfoCard({info}) {
    return(
        <div>
            <Card className="card-body" >
          
          <Card.Img
            variant="top"
            src={info.image}
            className="image"
            />
          
          <Card.Title className="price">{info.price}</Card.Title>
     
          <Card.Body>
           <Card.Title>{info.title}</Card.Title>
            <ul>
              <li className="detail">{info.detail}
              </li>
            </ul>
           
            <Card.Text>
              <ul className="card-list">
                <li className="card-info">{info.list1.first}</li>
                <li className="card-info">{info.list1.second}</li>
                <li className="card-info">{info.list1.third}</li>
              </ul>
              <ul className="card-list2">
                <li className="card-info">{info.list2.first}</li>
                <li className="card-info">{info.list2.second}</li>
                <li className="card-info">{info.list2.third}</li>
              </ul>
            </Card.Text>
            
            <Button className="btn-info">Add To Cart</Button>
          </Card.Body>
     
        </Card>

        </div>
    )
}