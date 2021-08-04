import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
class CategoriyList extends Component {
  state = {
    categories: [],
    currentCategory: "",
  };

  // getcategories fonksiyonu için didmount yapıyorum
  componentDidMount() {
    this.getCategoris();
  }

  // function yazıyorum :

  getCategoris = () => {
    fetch("http://localhost:3000/categories")
      .then(response=> response.json())
      .then(data =>this.setState({categories:data}))
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title} </h3>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          {this.state.categories.map((categoriy) => (
            <ListGroupItem active ={categoriy.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(categoriy)}
              key={categoriy.id}
            >
              {categoriy.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}

export default CategoriyList;
