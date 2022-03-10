import DishDetail from "../shared/DishdetailComponent";
import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const menu = this.props.dishes.map((dish, pos) => {
      return (
        <div className="col-12 col-md-5 m-1" key={pos}>
          <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
            <CardImg
              key={dish.id}
              width="100%"
              src={dish.image}
              alt={dish.name}
            />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail dish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;
