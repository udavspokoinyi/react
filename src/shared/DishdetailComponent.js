import React from "react";
import { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "../components/LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card className="col-12 col-md-5 m-1 col-sm-12 col-xm-12">
        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else return <div></div>;
}
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-grop">
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  className="form-control"
                  id="rating"
                  name="rating"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </div>
              <div className="form-grop">
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  id="author"
                  className="form-control"
                  name="author"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 chars",
                    maxLength: "Must be 15 chars or less",
                  }}
                />
              </div>
              <div className="form-grop">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  rows="8"
                  model=".comment"
                  className="form-control"
                  id="comment"
                  name="comment"
                />
              </div>
              <Button type="submit" value="submit" className="bg-primary mt-3">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Button className="btn " outline onClick={this.toggleModal}>
          <span className="fa fa-pencil"> Submit Comment</span>
        </Button>
      </div>
    );
  }
}
function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    return (
      <div className="ml-5 col-12 col-md-5 m-1 col-sm-12 col-xm-12">
        <h4>Comments</h4>

        {comments?.map((comment, pos) => (
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
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  } else return <div></div>;
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish == null) {
    return <div></div>;
  }
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home"> Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active> {props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments
          comments={props.comments}
          addComment={props.addComment}
          dishId={props.dish.id}
        />
      </div>
    </div>
  );
};

export default DishDetail;
