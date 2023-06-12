import { useContext } from "react";
import useInstructtorSetCourse from "../../HooksFile/useInstructtorSetCourse";
import { ThimProviders } from "../../ThimProviderFile/ThimProvider";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";

const MyClasses = () => {
    const [instructorSetCourse, refetch] = useInstructtorSetCourse();
    const { bgThim } = useContext(ThimProviders);
    console.log(instructorSetCourse)

    const updateHandeler = (id) => {
        console.log(id)
    }

    const deleteHandeler = (id) => {
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
                fetch(`http://localhost:5000/myClasses/${id}`, {
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

    return (
        <div>


            <div className="overflow-x-auto pt-5 px-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-indigo-300 text-black text-base">
                            <th>S/N</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Admin Approvial</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            instructorSetCourse?.map((data, index) =>
                                <tr className={`${bgThim === "dark" ? "hover:text-black hover:bg-indigo-200" : "hover:text-black hover:bg-gray-300"}`}
                                    key={data._id}
                                >
                                    <th>{index + 1}</th>
                                    <td className="m-0 p-2">
                                        <div className="mask mask-squircle w-12 h-12 bg-red-500 m-0 p-0">
                                            <img src={data.image} className="h-full w-full m-0 p-0" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </td>
                                    <td className="m-0 p-2">{data.instructorName}</td>
                                    <td className="m-0 p-2">{data.title}</td>
                                    <td className="m-0 p-2">{data.pending}...</td>
                                    <td className="m-0 p-2"> <AiFillEdit onClick={() => updateHandeler(data._id)} className="text-3xl text-indigo-300 hover:text-indigo-700  duration-700"></AiFillEdit> </td>
                                    <td className="m-0 p-2"> <RiDeleteBin2Fill onClick={() => deleteHandeler(data._id)} className="text-3xl text-red-500 hover:text-red-800  duration-700 "></RiDeleteBin2Fill> </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyClasses;