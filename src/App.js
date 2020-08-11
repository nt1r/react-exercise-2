import React, { Component } from 'react';
import './App.scss';
import Toolbar from './components/toolbar';
import PhoneDisplay from './components/phone_display';

class App extends Component {
  state = {
    phoneCategoryList: [
      {
        category: 'iPhone',
        itemsList: [
          {
            productName: 'iPhone11',
            price: '￥5999',
            cart: false,
          },
          {
            productName: 'iPhoneXS',
            price: '￥5399',
            cart: false,
          },
          {
            productName: 'iPhoneSE',
            price: '￥3599',
            cart: false,
          },
        ],
      },
      {
        category: 'HUAWEI',
        itemsList: [
          {
            productName: 'HUAWEI P40 Pro+',
            price: '￥7999',
            cart: false,
          },
          {
            productName: 'HUAWEI Mate 30',
            price: '￥5000',
            cart: false,
          },
          {
            productName: 'HUAWEI nova 7',
            price: '￥4000',
            cart: false,
          },
        ],
      },
    ],
    cartItemsCount: 0,
  };

  render() {
    return (
      <div className="app">
        <header>
          <Toolbar cartItemsCount={this.state.cartItemsCount} />
        </header>

        <main>
          <section>
            <PhoneDisplay
              phoneCategoryList={this.state.phoneCategoryList}
              onClickCartButton={this.onClickCartButton}
            />
          </section>
        </main>
      </div>
    );
  }

  onClickCartButton = (productName) => {
    console.log(`${productName} click`);
    this.setState((previousState) => ({
      ...previousState,
      cartItemsCount: previousState.cartItemsCount + 1,
    }));
  };
}

export default App;
