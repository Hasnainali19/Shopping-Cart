import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
const CartItem = (props) => {
    const {id,productName,price,productImage} = props.data;
    const { cartItems,addToCart,removeFromCart,updateCartItemCount} =useContext(ShopContext);
    return ( 
        <div className="cartItem">
            {" "}
            <img src={productImage} alt="Not found"/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>{price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) }></input>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
     );
}
 
export default CartItem;