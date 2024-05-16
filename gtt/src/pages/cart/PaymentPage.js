import PaymentComponent from "../../components/cart/PaymentComponent";
import {useRecoilState} from "recoil";
import {cartDataState} from "../../atoms/cartDataState";
import {userState} from "../../atoms/userState";

const PaymentPage = () => {
    const [cartData, setCartData] = useRecoilState(cartDataState);
    const [userInfo] = useRecoilState(userState)

    return(
        <div>
            <PaymentComponent/>
        </div>
    )
}
export default PaymentPage
