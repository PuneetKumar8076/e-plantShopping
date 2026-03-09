import React from "react";

function ProductList(){

const plants = [

{
category:"Indoor Plants",
items:[
{id:1,name:"Snake Plant",price:10,image:"https://via.placeholder.com/100"},
{id:2,name:"Aloe Vera",price:12,image:"https://via.placeholder.com/100"}
]
},

{
category:"Decorative Plants",
items:[
{id:3,name:"Peace Lily",price:15,image:"https://via.placeholder.com/100"},
{id:4,name:"Spider Plant",price:11,image:"https://via.placeholder.com/100"}
]
},

{
category:"Garden Plants",
items:[
{id:5,name:"Money Plant",price:9,image:"https://via.placeholder.com/100"},
{id:6,name:"Rubber Plant",price:18,image:"https://via.placeholder.com/100"}
]
}

]

return(

<div>

<h2>Plant Shop</h2>

{plants.map((group,index)=>(

<div key={index}>

<h3>{group.category}</h3>

{group.items.map(plant=>(

<div key={plant.id}>

<img src={plant.image} alt={plant.name}/>

<h4>{plant.name}</h4>

<p>${plant.price}</p>

<button>Add to Cart</button>

</div>

))}

</div>

))}

</div>

)

}

export default ProductList;
