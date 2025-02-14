import { PRODUCTS } from "../../products";

import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItems,getTotalAmount} =useContext(ShopContext);
    const totalAmount = getTotalAmount();
    const navigate = useNavigate()
    return ( 
        <div className="cart">
            <div>
                <h1>Your cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0){
                        return <CartItem data={product} />
                        
                    }

                })}
            </div>
            {totalAmount > 0 ?
            <div className="checkout">
                
                <p>SubTotal :${totalAmount}</p>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button>CheckOut</button>
            </div>
            :<h1>Your Cart Is Empty</h1>}
        </div>
     );
}
 
export default Cart;