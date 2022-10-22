import React from 'react';
import './CalenderDay.scss';


const CalenderDay = props => {

    let new_id = props.id;
    if(props.id%2===0) {
        if(props.id < 10) {
            new_id = "0" + props.id;
        } 
        return (
            <div className='container'>
                <div className='text-container'>
                    <div className='id'>
                        <h1>{new_id}</h1>
                        <h2>Header for long way to go</h2>
                    </div>
                    <div className="content">
                        <p className='p-right'>. Earum, esse, ncere voluptate? Vitae fugit ratione, voluptatibus suscipit sit sint laborum.</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={require("../assets/"+props.id+".jpg")} alt="Loading"/>
                </div>
            </div>
        );
    }
    else {
        if(props.id < 10) {
            new_id = "0" + props.id;
        } 
        return (
            <div className='container'>
                <div className="image-container">
                    <img src={require("../assets/"+props.id+".jpg")} alt="Loading"/>
                </div>
                <div className='text-container'>
                    <div className='id'>
                        <h1>{new_id}</h1>
                        <h2>Header for long way to go</h2>
                    </div>
                    <div className="content">
                        <p className='p-left'>  inventore facere voluptate? Vitae fugit ratione, voluptatibus suscipit sit sint laborum.</p>
                    </div>
                </div>
                
            </div>
        );
    }
        
    }
    
export default CalenderDay;
