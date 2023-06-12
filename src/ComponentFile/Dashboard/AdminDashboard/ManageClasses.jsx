import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const { data: datas = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["AdminRouterCourses"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/AdminRouterCourses");
            return res.json();      // =============>>>  useAxiosSecure use korle res.json() use kora lagto na  use axios er moddhei convart hoye jeto
        }
    })
    console.log(datas)

    const decisionHendler = (id) => {
        fetch(`http://localhost:5000/adminAproveCourses/${id}`, {
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


    // http://localhost:5000/adminAproveCourses

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
                            </div>
                            <div>
                                <p>Seat : {data.totalSit}</p>
                                <p> Class Time : {data.classTime}</p>
                            </div>
                            <div onClick={() => decisionHendler(data._id)} className={`${data.pending === "pending" ? "bg-red-400" : "bg-green-400"} py-1 px-2 rounded-lg font-semibold hover:bg-red-500 duration-500 cursor-pointer italic`}>
                                <h2 className="border-b-2">Decision  </h2>
                                <h2 className="">{data.pending}   </h2>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default ManageClasses;