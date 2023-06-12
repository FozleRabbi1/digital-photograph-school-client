import { useParams } from "react-router-dom";
import useAxiosSecure from "../../HooksFile/useAxiosSecure";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const Payment = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const [data, setData] = useState({})


    useEffect(() => {
        axiosSecure.get(`/getPaymentData/${id}`,)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }, [id, axiosSecure])
    const price = data.price;

    return (
        <div>

            <Elements stripe={stripePromise}>
                <CheckOut data={data} price={price}></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;