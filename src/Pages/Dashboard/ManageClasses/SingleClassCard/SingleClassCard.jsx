

const SingleClassCard = ({ singleClass }) => {
    const {className, classImg, instructorName, availableSeats} = singleClass;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={classImg}/></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p><span className="text-slate-500">Instructor : </span>{instructorName}</p>
                <p><span className="text-slate-500">Available Seats : </span>{availableSeats}</p>
                <div className="card-actions justify-center mt-10">
                    <button className="btn bg-[#005BA2] hover:bg-[#07416d] text-white">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;