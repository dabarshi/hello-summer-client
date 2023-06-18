import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message)
        }
        else {
            setCardError('');
            console.log('Payment method', paymentMethod)
        }
    }
    return (
        <>
            <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
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
                <div className="text-center">
                    <button className="btn my-4" type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </div>

            </form>
            <div className="text-center">
                {cardError && <p className=" text-red-600">{cardError}</p>}
            </div>
        </>
    );
};

export default CheckOutForm;