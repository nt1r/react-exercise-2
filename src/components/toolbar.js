import React from 'react';
import '../styles/toolbar.scss';
import cartIconUrl from '../assets/cart.png';
import ProtoType from 'prop-types';

class Toolbar extends React.Component {
  static get propTypes() {
    return {
      cartItemsCount: ProtoType.number,
    };
  }

  render() {
    return (
      <div className={'toolbar'}>
        <h1 className={'toolbar_title'}>Store</h1>
        <div className={'toolbar_cart_div'}>
          <img src={cartIconUrl} alt={'cart_icon'} />
          <h3 className={'toolbar_cart_item_count'}>
            {this.props.cartItemsCount}
          </h3>
        </div>
      </div>
    );
  }
}

export default Toolbar;
