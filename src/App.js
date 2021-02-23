import logo from './logo.svg';
import './App.css';

function App() {
      const nayoks = ['Anwar', 'Alomgir', 'Zafor', 'Manna']
      const products = [
        {name:"Photoshop", price: "$98.99"},
        {name:"Illastrator", price: "$76.99"},
        {name:"Lightroom", price: "$69.99"},

      ]
  return (
    <div className="App">
      <header className="App-header">
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>

        <Person name = {nayoks[0]} nayika = 'Mousumi'></Person>
        <Person name = {nayoks[1]} nayika = 'Bobita'></Person>
        <Person name = {nayoks[2]} nayika = 'No nayika'></Person>
      </header>
    </div>
  );
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
function Person(props) {
  const personStyle={
    border : '2px solid red',
    margin : '20px',
    padding : '20px',
    width : '400px'
  }
  return (
    <div style = {personStyle}>
      <h1>Name : {props.name} </h1>
      <h3>Hero of  {props.nayika} </h3>
    </div>
  )
  
}

export default App;
