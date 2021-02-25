import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
      const products = [
        {name:"Photoshop", price: "$98.99"},
        {name:"Illastrator", price: "$76.99"},
        {name:"Lightroom", price: "$69.99"},
        {name:"Premiere El", price: "$249.99"},

      ]
  return (
    <div className="App">
      <header className="App-header">
      <h2>Now I'm a React Person </h2>
    
      <Counter></Counter>
      <Users></Users>

      {products.map(product=><li>{product.name}</li>)}

      {products.map(product => <Product product={product}></Product>)}
     
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  return(
    <div>
    <h1>Count : {count} </h1>
    <button onClick={ () => setCount(count + 1)}>Increase</button>
    <button onClick={ ()=>setCount(count -1)}>Decrease</button>
  </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  },[])

  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {users.map(user => <li>Name: {user.name}<br></br> Id: {user.id} <br></br> Emai: {user.email} <br></br> . </li>)}
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border : '1px solid gray',
    borderRadius : '5px',
    color : 'orange',
    backgroundColor : 'lightgray',
    height : '200px',
    width : '200px',
    margin:'10px',
    float: 'left'
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
    <h2>{name}</h2>
    <h3>{price}</h3>
    <button>Buy Now</button>

</div>
  )
 
}

export default App;
