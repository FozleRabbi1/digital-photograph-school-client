import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { FaCcAmazonPay } from "react-icons/fa";
import useSelectCourseData from "../../../HooksFile/useSelectCourseData";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClass = () => {
    const [selecteddatas, refetch, loading] = useSelectCourseData();
    console.log(selecteddatas)



    const updateHandaler = () => {

    }

    const deleteHandaler = (id) => {
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
                fetch(`http://localhost:5000/course/${id}`, {
                    method: "DELETE"
                })
                    .then(() => {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your product deleted.',
                            'success'
                        )
                    })
                    .catch(() => { })

            }
        })
    }

    const PayHandaler = () => {

    }


    return (
        <div>



            <div className="overflow-x-auto p-5 ">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="">
                        <tr className="rounded-md" >
                            <th className="bg-indigo-300 text-base rounded-md " >total {selecteddatas.length}  <br /> S/N </th>
                            <th className="bg-indigo-300 text-base rounded-md  " >Img</th>
                            <th className="bg-indigo-300 text-base rounded-md " >Instructor Name</th>
                            <th className="bg-indigo-300 text-base rounded-md " >Category</th>
                            <th className="bg-indigo-300 text-base rounded-md " >Price</th>
                            <th className="bg-indigo-300 text-base rounded-md " >See Ditles</th>
                            <th className="bg-indigo-300 text-base rounded-md " >Action</th>
                            <th className="bg-indigo-300 text-base rounded-md " >Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selecteddatas?.length && selecteddatas?.map((data, index) =>
                                <tr key={data._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="mask mask-squircle w-20 h-20 bg-red-500">
                                            <img src={data.image} className="h-full w-full" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </td>
                                    <td>
                                        <span className="">{data.instructorName} </span>
                                    </td>
                                    <td>
                                        <span className="">{data.title}</span>
                                    </td>
                                    <td>
                                        <span className="text-red-500 font-semibold">{data.price} $</span>
                                    </td>
                                    <th>
                                        <button onClick={() => updateHandaler(data._id)} className="bg-gray-600 rounded-full p-2 btn-ghost text-white"><AiFillEye className="text-2xl text-green-300 "></AiFillEye></button>
                                    </th>
                                    <th>
                                        <button onClick={() => deleteHandaler(data._id)} className="bg-gray-600 rounded-full p-2 btn-ghost text-white"><RiDeleteBin2Fill className="text-2xl text-red-500 "></RiDeleteBin2Fill></button>
                                    </th>
                                    <th>
                                        {/* <button onClick={() => PayHandaler(data._id)} className="bg-gray-600 rounded-full p-2 btn-ghost text-white"><FaCcAmazonPay className="text-2xl text-green-500 "></FaCcAmazonPay></button> */}
                                        <button onClick={() => PayHandaler(data._id)} className="bg-gray-600 rounded-full p-2 btn-ghost text-white">  <Link to={`/dashboard/payment/${data._id}`}><FaCcAmazonPay className="text-2xl text-green-500 "></FaCcAmazonPay></Link> </button>
                                        {/* <Link to={`/dashboard/payment/${data._id}`}></Link> */}
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>
                    {/* foot */}

                </table>
            </div>

        </div>
    );
};

export default SelectedClass;