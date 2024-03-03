import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartDropDown from '../../Component/cart-dropdown/Cart-dropdown.component';
import CartIcon from '../../Component/cart-icon/Cart-icon.Component';
import { UserContext } from '../../context/User.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { CartContext } from '../../context/cart.context';
import '../navigation/Navigation.styles.scss'



const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const{isCartOpen}=useContext(CartContext)

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
  

          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropDown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;