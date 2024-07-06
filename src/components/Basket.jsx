import './Basket.css'
import '../App.jsx'
export default function Basket({cost, shoppingList}){

    return(
        <div>
            <ul>
                {shoppingList.map((item, index) => {
                    return(
                         <li key={index}>{item}</li>
                    )
                })

                }
                 
            </ul>
            <p>{cost}</p>
        </div>
    )
}