import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import useAxiosSecure from "../../HooksFile/useAxiosSecure";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";
import "././CheckOut.css";
import Swal from "sweetalert2";

const CheckOut = ({ data, price }) => {
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            setCardError(error.message)
            console.log('[error]', error)
        }
        else {
            setCardError("")
            // console.log("[pamentMethod]", paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "unknoe",
                        email: user?.email || "anonymus"
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent)

        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId)
            // TODO next stapes
            const paymentInfo = {
                email: user?.email,
                transactionId: paymentIntent.id,
                classId: data?._id,
                price: price,
                quantity: 1,
                date: new Date(),
                title: data?.title,
                classTime: data?.classTime,
                courseLength: data?.courseLength,
                image: data?.image,
                instructorName: data?.instructorName,
                description: data?.description,
                numberOfStudents: data?.numberOfStudents,
                totalSit: data?.totalSit,
                status: "service pending"
            }
            axiosSecure.post("/payment", paymentInfo)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: '',
                            icon: 'success',
                            title: 'Enroll successFull',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }


    }

    return (
        <div className="w-[700px] mt-10 main-form-div">
            <div>
                {cardError ? <p className="my-5 text-red-500">{cardError}</p> : ""}
                {transactionId ? <p className="my-5 text-green-500">Transaction complite , your transaction ID is : {transactionId}</p> : ""}
            </div>

            <form className="w-12/12 border p-5" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-5 w-4/12" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckOut;