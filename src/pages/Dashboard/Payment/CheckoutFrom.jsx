import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import  "./CheckoutForm.css"

const CheckoutForm =({price,products}) =>{
    const {user} = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [proccessing, setProccessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')

    useEffect(() =>{
        if(price > 0){
            fetch("http://localhost:5000/create-payment-intent",{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                price: 100,
            }),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setClientSecret(data.clientSecret);
        })
        }
    },[price])




    const handleSubmit = async (event) =>{
        event.preventDefault()
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return;
        }
        const {error} = await stripe.createPaymentMethod({
            type: "card",
            card,
        })
        if(error){
            console.log(error)
            setCardError(error.message)
        }
        else{
            setCardError('')
        }

        setProccessing(true)

        const { paymentIntent , error:confirmError} = await stripe.confirmCardPayment(
            clientSecret, 
        {
            payment_method: {
            card: card,
            billing_details: {
                email: user?.email || "unknown",
                name: user?.displayName || "annonymous",
            },
            },
        })
        
        if(confirmError){
            setCardError(confirmError)
        }
        setProccessing(false)
        if(paymentIntent?.status === "succeeded"){
            setTransactionId(paymentIntent.id)
            const payment ={
                name: user?.displayName,
                email: user?.email,
                data: new Date(),
                transactionId: paymentIntent.id,
                status: "service pending",
                price: parseFloat(price),
                classesItems: products.map(item => item._id),
                productItems: products.map(item => item.productId),
                classesName: products.map(item => item.classesName),
                quantity: products.length,

            }
            fetch("http://localhost:5000/payments",{
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(payment),
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.insertedId){
                    alert("Payment confirmed successfully")
                }
            })
            
        }
    }
return(
    <>
    <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
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
      <button className="w-full py-2 bg-blue-500 my-10 rounded" type="submit" disabled={!stripe || !clientSecret ||proccessing}>
        Payment
      </button> <br />
    </form>
    {cardError && <p className="text-red-600 text-center my-5">{cardError}</p>}
    {transactionId && <p className="text-xl text-green-600">Your transaction successfully completed with transactionId: {transactionId}</p>}
    </>
)
}
export default CheckoutForm;