// import { useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const ClassesCard = ({ singleClass }) => {
    const {_id, className, classImg, instructorName, availableSeats, price} = singleClass;
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (_id) => {
        if(!user){
            navigate('/login', {state: {from: location}})
        }
        console.log(_id)
    }

    return (
        <div style= {{backgroundColor : availableSeats === 0 && "red", color: availableSeats === 0 && 'white' }} className={`card bg-base-100 shadow-xl`}>
            <figure className="p-6"><img className="rounded" src={classImg}/></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p><span className="font-light">Instructor : </span>{instructorName}</p>
                <p><span className="font-light">Available Seats : </span>{availableSeats}</p>
                <p><span className="font-light">Price : </span>${price}</p>
                <div className="card-actions justify-center mt-10">
                    <button onClick={() => handleClick(_id)} disabled={availableSeats === 0 ? true : false} className="btn bg-[#005BA2] hover:bg-[#07416d] text-white">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;