import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import ReactHtmlParser from 'react-html-parser';



function ProductScreen(props) {

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    console.log(product);

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }


    return <div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        {loading ? <div>Loading...</div> :
            error ? <div>{error} </div> :
                (
                    <div className="details ">

                        <div >
                            <div className="details-image">
                                <img className="imgDetails" src={product.image} alt="product" />

                                
                            </div>
                        </div>


                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    {product.rating} Start ({product.numReviews} Reviews)
                    </li>
                                <li>
                                    Price:<b>${product.price}</b>
                                </li>

                            </ul>
                        </div>
                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: {product.price}
                                </li>
                                <li>
                                    Status: {product.countInStock > 0 ? "In Stock" : ""}
                                </li>
                                <li>
                                    Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                        {[...Array(product.countInStock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        )}
                                    </select>
                                </li>
                                <li>
                                    {product.countInStock > 0 && <button onClick={handleAddToCart} className="button">Add To Cart</button>

                                    }
                                </li>
                            </ul>
                        </div>

                        <div className="details-description">
                            <li>
                                Description:
                                <div >
                                    {ReactHtmlParser(product.description)}
                                </div>
                            </li>
                        </div>
                    </div>
                )}


    </div>
}

export default ProductScreen;