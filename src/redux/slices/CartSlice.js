import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items:[],
}
export const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add_item:(state,action)=>{
            state.items.push(action.payload)
        },
        remove_item:(state,action)=>{
            state.items=state.items.filter((item)=>(item.id!==action.payload))
        }
    }
})

export default CartSlice.reducer
export const {add_item,remove_item} = CartSlice.actions