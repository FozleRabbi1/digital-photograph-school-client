import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageClasses = () => {
    
    const { data: datas = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["AdminRouterCourses"],
        queryFn: async () => {
            const res = await fetch("https://digital-photograph-school-server.vercel.app/AdminRouterCourses");
            return res.json();      // =============>>>  useAxiosSecure use korle res.json() use kora lagto na  use axios er moddhei convart hoye jeto
        }
    })

    console.log(datas)

    const decisionAproveHendler = (id) => {
        fetch(`https://digital-photograph-school-server.vercel.app/adminAproveCourses/${id}`, {
            method: "PATCH"
        })
            .then(() => {
                refetch();
                Swal.fire({
                    position: '',
                    icon: 'success',
                    title: 'Course is approved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const decisionDeniedHendler = (id) => {
        fetch(`https://digital-photograph-school-server.vercel.app/adminDeniedCourses/${id}`, {
            method: "PATCH"
        })
            .then(() => {
                refetch();
                Swal.fire({
                    position: '',
                    icon: 'success',
                    title: 'Course is Denied',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }


    // https://digital-photograph-school-server.vercel.app/adminAproveCourses

    return (
        <div>

            <div className="pt-5 px-10 "  >
                {
                    datas?.map(data =>
                        <div className="flex rounded-md bg-indigo-300 items-center px-4 text mb-5 justify-between" key={data._id}>
                            <img className="w-24 h-24 rounded-xl p-1" src={data.image} alt="" />
                            <div className=" w-3/12  ">
                                <h2>Instructor Name : {data.instructorName}</h2>
                                <h2>Category : {data.title}</h2>
                            </div>
                            <div className=" w-4/12  ">
                                <h2>Email : {data.email}</h2>
                                <h2>Duration : {data.courseLength}</h2>
                                <h2>Price : {data.price} $ </h2>
                            </div>
                            <div>
                                <p>Seat : {data.totalSit}</p>
                                <p> Class Time : {data.classTime}</p>
                            </div>

                            <div onClick={() => decisionAproveHendler(data._id)} className={` w-24 text-center  ${data.pending === "pending" ? "bg-red-400" : "bg-green-300"} py-1 px-2 rounded-lg font-semibold hover:bg-red-500 duration-500 cursor-pointer italic`}>
                                <small>Approve</small>
                                <h2 className="border-b-2">Decision  </h2>
                                <h2 className="">{data.pending}   </h2>
                            </div>

                            {


                                data.pending === "denied" ?
                                    <div className={`w-24 text-center ${data.pending === "denied" ? "bg-red-600" : "bg-green-100"} py-1 px-2 ms-2 rounded-lg font-semibold hover:bg-red-500 duration-500 cursor-pointer italic`}>
                                        <h2 className="">{data.pending}   </h2>
                                        <h2 className="border-b-2">Decision  </h2>
                                        <Link to={`/dashboard/feedBack/${data._id}`} className="bg-gray-400 text-sm rounded-2xl px-1">FeedBack</Link>
                                    </div>
                                    :
                                    <div onClick={() => decisionDeniedHendler(data._id)} className={`w-24 text-center ${data.pending === "denied" ? "bg-red-600" : "bg-green-100"} py-1 px-2 ms-2 rounded-lg font-semibold hover:bg-red-500 duration-500 cursor-pointer italic`}>
                                        <small>Denied</small>
                                        <h2 className="border-b-2">Decision  </h2>
                                        <h2 className="">{data.pending}   </h2>

                                    </div>
                            }

                            {/* <button>Fidback</button> */}



                        </div>)
                }
            </div>

        </div>
    );
};

export default ManageClasses;