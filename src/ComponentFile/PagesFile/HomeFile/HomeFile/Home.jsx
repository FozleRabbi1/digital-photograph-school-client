import { useContext, useEffect, useState } from "react";
import Header from "../HeaderFile/Header";
import { ThimProviders } from "../../../ThimProviderFile/ThimProvider";
import Lottie from "lottie-react";
import Loading from "../../../AllAnimation/LofingDote.json"
import PopulerClass from "../PopulerClassFile/PopulerClass";
import Instructor from "../InstructorFile/Instructor";
// import useSelectCourseData from "../../../HooksFile/useSelectCourseData";

const Home = () => {
    const { bgThim } = useContext(ThimProviders)
    // const [Selecteddatas, refetch] = useSelectCourseData();

    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
            // refetch()            
        }, 1000);
    })


    return (
        <div className={`${bgThim === "dark" ? " border-t-[1px] " : ""}`}>
            {
                loader ? <div className=" p-16 -mt-28"  >
                    <Lottie animationData={Loading} ></Lottie>
                </div> :
                    <div>
                        <Header></Header>

                        <PopulerClass></PopulerClass>

                        <Instructor></Instructor>



                    </div>
            }

            {/* <Header></Header>
            this is home */}

        </div>
    );
};

export default Home;