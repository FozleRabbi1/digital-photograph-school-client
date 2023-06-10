import { useContext } from "react";
import useCourseData from "../../HooksFile/useCourseData";
import { ThimProviders } from "../../ThimProviderFile/ThimProvider";

const Classess = () => {
    const { bgThim } = useContext(ThimProviders)
    const [datas] = useCourseData();
    return (
        <div>
            <h2 className="text-2xl text-center mt-16 font-bold uppercase">All Classes here </h2>
            <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto mt-10 pb-10">
                {
                    datas?.map(data =>
                        <div
                            className={`rounded-lg ${bgThim === "dark" ? " border-[2px] border-indigo-400 border-x-indigo-500" : " border-[2px]"}`}
                            // className={`${bgThim === "dark" ? " drop-shadow-xl shadow-white	 " : "drop-shadow-2xl"}`}
                            key={data._id}>

                            <img className="h-60 rounded-lg" src={data.image} alt="" />

                            <div className={`${bgThim === "dark" ? "darkStylee" : "lightStylee"} text p-3`}>
                                {/* <div className={`${bgThim === "dark" ? "darkStyle" : "lightStyle"} text p-3`}> */}
                                <h2>Category : {data.title}</h2>
                                <h2>Instructor : {data.instructorName}</h2>
                                <p>Present Students : {data.numberOfStudents}</p>
                                <p>Total seats No : {data.totalSit}</p>

                                <span className="text-lg font-bold italic"> Available seats : <span className="text-red-500"> {data.totalSit - data.numberOfStudents}</span>  </span>
                            </div>

                        </div>)
                }
            </div>

        </div>
    );
};

export default Classess;