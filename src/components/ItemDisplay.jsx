import './ItemDisplay.css'
export default function ItemDisplay(props){

    return(
        <div id='coffee-options'>
            <div id='coffee-products'>
                <p>{props.productName}</p>
                <p>{props.price}</p>
                <button onClick={props.action}>Add to Basket</button>
            </div>
            
        </div>
    )
}