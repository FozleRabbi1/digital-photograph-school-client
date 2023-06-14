import Lottie from "lottie-react";
import ContactAnim from "../../../../ComponentFile/AllAnimation/ContactAnim.json"
import { useContext } from "react";
import { ThimProviders } from "../../../ThimProviderFile/ThimProvider";
const Contact = () => {
    const { bgThim } = useContext(ThimProviders);

    return (
        <div className="">
            <h2 className="text-center text-2xl font-semibold mt-10 -mb-5 ">Contact Us</h2>
            <div className={`${bgThim === "dark" ? "bg-transparent border" : "bg-red-100 border "} rounded grid justify-center md:grid-cols-2 py-10  w-10/12 mx-auto my-16`}>
                <div className="contactAnim">
                    <Lottie animationData={ContactAnim} ></Lottie>
                </div>

                <form className="">
                    <input placeholder="Name" className="w-10/12 p-1 rounded-lg shadow-lg mx-auto block mt-14" type="text" />
                    <input placeholder="Type Your Valid Email" className="w-10/12 p-1 rounded-lg shadow-lg mx-auto block mt-3" type="text" />
                    <textarea placeholder="Type Your Message" className="w-10/12 p-1 rounded-lg shadow-lg mx-auto block mt-3" name="" id="" cols="30" rows="5"></textarea>
                    <input className="w-3/12 mx-auto  block mt-8 bg-gray-500 py-1 rounded-full" type="submit" value="SEND" />
                </form>
            </div>


        </div>
    );
};

export default Contact;