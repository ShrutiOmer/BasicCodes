import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt="img1" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos, voluptatibus ab consequatur at expedita nam dignissimos? Sunt ducimus animi labore! Iure suscipit in perspiciatis quis molestias deleniti, numquam quia!</p>
                        <NavLink to='' className="btn btn-primary">Click Me</NavLink>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Card
