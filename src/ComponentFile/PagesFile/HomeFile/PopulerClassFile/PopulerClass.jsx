import { useContext } from "react";
import useCourseData from "../../../HooksFile/useCourseData";
import { ThimProviders } from "../../../ThimProviderFile/ThimProvider";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const PopulerClass = () => {
    const { bgThim } = useContext(ThimProviders)
    const [datas] = useCourseData();



    return (
        <div>

            <h2 className="text-2xl text-center mt-16 font-bold uppercase">Top 6 Classes</h2>

            <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto my-16 ">
                {
                    datas?.slice(0, 6).map(data =>
                        <div
                            className={`rounded-lg ${bgThim === "dark" ? " border-[2px] border-indigo-400 border-x-indigo-500" : " border-[2px]"}`}
                            key={data._id}>

                            <img className="h-60 rounded-lg w-full" src={data.image} alt="" />

                            <div className={`text p-3`}>
                                <h2> <span className="font-bold" >Category</span> : {data.title}</h2>
                                <h2> <span className="font-bold" >Instructor</span> : {data.instructorName}</h2>
                                <p>  <span className="font-bold" >Present Student</span> : {data.numberOfStudents}</p>
                                <p>  <span className="font-bold" >Total sit No</span> : {data.totalSit}</p>
                                <p className=" font-bold">  <span className="" >Price</span > : <span className="text-red-500"> {data.price} $ /=</span></p>
                                <span className="text-lg font-bold italic"> Available seats : <span className="text-red-500"> {data.totalSit - data.numberOfStudents}</span>  </span>
                            </div>

                        </div>)
                }
            </div>
            <div className=" flex justify-end w-10/12 mx-auto -mt-6 ">
                <Link to={"/classes"} className={`flex items-center ${bgThim === "dark" ? "bg-indigo-400 text-red-500 " : ""} bg-gray-400 py-2 px-4 rounded-full font-bold italic`}>Show more <AiOutlineArrowRight className="ms-1 text-xl"></AiOutlineArrowRight> </Link>
            </div>


        </div>
    );
};

export default PopulerClass;