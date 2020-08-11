import React from 'react';
import PhoneItem from './phone_item';
import ProtoType from 'prop-types';

class PhoneCategory extends React.Component {
  static get propTypes() {
    return {
      phoneCategory: ProtoType.string,
      phoneCategoryItems: ProtoType.array,
      onClickCartButton: ProtoType.func,
    };
  }

  render() {
    return (
      <div className={'phone_category_div'}>
        <h2 className={'phone_category_title'}>{this.props.phoneCategory}</h2>
        <div className={'phone_category_list_div'}>
          {this.props.phoneCategoryItems.map((phoneItem) => {
            return (
              <PhoneItem
                key={phoneItem.productName}
                phoneItem={phoneItem}
                onClickCartButton={this.props.onClickCartButton}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PhoneCategory;
