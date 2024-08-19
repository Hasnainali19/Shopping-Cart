import { PRODUCTS } from "../../products";
import Product from "./product";

const shop = () => {
    return ( 
       <div className="shop">
        <div className="shopTitle">
            <h1>Hasnainali Store</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (
                <Product data={product} />
            ))}
        </div>
       </div>
     );
}
 
export default shop;