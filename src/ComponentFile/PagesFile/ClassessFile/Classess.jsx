import { useContext } from "react";
import useCourseData from "../../HooksFile/useCourseData";
import { ThimProviders } from "../../ThimProviderFile/ThimProvider";
import { useNavigate } from "react-router-dom";
import useSelectCourseData from "../../HooksFile/useSelectCourseData";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../../HooksFile/useAdmin";
import useInstructor from "../../HooksFile/useInstructor";

const Classess = () => {
    const { bgThim } = useContext(ThimProviders)
    const [datas] = useCourseData();
    const navigate = useNavigate();
    const [, refetch] = useSelectCourseData()
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const seleceClassHendler = (data) => {

        const { _id, email, ...rest } = data;
        const datas = { email: user?.email, ...rest };
        console.log(datas)

        if (user && user.email) {

            fetch("http://localhost:5000/course", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(datas)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch() // update the number of the cart
                        Swal.fire({
                            position: '',
                            icon: 'success',
                            title: 'successfully added your product',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                })
                .catch(err => console.error(err.message))
        }
        else {
            Swal.fire({
                title: 'Please Login Firse',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to login page'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }

    }



    return (
        <div>
            <h2 className="text-2xl text-center mt-16 font-bold uppercase">All Classes here </h2>
            <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto mt-10 pb-10">
                {
                    datas?.map(data =>
                        <div
                            className={`${data.totalSit - data.numberOfStudents === 0 && "bg-red-400"} rounded-lg ${bgThim === "dark" ? " border-[2px] border-indigo-400 border-x-indigo-500" : " border-[2px]"}`}
                            // className={`${bgThim === "dark" ? " drop-shadow-xl shadow-white	 " : "drop-shadow-2xl"}`}
                            key={data._id}>

                            <img className="h-60 rounded-lg w-full" src={data.image} alt="" />

                            <div className={`${bgThim === "dark" ? "darkStylee" : "lightStylee"} text p-3`}>
                                {/* <div className={`${bgThim === "dark" ? "darkStyle" : "lightStyle"} text p-3`}> */}
                                <h2>Category : {data.title}</h2>
                                <h2>Instructor : {data.instructorName}</h2>
                                <p>Total seats No : {data.totalSit}</p>
                                <p>Present Students : {data.numberOfStudents}</p>

                                <span className="text-lg font-bold italic"> Available seats : <span className="text-red-500"> {data.totalSit - data.numberOfStudents}</span>  </span>
                            </div>

                            <div className="flex justify-end">
                                {
                                    data.totalSit - data.numberOfStudents < 1 || isAdmin?.admin || isInstructor.instructor ?

                                        <button disabled className={`${bgThim === "dark" ? "border-[1px] text-black" : ""} border-[1px] bg-slate-300 shadow-xl mb-5 me-5 py-1 px-3 rounded-2xl hover:bg-slate-400 duration-700 hover:text-black font-semibold`}>Not Available</button>

                                        :
                                        <button onClick={() => seleceClassHendler(data)} className={`${bgThim === "dark" ? "border-[1px]" : ""} border-[1px]  bg-transparent shadow-xl mb-5 me-5 py-1 px-3 rounded-2xl hover:bg-slate-300 duration-700 hover:text-black font-semibold`}>Select Class</button>
                                }
                                {/* <button onClick={() => seleceClassHendler(data)} className={`${bgThim === "dark" ? "border-[1px]" : ""} border-[1px]  bg-transparent shadow-xl mb-5 me-5 py-1 px-3 rounded-2xl hover:bg-slate-300 duration-700 hover:text-black font-semibold`}>Select Class</button> */}
                            </div>

                        </div>)
                }

            </div>

        </div>
    );
};

export default Classess;