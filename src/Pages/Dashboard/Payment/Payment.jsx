import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
    const id = useParams();
    console.log(id);
    return (
        <div>
            {/* Page title */}
            <div className="text-center my-2 p-4">
                <h2 className="text-2xl font-bold">Payment</h2>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;