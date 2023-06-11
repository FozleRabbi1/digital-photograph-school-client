import { useParams } from "react-router-dom";

const Payment = () => {
    const {id} = useParams();
    return (
        <div>
            this is payment page {id}
        </div>
    );
};

export default Payment;