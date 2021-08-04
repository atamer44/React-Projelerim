import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", description: "",city:"" };

  handlerChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handlerSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!! ", 2);
    alertify.success(this.state.password + " password to db!! ", 2)
    alertify.success(this.state.description + " description to db!! ", 2)
    alertify.success(this.state.city + " city to db!! ", 2)
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handlerSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handlerChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handlerChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="description">description</Label>
            <Input
              type="textarea"
              name="description"
              placeholder="Enter description"
              onChange={this.handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">city</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handlerChange}
            >
              <option>Ankara</option>
              <option>İzmir</option>
              <option>Malatya</option>
              <option>İstanbul</option>
              <option>Elazığ</option>
            </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
