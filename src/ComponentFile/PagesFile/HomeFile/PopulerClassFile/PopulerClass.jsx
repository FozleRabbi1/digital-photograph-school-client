import { useContext } from "react";
import useCourseData from "../../../HooksFile/useCourseData";
import { ThimProviders } from "../../../ThimProviderFile/ThimProvider";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AuthContext } from "../../../AuthProviderFile/AuthProvider";
import Swal from "sweetalert2";
import useSelectCourseData from "../../../HooksFile/useSelectCourseData";
import useAdmin from "../../../HooksFile/useAdmin";
import useInstructor from "../../../HooksFile/useInstructor";


const PopulerClass = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { bgThim } = useContext(ThimProviders)
    const [datas] = useCourseData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [, refetch] = useSelectCourseData()

    const seleceClassHendler = (data) => {
        console.log(data)

        const { _id, email, ...rest } = data;
        const datas = { email: user?.email, ...rest };

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

            <h2 className="text-2xl text-center mt-16 font-bold uppercase">Top 6 Classes</h2>

            <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto my-16 ">
                {
                    datas?.slice(0, 6).map(data =>
                        <div
                            className={`${data.totalSit - data.numberOfStudents === 0 && "bg-red-400"} rounded-lg ${bgThim === "dark" ? " border-[2px] border-indigo-400 border-x-indigo-500" : " border-[2px]"}`}
                            key={data._id}>

                            <img className="h-60 rounded-lg w-full" src={data.image} alt="" />

                            <div className={`text p-3`}>
                                <h2> <span className="font-bold" >Category</span> : {data.title}</h2>
                                <h2> <span className="font-bold" >Instructor</span> : {data.instructorName}</h2>
                                <p>  <span className="font-bold" >Total sit No</span> : {data.totalSit}</p>
                                <p>  <span className="font-bold" >Present Student</span> : {data.numberOfStudents}</p>
                                <span className="text-lg font-bold italic"> Available seats : <span className="text-red-500"> {data.totalSit - data.numberOfStudents}</span>  </span>
                                <p className=" font-bold">  <span className="" >Price</span > : <span className="text-red-500"> {data.price} $ /=</span></p>
                            </div>

                            <div className="flex justify-end">
                                {/* <button onClick={() => seleceClassHendler(data)} className={`${bgThim === "dark" ? "border-[1px]" : ""} border-[1px]  bg-transparent shadow-xl mb-5 me-5 py-1 px-3 rounded-2xl hover:bg-slate-300 duration-700 hover:text-black font-semibold`}>Select Class</button> */}
                                {
                                    data?.totalSit - data?.numberOfStudents < 1 || isAdmin?.admin || isInstructor?.instructor ? <button disabled className={`${bgThim === "dark" ? "border-[1px] text-black" : ""} border-[1px] bg-slate-300 shadow-xl mb-5 me-5 py-1 px-3 rounded-2xl hover:bg-slate-400 duration-700 hover:text-black font-semibold`}>Not Available</button>
                                        :
                                        <button onClick={() => seleceClassHendler(data)} className={`${bgThim === "dark" ? "border-[1px]" : ""} border-[1px]  bg-transparent shadow-xl mb-5 me-5 py-1 px-3 rounded-2xl hover:bg-slate-300 duration-700 hover:text-black font-semibold`}>Select Class</button>
                                }
                            </div>



                        </div>)
                }
            </div>
            <div className=" flex justify-end w-10/12 mx-auto -mt-6 ">
                <Link to={"/classes"} className={`flex items-center ${bgThim === "dark" ? "bg-indigo-400 text-red-500 " : ""} bg-gray-400 py-2 px-4 rounded-full font-bold italic`}>Show more <AiOutlineArrowRight className="ms-1 text-xl"></AiOutlineArrowRight> </Link>
            </div>


        </div>
    );
};

export default PopulerClass;