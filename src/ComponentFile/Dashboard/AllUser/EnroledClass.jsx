import { useContext } from "react";
import useEnroledClass from "../../HooksFile/useEnroledClass";
import { ThimProviders } from "../../ThimProviderFile/ThimProvider";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const EnroledClass = () => {
    const [enroledDatas, ,refetch] = useEnroledClass();
    const { bgThim } = useContext(ThimProviders)

    const deleteCourseHandler = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://digital-photograph-school-server.vercel.app/enroledCLass/${id}`, {
                    method: "DELETE"
                })
                    .then(() => {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your Course was deleted.',
                            'success'
                        )
                    })
                    .catch(() => { })

            }
        })
    }


    return (
        <div>
            <h2 className="text-2xl text-center font-semibold my-5">Entolled Class Here</h2>

            <div className=" w-11/12 my-5 mx-auto text-left">

                {
                    enroledDatas?.map(data =>
                        <div key={data._id}
                            className={` ${bgThim === "dark" ? "bg-transparent hover:bg-indigo-300 border" : "bg-gray-200 border border-white hover:bg-indigo-200"} p-2 grid grid-cols-4 items-center mb-3  duration-700`}
                        >

                            <div className="image">
                                <img src={data.image} className="w-24 h-24 rounded-md" alt="" />
                            </div>
                            <div className=" text-left -ms-24  ">
                                <p>class Time : {data.classTime} </p>
                                <p>Coures Time : {data.courseLength} </p>
                                <p>Your Instructor : {data.instructorName} </p>
                            </div>
                            <div className="  -me-28  ">
                                <p>TransactionId : {data.transactionId}</p>
                                <p>Category : {data.title}</p>
                                <p>Price : {data.price}</p>
                                <p>Enroll Date : {data.date}</p>
                            </div>
                            <button title="Delete Your Course" onClick={() => deleteCourseHandler(data._id)} className=" w-28 ms-auto flex justify-end p-4 text-3xl text-red-400 hover:text-red-500 duration-500"> <RiDeleteBin2Fill></RiDeleteBin2Fill> </button>


                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default EnroledClass;