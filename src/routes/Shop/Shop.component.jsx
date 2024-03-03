import { useContext } from "react";
import '../Shop/Shop.styles.scss'
import {ProductsContext} from '../../context/categories.context'
import { CategoriesContext } from "../../context/categories.context";

import ProductCard from "../../Component/Product-Card/Product-Card.component";
const Shop =()=>{

    const {products} = useContext(CategoriesContext)
return(

    <div className='products-container'>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>

)

}

export default Shop;