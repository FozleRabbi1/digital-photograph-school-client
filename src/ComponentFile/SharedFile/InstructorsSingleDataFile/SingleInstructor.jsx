import { useContext } from "react";
import { ThimProviders } from "../../ThimProviderFile/ThimProvider";
import "./SingleInstructor.css"
import { useLocation } from "react-router-dom";

const SingleInstructor = ({ data }) => {
    // console.log(data)
    const { bgThim } = useContext(ThimProviders)
    const location = useLocation();
    console.log(location.pathname)

    return (
        <div>

            <div className={`singleCommonStyle ${bgThim === "dark" ? "darkStyle" : "lightStyle"} ${location.pathname.includes("instructors") ? "grid grid-cols-2" : ""} `}>
                <img className="h-80" src={data.image} alt="" />

                <div className={`py-3 ${location.pathname.includes("instructors") ? " flex  items-center " : ""}`}>
                    <div className="ps-4">

                        <h2><span className="font-bold">Name</span> : {data.instructorName}</h2>
                        {
                            location.pathname.includes("instructors") && <>
                                <p><span className="font-bold">Email</span> : {data.email}</p>
                                <p><span className="font-bold">Category</span> : {data.title}</p>
                            </>
                        }
                        <p> <span className="font-bold">Present Student</span> : {data.numberOfStudents}</p>
                        
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SingleInstructor;