import React, { Component } from 'react';

export default class AddData extends Component {
  state = {
    id: '',
    count: '',
    isSale: '',
    category: '',
    name: '',
    price: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // تجهيز البيانات وتحويلها للأنواع الصحيحة
    const newProduct = {
      id: Date.now(), // id تلقائي
      count: Number(this.state.count),
      isSale: this.state.isSale === 'false',
      category: this.state.category,
      name: this.state.name,
      price: Number(this.state.price),
    };

    this.props.onAdd(newProduct); // نبعته للكومبوننت الأب
    this.setState({ // نفرغ الفورم بعد الإرسال
      id: '',
      count: '',
      isSale: '',
      category: '',
      name: '',
      price: '',
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center">Add Product</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control my-2"
            name="count"
            value={this.state.count}
            onChange={this.handleChange}
            placeholder="Number of product"
          />
          <input
            type="text"
            className="form-control my-2"
            name="isSale"
            value={this.state.isSale}
            onChange={this.handleChange}
            placeholder="Is Sale (true / false)"
          />
          <input
            type="text"
            className="form-control my-2"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            placeholder="Category"
          />
          <input
            type="text"
            className="form-control my-2"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Product Name"
          />
          <input
            type="text"
            className="form-control my-2"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            placeholder="Price"
          />
          <button type="submit" className="btn btn-primary mt-2">Add Product</button>
        </form>
      </>
    );
  }
}
