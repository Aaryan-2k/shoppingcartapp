import {useSelector,useDispatch} from 'react-redux'
import {add_item,remove_item} from '../redux/slices/CartSlice'
export default function Product({post}){
    const cart=useSelector((state)=>(state.cart.items))
    const dispatch=useDispatch()
    function addtocart(){
        dispatch(add_item(post))
    }
    function removefromcart(){
        dispatch(remove_item(post.id))
    }
    return (
        <div className='product-card'>
            <div>
                <h3>{post.title}</h3>
            </div>
            <div>
                <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>
            <div>
                <img src={post.image}></img>
            </div>
            <div>
                <p className='price'>${post.price}</p>
            </div>
            <div>
                {
                    cart.some((item)=>(item.id==post.id)) ?
                    (<button onClick={removefromcart}>Remove from Cart</button>):
                    (<button onClick={addtocart}>Add to Cart</button>)
                }
            </div>
        </div>
    )
}