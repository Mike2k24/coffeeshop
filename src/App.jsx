import { useState } from 'react'
import data from './components/data.json'
import './App.css'
import ItemDisplay from './components/ItemDisplay.jsx'
import Basket from './components/Basket.jsx'

function App() {
  const [products, setProducts] = useState(data)
  const [totalCost, setTotalCost] = useState(0)
  const [basketList, setBasketList] = useState([])

  let updatedBasket = []
  function addItem(amount, item){
    setTotalCost(totalCost + amount)
    let eachPrice = `${item} - ${amount}`
    setBasketList([...basketList, eachPrice])
  }

  return (
    <>
    <div id='header'>
      <img className='header-img' src="../public/Images/coffeeImg.png" alt="Lovely coffee image" />
    </div>
    <div id='coffee-options'>
          {products.map((product, index) => {
              
              return(
                <ItemDisplay 
                productName = {product.productName}
                price = {product.price}
                action = {() => {addItem(product.price, product.productName)}}
                key = {index}/>
              )
            }) 
            }
    </div>
      <div>
            <h2>Shopping Basket</h2>
          <Basket
            shoppingList={basketList}
            cost = {totalCost.toFixed(2)}
            />
      </div>
    </>
  )
}

export default App
