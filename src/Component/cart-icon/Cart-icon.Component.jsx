import '../cart-icon/Cart.icon.styles.scss'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import{ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
const  CartIcon =()=>{

    const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)

    const toggleCartOpen =()=>setIsCartOpen(!isCartOpen)
    return(
        <div className='cart-icon-container' onClick={toggleCartOpen}>

            <ShoppingIcon className=' shopping-icon'></ShoppingIcon>
            <span className='item-count'>{cartCount}</span>
        </div>
    )


}

export default CartIcon
