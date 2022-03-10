import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedDishDetail: this.props.dsdetail,
    };
  }
  renderDish(dish) {
    if (dish != null)
      return (
        <Card className="col-12 col-md-5 m-1 col-sm-12 col-xm-12">
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null)
      return (
        <div className="ml-5 col-12 col-md-5 m-1 col-sm-12 col-xm-12">
          <h4>Comments</h4>

          {dish.comments?.map((comment, pos) => (
            <li key={pos} className="list-unstyled">
              <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}</p>
                <p>
                  --
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </div>
            </li>
          ))}
        </div>
      );
    else return <div></div>;
  }

  render() {
    const dish = this.props.dish;

    console.log(dish);

    if (dish == null) {
      return <div></div>;
    }

    const dishItem = this.renderDish(dish);
    const dishComment = this.renderComments(dish);

    return (
      <div className="row">
        {dishItem}
        {dishComment}
      </div>
    );
  }
}
export default DishDetail;
