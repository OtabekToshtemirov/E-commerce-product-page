import avatar from '../../public/images/image-avatar.png';
import cart from '../../public/images/icon-cart.svg';
import logo from '../../public/images/logo.svg';
import {useState} from "react";

const Navigation = () => {

    const [openCart, setOpenCart] = useState(false)


    return (
        <div className={'navigation'}>
            <div className="container">
                <div className="navigation__content">
                    <div className="navigation__content__logo">
                        <a href="#">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <div className="navigation__content__menu">
                        <ul>
                            <li>
                                <a href="#">Collections</a>
                            </li>
                            <li>
                                <a href="#">Men</a>
                            </li>
                            <li>
                                <a href="#">Women</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`navigation__content__cart `}
                    >
                        <img src={cart} alt="cart"
                             className={`cart  `}
                             onClick={() => {
                                 setOpenCart(!openCart)
                             }
                             }

                        />
                        <img src={avatar} alt="avatar"
                             className={'avatar'}
                        />
                    </div>
                    <div className={`open-cart 
                    ${openCart ? 'open' : ''}`}


                    >
                        <div className="open-cart__content">
                            <div className="open-cart__content__header">
                                <h3>Cart</h3>
                            </div>
                            <div className="open-cart__content__body">
                                     <h5>
                                            Your cart is empty
                                     </h5>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
            );
            };

            export default Navigation;