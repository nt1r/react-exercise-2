import React from 'react';
import ProtoType from 'prop-types';
import { onClickTestFunc } from '../App';

class PhoneItem extends React.Component {
  static get propTypes() {
    return {
      phoneItem: {
        productName: ProtoType.string,
        price: ProtoType.string,
      },
      onClickCartButton: ProtoType.func,
    };
  }

  render() {
    return (
      <div className={'phone_item_div'}>
        <h3>{this.props.phoneItem.productName}</h3>
        <img
          className={'image-size'}
          src={require('../assets/product_image_placeholder.png')}
          alt={'phone_image'}
        />
        <div className={'price_cart_div'}>
          <h3>{this.props.phoneItem.price}</h3>
          <button
            /*onClick={() => this.props.onClickCartButton(this.props.phoneItem.productName)}*/
            onClick={() => onClickTestFunc(this.props.phoneItem.productName)}
          >
            add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default PhoneItem;
