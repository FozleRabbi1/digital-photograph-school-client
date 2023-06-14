import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThimProviders } from "../../ThimProviderFile/ThimProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Feedback = () => {
    const { id } = useParams()
    const { bgThim } = useContext(ThimProviders)

    const { data, refetch } = useQuery({
        queryKey: ["feedback"],
        queryFn: async () => {
            const res = await fetch(`https://digital-photograph-school-server.vercel.app/admin/feedback/${id}`);
            const data = await res.json(); // Extract the JSON data from the response
            return data;
        },
    });

    const adminFeedBackHandeler = (e) => {
        e.preventDefault();
        const feedBack = e.target.feedBack.value;

        axios.patch(`https://digital-photograph-school-server.vercel.app/admin/feedback/${id}`, { feedBack: feedBack })
            .then(res => {
                console.log(res.data)
                if(res.data.acknowledged){
                    Swal.fire({
                        position: '',
                        icon: 'success',
                        title: 'send your feedback successfully ',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })

        e.target.reset()


    }

    return (
        <div className="w-full">

            <div className={`${bgThim === "dark" ? "bg-transparent" : "bg-indigo-300"} grid grid-cols-2 gap-10 rounded-md  items-center px-4 text mb-5 justify-between mt-5 mx-10`} key={data?._id}>
                <img className=" rounded-xl py-1" src={data?.image} alt="" />

                <div className="  ">
                    <h2> <span className="font-semibold">Email</span> : {data?.email}</h2>
                    <h2> <span className="font-semibold">Duration</span> : {data?.courseLength}</h2>
                    <p> <span className="font-semibold">Seat</span> : {data?.totalSit}</p>
                    <p> <span className="font-semibold"> Class Time</span>  : {data?.classTime}</p>
                    <h2> <span className="font-semibold">Instructor Name</span>  : {data?.instructorName}</h2>
                    <h2> <span className="font-semibold">Category</span> : {data?.title}</h2>
                    <h2 className="mt-4 text-red-500 font-semibold"> <span className=" ">Adnin Decision</span> : {data?.pending}</h2>
                </div>

            </div>

            <form onSubmit={adminFeedBackHandeler}>

                <textarea placeholder="Write Your FeedBack here " className="bg-gray-300 mb-5 p-4 w-11/12 mx-auto rounded-lg block" name="feedBack" id="" cols="30" rows="5">
                </textarea>
                <div className="w-11/12 mx-auto flex justify-center">
                    <button type="submit" className="btn btn-outline btn-success px-24">Send</button>
                </div>

            </form>



        </div>
    );
};

export default Feedback;