import { MdDelete } from "react-icons/md";
import {remove_item} from '../redux/slices/CartSlice'
import { useDispatch } from "react-redux";
export default function CartItem({item}){
    const dispatch=useDispatch()
    function removefromcart(){
        dispatch(remove_item(item.id))
    }
    return (
        <div>
            <div>
                <p>{item.title}</p>
            </div>
            <div>
                <p>{item.description}</p>
            </div>
            <div>
                <img src={item.image}></img>
            </div>
            <div onClick={removefromcart}>
                <MdDelete/>
            </div>
            
        </div>
    )
}