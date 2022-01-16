import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectPrice } from "../features/PriceSlice";
//const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
const Paypal = () =>{
    const paypal = useRef();
    const price  = useSelector(selectPrice);
    useEffect(() => {
        window.paypal.Buttons({
            //orden de pago
           createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            reference_id: "PUHF",
                            description: "Netflix subscription",
                            amount: {
                                //currency_code: "EUR",
                                value: price,
                            },
                        },
                    ],
                });
            },
            //aprobacción del pago
         onApprove: async (data, actions) => {
                const order = await  actions.order.capture();
                console.log(order);
            },
            onError: err => console.log(err),

        }).render(paypal.current);
    }, [])
    return (
        <div ref={paypal}>Paypal</div>
    )
}

export default Paypal;