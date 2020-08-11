import React, { Component } from 'react';
import './App.scss';
import Toolbar from './components/toolbar';
import PhoneDisplay from './components/phone_display';

class App extends Component {
  dataUrl = 'http://localhost:3000/products';

  state = {
    phoneCategoryList: [
      {
        category: 'no data',
        itemsList: [
          {
            productName: 'no data',
            price: 'no data',
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

  componentDidMount() {
    onClickTestFunc = this.onClickCartButton.bind(this);

    const fetchPromise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.dataUrl, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.send();
    });
    fetchPromise
      .then((response) => {
        console.log(response);
        this.setState(this.convertResponseData(JSON.parse(response)));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  convertResponseData(response) {
    const categoryList = [];
    response.forEach((phoneDomain) => {
      let targetIndex = this.findExistCategory(categoryList, phoneDomain);
      if (targetIndex > -1) {
        categoryList[targetIndex].itemsList.push({
          productName: phoneDomain.name,
          price: phoneDomain.price,
          cart: false,
        });
      } else {
        categoryList.push({
          category: phoneDomain.category,
          itemsList: [
            {
              productName: phoneDomain.name,
              price: phoneDomain.price,
              cart: false,
            },
          ],
        });
      }
    });
    return {
      phoneCategoryList: categoryList,
      cartItemsCount: 0,
    };
  }

  findExistCategory(categoryList, phoneDomain) {
    let index = -1;
    categoryList.some((categoryItem, i) => {
      if (categoryItem.category === phoneDomain.category) {
        index = i;
        return true;
      } else {
        return false;
      }
    });
    return index;
  }

  onClickCartButton = (productName) => {
    console.log(`${productName} click`);
    this.setState((previousState) => ({
      ...previousState,
      cartItemsCount: previousState.cartItemsCount + 1,
    }));
  };

  /*static onClickTestFunc = (productName) => {
    console.log(`${productName} click`);
    this.setState((previousState) => ({
      ...previousState,
      cartItemsCount: previousState.cartItemsCount + 1,
    }));
  }*/
}

export let onClickTestFunc = (productName) => {
  console.log(`${productName} click`);
  this.setState((previousState) => ({
    ...previousState,
    cartItemsCount: previousState.cartItemsCount + 1,
  }));
};

export default App;
