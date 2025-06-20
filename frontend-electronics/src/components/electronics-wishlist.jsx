import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "./slicers/product-slicer";

export function ElectronicsWishList()
{

    const wishlistItems = useSelector(state => state.wishlist);
    const dispatch = useDispatch();

    function handleRemove(id){
        dispatch(removeFromWishlist(id));
    }

    return(
        <div>
            <h2>WishList</h2>
            <ul>
                {
                    wishlistItems.map(item => 
                        <li key={item.id}> {item.name} 
                            <button onClick={() => handleRemove(item.id)} style={{marginLeft: '10px'}}>Remove</button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}