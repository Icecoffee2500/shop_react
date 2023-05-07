/* eslint-disable */
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "./../store/userSlice.js"
import { countUp, deleteItem } from "../store.js";
import Button from 'react-bootstrap/Button';


function Cart() {

    let state = useSelector((state) => state )
    let dispatch = useDispatch()
    

    return (
        <>
            <h6> {state.user.name} {state.user.age}의 장바구니 </h6>
            <Button onClick={()=>{ dispatch(changeAge(100))}}> 버튼 </Button>
            <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th> 삭제 </th>
                </tr>
            </thead>
            <tbody>
                {
                    state.cart.map(function(ele, i) {
                        return (
                            <tr key = {i} >
                                <td> { state.cart[i].id } </td>
                                <td> { state.cart[i].name } </td>
                                <td> { state.cart[i].count } </td>
                                <td> <Button onClick={()=>{
                                    dispatch(countUp(state.cart[i].id))
                                }}> + </Button> </td>
                                <td> <Button variant="outline-danger" onClick={()=>{
                                    dispatch(deleteItem(state.cart[i].name))
                                }}> X </Button> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table> 
            <h4>총 개의 상품이 있습니다!</h4>
            <Button variant="outline-primary"> 가보자고~! </Button>
        </>
    )
}

export default Cart;