// import { useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const ClassesCard = ({ singleClass }) => {
    const { className, classImg, instructorName, availableSeats, price, _id } = singleClass;
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (singleClass) => {
        console.log(singleClass);
        if (user) {
            const selectedClass = {
                classId: _id,
                className,
                instructorName,
                classImg,
                price,
                email: user.email,
            }
            fetch('https://b7a12-summer-camp-server-side-dabarshi.vercel.app/selectedClasses', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire('Successful added');
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login before adding a class?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }

    return (
        <div style={{ backgroundColor: availableSeats === 0 && "red", color: availableSeats === 0 && 'white', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className={`card bg-base-100 shadow-xl`}>
            <figure className="p-6"><img className="rounded" src={classImg} /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p><span className="font-light">Instructor : </span>{instructorName}</p>
                <p><span className="font-light">Available Seats : </span>{availableSeats}</p>
                <p><span className="font-light">Price : </span>${price}</p>
                <div className="card-actions justify-center mt-10">
                    <button onClick={() => handleClick(singleClass)} disabled={availableSeats === 0 ? true : false} className="btn-custom">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;