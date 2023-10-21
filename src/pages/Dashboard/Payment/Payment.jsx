import { loadStripe } from "@stripe/stripe-js";
// import payment from "../../../assets/image/payment.jpg";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutFrom";
import useProduct from "../../../hooks/useProduct";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway)
const Payment = () =>{
    const [products] = useProduct();
    const total = products.reduce((sum, item) =>sum + item?.price,0)
    console.log(total)
    const price = parseFloat(total).toFixed(2);
    console.log(price)
 return (
    <div className="w-full text-white px-10">
        <h1 className="text-blue-600 text-center text-2xl my-10">Payment</h1>
        <div className="">
            
            <Elements stripe={stripePromise}>
                <CheckoutForm products={products} price={price} />
            </Elements>
            {/* <img className="w-72 h-56" src={payment} alt="" /> */}
        </div>
    </div>
 )
}

export default Payment;