import React, { Component } from 'react';
import ShowCart from './../ShowCart/ShowCart';
import AddData from '../AddData/AddData';

export default class Data extends Component {
  state = {
    allProducts : [
        {'id': 1 , 'count':12 , 'isSale' :true  , 'category' :'mobile' , 'name' : 'iphone14' , 'price' : 64000 },
        {'id': 2, 'count' :13 , 'isSale' :true  , 'category' :'mobile' , 'name' : 'iphone14 pro' , 'price' : 70000 },
        {'id': 3, 'count' :14 ,' isSale' :true  , 'category' :'mobile' , 'name' : 'iphone16 pro Max ' , 'price' : 98000 },
        {'id': 4, 'count' :5  , 'isSale' :false , 'category' :'TV' ,     'name' : 'Toshiba' , 'price' :123  },
        {'id': 5, 'count' :45 , 'isSale' :false , 'category' :'TV' ,     'name' : 'LG', 'price' : 123123 },
        {'id': 6, 'count' :55 , 'isSale' :false , 'category' :'TV' ,     'name' : 'Samsung', 'price' : 13434 },
        {'id': 7, 'count' :3  , 'isSale' :true  , 'category' : 'tablet' ,'name' : 'asds', 'price' : 12431245 },
        {'id': 8, 'count' :2  , 'isSale' :true  , 'category' : 'tablet' ,'name' :'asdasd' , 'price' : 45645 },
        {'id': 9, 'count' :5  , 'isSale' :true  , 'category' : 'tablet' ,'name' : 'sda', 'price' : 56756 },
  
    ],
  };

  addProduct = (newProduct) => {
    const newCopy = [...this.state.allProducts];
    newCopy.push(newProduct);
    this.setState({ allProducts: newCopy });
  };

  deleteElement = (id) => {
    const updatedProducts = this.state.allProducts.filter(product => product.id !== id);
    this.setState({ allProducts: updatedProducts });
  };

  updateCount = (product) => {
    const newCopy = [...this.state.allProducts];
    const index = newCopy.indexOf(product);
    newCopy[index].count++;
    this.setState({ allProducts: newCopy });
  };

  lessCount = (product) => {
    const newCopy = [...this.state.allProducts];
    const index = newCopy.indexOf(product);
    if (newCopy[index].count > 0) {
      newCopy[index].count--;
    } else {
      alert('لا يمكن أن يكون العدد أقل من 0');
    }
    this.setState({ allProducts: newCopy });
  };

  render() {
    return (
      <div className="container">
        <AddData onAdd={this.addProduct} />
        <div className="row">
          {this.state.allProducts.map((product, idx) => (
            <ShowCart
              key={idx}
              data={product}
              delete={this.deleteElement}
              update={this.updateCount}
              less={this.lessCount}
            />
          ))}
        </div>
      </div>
    );
  }
}
