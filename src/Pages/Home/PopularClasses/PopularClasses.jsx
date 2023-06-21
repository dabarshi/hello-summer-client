import ClassesCard from "../../../components/ClassesCard/ClassesCard";
import usePopularClasses from "../../../hooks/usePopularClasses";


const PopularClasses = () => {
    const [classes] = usePopularClasses();

    return (
        <div>
            {/* Page title */}
            <div className="text-center my-2 p-4">
                <h2 className="text-2xl font-bold">Popular classes</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    classes.map(singleClass => <ClassesCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;