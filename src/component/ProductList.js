import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="our" title="product" />
                        <div className="row">
                            <ProductConsumer>
                                {
                                   value => {
                                     return value.products.map(product => {
                                      return <Product key={product.id} product={product} />;
                                    });
                                 }
                                }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

ProductList.propTypes = {
    value: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}