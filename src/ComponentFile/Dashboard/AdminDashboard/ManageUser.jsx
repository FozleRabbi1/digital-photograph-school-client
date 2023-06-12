import { useEffect } from "react";
import useAllUsers from "../../HooksFile/useAllUsers";
import { FaUserShield, FaUsers } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import Swal from "sweetalert2";
import useAxiosSecure from "../../HooksFile/useAxiosSecure";

const ManageUser = () => {
    const [users, refetch] = useAllUsers();
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        refetch()
    }, [users.email, refetch])

    const adminHandaler = (user) => {
        // fetch(`http://localhost:5000/users/admin/${user._id}`, {
        //     method: "PATCH"
        // })
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => res.data)
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: '',
                        icon: 'success',
                        title: `${user.name} is Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const instructorHandaler = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: '',
                        icon: 'success',
                        title: `${user.name} is Instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const userHandaler = (user) => {
        fetch(`http://localhost:5000/users/user/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: '',
                        icon: 'success',
                        title: `${user.name} is User now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>

            <div className="overflow-x-auto p-5 ">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="">
                        <tr className="rounded-md" >
                            <th className="bg-indigo-100 text-base rounded-md " >total {users.length}  <br /> S/N </th>
                            <th className="bg-indigo-100 text-base rounded-md  " >Image</th>
                            <th className="bg-indigo-100 text-base rounded-md " > Name</th>
                            <th className="bg-indigo-100 text-base rounded-md " >Admin</th>
                            <th className="bg-indigo-100 text-base rounded-md " >Users</th>
                            <th className="bg-indigo-100 text-base rounded-md " >Instructors</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.length && users?.map((data, index) =>
                                <tr key={data._id} className="hover:bg-indigo-50 hover:text-black duration-500">
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="mask mask-squircle w-16 h-16 bg-red-500">
                                            <img src={data.image} className="h-full w-full" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </td>
                                    <td>
                                        <span className="">{data.name} </span>
                                    </td>
                                    <th>
                                        {
                                            data?.role === "admin" ?
                                                "Admin"
                                                :
                                                <button onClick={() => adminHandaler(data)} className="bg-gray-600 rounded-full p-2 btn-ghost text-white"><FaUserShield className="text-2xl text-green-300 "></FaUserShield></button>
                                        }
                                    </th>
                                    <th>
                                        <button onClick={() => userHandaler(data)} className="bg-gray-600 rounded-full p-2 btn-ghost text-white"><FaUsers className="text-2xl text-red-300 "></FaUsers></button>
                                    </th>
                                    <th>
                                        {
                                            data?.role === "instructor" ? "Instructor"
                                                :
                                                <button onClick={() => instructorHandaler(data)} className="bg-gray-600 rounded-full p-2 btn-ghost text-white"><ImUsers className="text-2xl text-indigo-300 "></ImUsers></button>
                                        }
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

export default ManageUser;