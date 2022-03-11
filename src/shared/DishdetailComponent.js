import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card className="col-12 col-md-5 m-1 col-sm-12 col-xm-12">
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else return <div></div>;
}

function RenderComments({ dish }) {
  if (dish != null) {
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
  } else return <div></div>;
}

const DishDetail = (props) => {
  if (props.dish == null) {
    return <div></div>;
  }
  return (
    <div className="row">
      <RenderDish dish={props.dish} />
      <RenderComments dish={props.dish} />
    </div>
  );
};

export default DishDetail;
