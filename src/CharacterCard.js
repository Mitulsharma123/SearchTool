import React from 'react';
import {
    Card, CardImg, CardText,
    CardTitle,Button
  } from 'reactstrap'; 
import './card-style.css';
 
function Charactercard(props){
      return (
        <div className='card text-center shadow' >
      <Card>
           <div className='overflow'>
            <CardImg src={props.image} alt='Image 1' className='card-img-top' />
          </div>
            <CardTitle>{props.name}</CardTitle>
            <CardText>{props.occupation}</CardText>
            {!props.path ? <input type = "text" className="input" placeholder="Search.."/> : null}
            
            <Button onClick={()=>props.handler(props.path)} variant="btn btn-success">Click</Button>
      </Card>  
      </div>
    );
  }


export default Charactercard;
