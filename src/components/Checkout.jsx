import React from 'react'
import { CreateOrderApi, VerifyPaymentApi } from '../Services/allAPI';
import { toast } from 'react-toastify';

function Checkout({total}) {

  // const handlePayment = async () => {
  //   try {
  //     // 1️⃣ Create order on backend
  //     const res = await CreateOrderApi({ amount: total });
  //     if (!res.data.success) {
  //       toast.error("Failed to create Razorpay order");
  //       return;
  //     }

  //     const { id: order_id, amount, currency } = res.data.order;

  //     // 2️⃣ Initialize Razorpay checkout
  //     const options = {
  //       key: import.meta.env.VITE_RAZORPAY_KEY_ID, // from .env
  //       amount,
  //       currency,
  //       name: "Custom Rodz",
  //       description: "Order Payment",
  //       order_id,
  //       handler: function (response) {
  //         toast.success("Payment Successful!");
  //         console.log("Razorpay Response:", response);
  //         // TODO: Call backend to verify & save order
  //       },
  //       prefill: {
  //         name: "Customer Name",
  //         email: "customer@example.com",
  //         contact: "9876543210",
  //       },
  //       theme: {
  //         color: "#0d6efd",
  //       },
  //     };

  //     const razor = new window.Razorpay(options);
  //     razor.open();
  //   } catch (err) {
  //     console.error("Payment error:", err);
  //     toast.error("Something went wrong with payment");
  //   }
  // };


  const handlePayment = async () => {
    try {
      const res = await CreateOrderApi({ amount: total });

      if (!res.data.success) {
        toast.error("Failed to create Razorpay order");
        return;
      }

      const { id: order_id, amount, currency } = res.data.order;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount,
        currency,
        name: "Your Shop Name",
        description: "Order Payment",
        order_id,
        handler: async function (response) {
          try {
            const verifyRes = await VerifyPaymentApi(response);
            if (verifyRes.data.success) {
              toast.success("✅ Payment verified & Order placed!");
              // TODO: clear cart, redirect to Orders page
            } else {
              toast.error("❌ Payment verification failed");
            }
          } catch (err) {
            console.error("Verify error:", err);
            toast.error("Something went wrong verifying payment");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#0d6efd",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error("Payment error:", err);
      toast.error("Something went wrong with payment");
    }
  };
  return (
    <>
      <div className="container my-5">
      <h3 className="fw-bold text-info">Checkout</h3>
      <p>Total Amount: ₹{total}</p>
      <button className="btn btn-info" onClick={handlePayment}>
        Pay with Razorpay
        
      </button>
    </div>


    
    </>
  )
}

export default Checkout
