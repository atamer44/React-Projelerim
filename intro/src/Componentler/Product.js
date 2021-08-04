import React, { Component } from "react";
import { Table,Button} from "reactstrap";

class Product extends Component {

  addToCart=(product) =>{
    alert(product.productName)     
    
      }

  
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}--{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product  Name</th>
              <th>Unit Price</th>
              <th>quantity PerUnit</th>
              <th>units InStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addToCart(product)} color="info">add</Button></td> 
                
                
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Product;
