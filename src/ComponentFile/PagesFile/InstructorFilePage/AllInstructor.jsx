import {  useLocation } from "react-router-dom";
import useInstructors from "../../HooksFile/useInstructors";
import SingleInstructor from "../../SharedFile/InstructorsSingleDataFile/SingleInstructor";

const AllInstructor = () => {
    const [instructorsDatas] = useInstructors();
    const location = useLocation();
    // instructors
    return (
        <div>

            {
                location.pathname !== "/instructors" ? <h2 className="text-2xl text-center mt-16 font-bold uppercase mb-10">Top 6 Instructor</h2>
                    :
                    <h2 className="text-2xl text-center mt-16 font-bold uppercase mb-10">All Instructor</h2>
            }

            <div className="grid grid-cols-2 w-11/12 gap-10 mx-auto pb-10">
                {
                    instructorsDatas.map(data => <SingleInstructor
                        key={data._id}
                        data={data}
                    ></SingleInstructor>)
                }
            </div>

            

        </div>
    );
};

export default AllInstructor;