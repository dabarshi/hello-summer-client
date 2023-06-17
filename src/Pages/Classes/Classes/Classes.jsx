import ClassesCard from "../../../components/ClassesCard/ClassesCard";
import useAllClasses from "../../../hooks/useAllClasses";


const Classes = () => {
    const [allClasses] = useAllClasses();
    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-2xl">Offered Classes</h1>
            </div>
            <div>
            <div className="grid lg:grid-cols-3 gap-3 my-4">
                {allClasses.map(singleClass => <ClassesCard
                key={singleClass._id}
                singleClass={singleClass}
                ></ClassesCard>)}
                
            </div>
            </div>
        </div>
    );
};

export default Classes;