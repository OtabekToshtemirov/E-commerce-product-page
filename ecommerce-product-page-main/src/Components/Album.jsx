import {files} from './files.js';
import {useState} from "react";

export default function Album() {

    const [products] = useState(files);
    const [value, setValue] = useState(0);

    const {mainPhoto} = products[value];

    return (
        <div className="album">
            <div className="container">
                <article>
                    <img src={mainPhoto} alt=""/>
                    <ul className={'thumbnail-photos'}>
                        {
                            products.map((item, index) => {
                                return (

                                    <li key={item.id} onClick={() => setValue(index)}>
                                        <img src={item.thumbnail} alt=""/>
                                    </li>


                                )
                            })
                        }
                    </ul>
                </article>

            </div>
        </div>

    );
}