import { useContext } from "react";
import useEnroledClass from "../../../../HooksFile/useEnroledClass";
import { ThimProviders } from "../../../../ThimProviderFile/ThimProvider";

const PaymentHistory = () => {
    const [enroledDatas, , refetch] = useEnroledClass();
    const { bgThim } = useContext(ThimProviders)


    return (
        <div className="pt-10 w-10/12 mx-auto">

            {
                enroledDatas?.map(data =>
                    <div key={data._id}
                        className={` ${bgThim === "dark" ? "bg-transparent hover:bg-indigo-300 border" : "bg-gray-200 border border-white hover:bg-indigo-200"} p-2 flex justify-between px-10 items-center mb-3  duration-700`}
                    >

                        <div className="image">
                            <img src={data.image} className="w-24 h-24 rounded-md" alt="" />
                        </div>
                        <div className=" text-left ">
                            <p className="text-red-400">TransactionId : {data.transactionId}</p>
                            <p>Your Instructor : {data.instructorName} </p>
                        </div>
                        <div className="  ">
                            <p>Price : {data.price} $</p>
                            <p>Enroll Date : {data.date}</p>
                        </div>


                    </div>
                )
            }

        </div>
    );
};

export default PaymentHistory;