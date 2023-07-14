import {useState} from "react";
import cart from '../../public/images/icon-cart.svg'

const Info = () => {


    const [number, setNumber] = useState(0)
    return (
        <div className={'info'}>
            <div className="container">
                <div className="info-content">
                    <p className="brand">
                        SNEAKER COMPANY
                    </p>
                    <h1 className="product-name">
                        Fall Limited <br/> Sneakers
                    </h1>
                    <p className="description">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
                        outer sole, they'll withstand everything the weather can offer.
                    </p>

                    <h2 className="price">
                        $125.00 <span className={'discount'}>50%</span>
                    </h2>
                    <h4 className="old-price">
                        $250.00
                    </h4>
                    <div className="add-to-card">
                        <div className="adder">
                            <span
                                className={'increase'}
                                onClick={() => {
                                    if (number >= 1) {
                                        setNumber(number - 1)
                                    }
                                   
                                }}
                                    >-</span>
                                    <span
                                    className={'number'}
                            >{number}</span>
                            <span
                                className={'decrease'}
                                onClick={() => {
                                    setNumber(number + 1)
                                }
                                }
                            >+</span>
                        </div>
                        <button className={'btn'}>
                            <img src={cart} alt=""/>
                            Add to card
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Info;