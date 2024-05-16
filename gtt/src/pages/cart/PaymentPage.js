import React from "react";
import PaymentComponent from "../../components/cart/PaymentComponent";
import { useLocation } from "react-router-dom";
import {Typography} from "@material-tailwind/react";

const PaymentPage = () => {
    const location = useLocation();
    const selectedProducts = location.state ? location.state.selectedProducts : null;

  /*  if (!selectedProducts) {
        return <div className="flex justify-center min-h-[250px] p-20"><Typography variant="h3">결제 가능한 상품이 없습니다.</Typography></div>
    }*/

    return(
        <div>
            <PaymentComponent selectedProducts={selectedProducts}/>
        </div>
    )
}
export default PaymentPage;
