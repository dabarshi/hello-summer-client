import ClassesCard from "../../../components/ClassesCard/ClassesCard";
import usePopularClasses from "../../../hooks/usePopularClasses";


const PopularClasses = () => {
    const [classes] = usePopularClasses();

    return (
        <div>
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