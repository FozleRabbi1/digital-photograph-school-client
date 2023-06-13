import { Link } from "react-router-dom";
import useInstructors from "../../../HooksFile/useInstructors";
import SingleInstructor from "../../../SharedFile/InstructorsSingleDataFile/SingleInstructor";
import { useContext } from "react";
import { ThimProviders } from "../../../ThimProviderFile/ThimProvider";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Rotate } from "react-awesome-reveal";

const Instructor = () => {
    const [instructorsDatas] = useInstructors()
    const { bgThim } = useContext(ThimProviders)

    return (
        <div>
            <h2 className="text-2xl text-center mt-16 font-bold uppercase mb-10">
                <Rotate cascade>
                    Top 6 Instructor
                </Rotate>
            </h2>

            <div className="grid md:grid-cols-3 justify-center w-10/12 gap-10 my-10 mx-auto">
                {
                    instructorsDatas.slice(0, 6).map(data => <SingleInstructor
                        key={data._id}
                        data={data}
                    ></SingleInstructor>)
                }
            </div>

            <div className=" flex justify-end w-10/12 mx-auto ">
                <Link to={"/instructors"} className={`flex items-center ${bgThim === "dark" ? "bg-indigo-400 text-red-500 " : ""} bg-gray-400 py-2 px-4 rounded-full font-bold italic`}>Show more <AiOutlineArrowRight className="ms-1 text-xl"></AiOutlineArrowRight> </Link>
            </div>

        </div>
    );
};

export default Instructor;