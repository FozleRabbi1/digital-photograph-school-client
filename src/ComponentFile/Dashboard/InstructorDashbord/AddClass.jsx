import useAxiosSecure from "../../HooksFile/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import LoadingAnim from "../../../ComponentFile/AllAnimation/loading (2).json"

const VITE_image_upload_key = import.meta.env.VITE_image_upload_key


const AddClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_image_upload_key}`
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setLoading] = useState(false)


    const onSubmit = data => {
        setLoading(true)

        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const imageUrl = imageData.data.display_url;
                    const { title, price, classTime, courseLength, instructorName, description, totalSit, numberOfStudents } = data;
                    const newClass = { email: user.email, title, price: parseFloat(price), classTime, courseLength, instructorName, description, totalSit: parseFloat(totalSit), image: imageUrl, numberOfStudents: parseFloat(numberOfStudents) }

                    console.log(34, newClass)

                    axiosSecure.post("/courses", newClass)
                        .then(data => {
                            setLoading(false)
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: '',
                                    icon: 'success',
                                    title: 'Added your Course',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })


    };

    return (
        <div>


            <div className="formDiv pb-24 pt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-indigo-300 w-10/12 mx-auto py-8 rounded-lg px-10 ">

                    <div className="flex">
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text font-semibold">Category</span>
                            </label>
                            <input
                                {...register("title", { required: true, maxLength: 120 })}
                                type="text" placeholder="Category" className="input text-black input-bordered w-full" />
                        </div>

                        <div className="form-control w-full ms-2 ">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Name</span>
                            </label>
                            <input
                                {...register("instructorName", { required: true, maxLength: 120 })}
                                type="text" placeholder="Instructor Name" className="input text-black input-bordered w-full" />
                        </div>
                    </div>

                    <div className="flex">

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Course Time</span>
                            </label>
                            <input type="text"  {...register("courseLength", { required: true })} placeholder="No / month" className="input text-black input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ms-2 ">
                            <label className="label">
                                <span className="label-text font-semibold">Class Time</span>
                            </label>
                            <input type="classTime"  {...register("classTime", { required: true })} placeholder="Class Time" className="input text-black input-bordered w-full " />
                        </div>

                    </div>

                    <div className="flex">

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Total Seat</span>
                            </label>
                            <input type="number"  {...register("totalSit", { required: true })} placeholder="Total Seat" className="input text-black input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ms-2 ">
                            <label className="label">
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input type="number"  {...register("price", { required: true })} placeholder="Recipy name" className="input text-black input-bordered w-full " />
                        </div>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Nomber Of Student </span>
                        </label>
                        <input type="number"  {...register("numberOfStudents", { required: true })} className="text-black textarea textarea-bordered" placeholder="Number Of Student"></input>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class description</span>
                        </label>
                        <textarea  {...register("description", { required: true })} className="text-black textarea textarea-bordered h-28" placeholder="Descriptin"></textarea>
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Select Image</span>
                        </label>
                        <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs text-black" />
                    </div>



                    {
                        isLoading ? <span className="btn btn-outline btn-secondary bg-white w-72 mt-4 mx-auto  flex justify-center">
                            <Lottie className="w-14 h-10 bg-transparent" animationData={LoadingAnim}></Lottie>
                        </span> :
                            <input className="btn btn-outline btn-secondary w-72 mt-4 mx-auto block" type="submit" value="ADD ITEM" />
                    }

                </form>
            </div>

        </div>
    );
};

export default AddClass;