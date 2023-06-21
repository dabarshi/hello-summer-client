import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useSelectedClass from "../../../hooks/useSelectedClass";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const StudentSelectedClasses = () => {
    const { user } = useContext(AuthContext);
    const [selectedClasses, refetch] = useSelectedClass();

    // handle delete
    const handleDelete = (selectedClass) => {

        Swal.fire({
            title: `Do you want to delete ${selectedClass.name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b7a12-summer-camp-server-side-dabarshi.vercel.app/selectedClasses/${selectedClass._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(`Delete successful`)
                        }
                    })

            }
        })
        console.log(selectedClass)

    }
    // // handle Payment
    // const handlePay = (selectedClass) => {
    //     console.log(selectedClass)
    // }

    return (
        <div className="mx-4">
            {/* Header section */}
            <div className="flex justify-center items-center gap-10 bg-indigo-600 text-white p-10">
                <figure>
                    <img className="w-20 rounded" src={user.photoURL} alt="" />
                </figure>
                <div>
                    <h3 className="font-semibold text-lg"><span className="font-light">Name : </span>{user.displayName}</h3>
                    <p><span className="font-light">Email : </span>{user.email}</p>
                </div>
            </div>
            <div className="my-2">
                {/* Page title */}
                <div className="text-center my-2 p-4">
                    <h2 className="text-2xl font-bold">Selected Classes</h2>
                </div>
                {/* page Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {selectedClasses.map(selectedClass => <div
                        key={selectedClass._id}
                    >
                        {/* CLass content */}
                        <div className={`card bg-base-100 shadow-xl`}>
                            <figure className="p-6"><img className="rounded" src={selectedClass.classImg} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{selectedClass.className}</h2>
                                <p><span className="font-light">Instructor : </span>{selectedClass.instructorName}</p>
                                <p><span className="font-light">Price : </span>${selectedClass.price}</p>
                                <div className="card-actions justify-center mt-10">
                                    <button onClick={() => handleDelete(selectedClass)} className="btn bg-[#005BA2] hover:bg-[#07416d] text-white">Delete</button>
                                    <Link to={`/dashboard/payment/${selectedClass._id}`}>
                                        <button className="btn bg-[#005BA2] hover:bg-[#07416d] text-white">Pay</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>

        </div>
    );
};

export default StudentSelectedClasses;