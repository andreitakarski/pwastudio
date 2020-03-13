import React, { Fragment } from 'react';
import { Price } from '@magento/peregrine';
import { object, string } from "prop-types";
import defaultClasses from './priceWithDiscount.css';
import Icon from '../Icon';
import { Gift } from 'react-feather'

const DEFAULT_DISCOUNT_IN_PERCENT = 12;

const PriceWithDiscount = ({ price, title, productName, discount }) => {
    const currentPriceValue  = price.value;
    const oldPriceValue = (discount / currentPriceValue) * 100 + currentPriceValue;

    return (
        <Fragment>
            <div className={defaultClasses.header}>
                <Icon src={Gift} size={18} className={defaultClasses.icon}/>
                <div>
                    <h3 className={defaultClasses.title}>{title}</h3>
                    <p className={defaultClasses.productName}>{productName}</p>
                </div>
            </div>

            <div className={defaultClasses.prices}>
                <p className={defaultClasses.currentPrice}>
                    <Price
                        currencyCode={price.currency}
                        value={currentPriceValue}
                    />
                </p>
                <p className={defaultClasses.oldPrice}>
                    <Price
                        currencyCode={price.currency}
                        value={oldPriceValue}
                    />
                </p>
            </div>
        </Fragment>
    );
}

export default PriceWithDiscount;

PriceWithDiscount.propTypes = {
    price: object.isRequired,
    title: string,
    productName: string.isRequired
};

PriceWithDiscount.defaultProps = {
    classes: {},
    discount: DEFAULT_DISCOUNT_IN_PERCENT,
    title: `Sale: ${DEFAULT_DISCOUNT_IN_PERCENT}% off`,
    productName: ''
};
