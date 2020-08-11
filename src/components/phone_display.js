import React from 'react';
import '../styles/phone.scss';
import ProtoType from 'prop-types';
import PhoneCategory from './phone_category';

class PhoneDisplay extends React.Component {
  static get propTypes() {
    return {
      phoneCategoryList: ProtoType.array,
      onClickCartButton: ProtoType.func,
    };
  }

  render() {
    return (
      <div className={'phone_display_div'}>
        {this.props.phoneCategoryList.map((phoneCategoryItems) => {
          return (
            <PhoneCategory
              key={phoneCategoryItems.category}
              phoneCategory={phoneCategoryItems.category}
              phoneCategoryItems={phoneCategoryItems.itemsList}
              onClickCartButton={this.props.onClickCartButton}
            />
          );
        })}
      </div>
    );
  }
}

export default PhoneDisplay;
