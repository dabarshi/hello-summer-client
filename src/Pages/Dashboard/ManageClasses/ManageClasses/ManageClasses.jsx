
import useAllClasses from "../../../../hooks/useAllClasses";
import SingleClassCard from "../SingleClassCard/SingleClassCard";


const ManageClasses = () => {
    const [allClasses] = useAllClasses();
    return (
        <div>
            <div className="text-center font-bold text-2xl">
                <h1>Manage Classes</h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-3 my-4">
                {allClasses.map(singleClass => <SingleClassCard 
                key={singleClass._id}
                singleClass={singleClass}
                ></SingleClassCard>)}
                
            </div>
        </div>
    );
};

export default ManageClasses;