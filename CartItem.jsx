import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {

const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);

const handleIncrement = (item) => {
dispatch(updateQuantity({
id: item.id,
quantity: item.quantity + 1
}));
};

const handleDecrement = (item) => {

if(item.quantity === 1){
dispatch(removeItem(item.id));
}else{
dispatch(updateQuantity({
id: item.id,
quantity: item.quantity - 1
}));
}

};

const handleDelete = (id) => {
dispatch(removeItem(id));
};

const totalAmount = cartItems.reduce(
(total,item)=> total + item.price * item.quantity,
0
);

return (

<div>

<h2>Shopping Cart</h2>

{cartItems.length === 0 && <p>Your cart is empty</p>}

{cartItems.map((item)=>(

<div key={item.id}>

<img src={item.image} alt={item.name} width="80"/>

<h3>{item.name}</h3>

<p>Price: ${item.price}</p>

<p>Quantity: {item.quantity}</p>

<p>Total: ${item.price * item.quantity}</p>

<button onClick={()=>handleIncrement(item)}>+</button>

<button onClick={()=>handleDecrement(item)}>-</button>

<button onClick={()=>handleDelete(item.id)}>Delete</button>

</div>

))}

<h2>Total Cart Amount: ${totalAmount}</h2>

</div>

);

}

export default CartItem;
