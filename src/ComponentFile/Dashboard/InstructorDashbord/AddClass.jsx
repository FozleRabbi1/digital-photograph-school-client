import { useForm } from "react-hook-form";
import useAxiosSecure from "../../HooksFile/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";

const VITE_image_upload_key = import.meta.env.VITE_image_upload_token


const AddClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_image_upload_key}`
    const { register, handleSubmit, reset } = useForm();

    // title
    // classTime
    // classDuration
    // courseLength
    // image
    // instructorName
    // description
    // numberOfStudents
    // totalSit
    // price


    const onSubmit = data => {

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
                    const { name, price, category, recipe } = data;
                    const newClass = { email: user.email, name, price: parseFloat(price), category, recipe, image: imageUrl }

                    axiosSecure.post("/newCarts", newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: '',
                                    icon: 'success',
                                    title: 'Added your item',
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


            <div className="formDiv pb-24">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-red-400 w-10/12 mx-auto py-8 rounded-lg px-10 ">

                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text font-semibold">Recipy name*</span>
                        </label>
                        <input
                            {...register("name", { required: true, maxLength: 120 })}
                            type="text" placeholder="Recipy name" className="input input-bordered w-full" />
                    </div>

                    <div className="flex">

                        <div className="form-control w-full ms-2 ">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number"  {...register("price", { required: true })} placeholder="Recipy name" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipy detailes*</span>
                        </label>
                        <textarea  {...register("recipe", { required: true })} className="textarea textarea-bordered h-44" placeholder="Recipy detiles"></textarea>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select Image*</span>
                        </label>
                        <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <input className="btn btn-outline btn-secondary w-72 mt-4 mx-auto block" type="submit" value="ADD ITEM" />

                </form>
            </div>

        </div>
    );
};

export default AddClass;