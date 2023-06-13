import { useContext } from "react";
import useEnroledClass from "../../HooksFile/useEnroledClass";
import { ThimProviders } from "../../ThimProviderFile/ThimProvider";

const EnroledClass = () => {
    const [enroledDatas] = useEnroledClass();
    const {bgThim} = useContext(ThimProviders)
    return (
        <div>

            <div className=" w-11/12 my-5 mx-auto text-left">

                {
                    enroledDatas?.map(data =>
                        <div key={data._id}
                            className={` ${bgThim === "dark" ? "bg-transparent hover:bg-indigo-300 border" : "bg-gray-200 border border-white hover:bg-indigo-200"} p-2 grid grid-cols-3 items-center mb-3  duration-700`}
                        >

                            <div className="image">
                                <img src={data.image} className="w-24 h-24 rounded-md" alt="" />
                            </div>
                            <div className=" text-left -ms-24 ">
                                <p>class Time : {data.classTime} </p>
                                <p>Coures Time : {data.courseLength} </p>
                                <p>Your Instructor : {data.instructorName} </p>
                            </div>
                            <div className="-ms-20">
                                <p>TransactionId : {data.transactionId}</p>
                                <p>Category : {data.title}</p>
                                <p>Price : {data.price}</p>
                            </div>


                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default EnroledClass;