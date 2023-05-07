import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'




let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        countUp(state, action) {
            let num = state.findIndex((a)=>{ return a.id === action.payload })
            state[num].count++
        },
        addItem(state, action) {
            let num = state.findIndex((a) => { return a.name === action.payload })
            num == -1
            ? state.push({id : state.length, name : action.payload, count : 1})
            : state[num].count++
        },
        deleteItem(state, action) {
            let num = state.findIndex((a) => { return a.name === action.payload })
            state[num].count > 1
            ? state[num].count--
            : state = state.splice(num, 1)
        }
    }
})
export let { countUp, addItem, deleteItem } = cart.actions


export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer,
  }
}) 