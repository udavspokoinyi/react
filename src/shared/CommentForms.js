import React from "react";
import { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Button, Modal, ModalBody, ModalHeader, Label } from "reactstrap";

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
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
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
                <Label htmlFor="yourname">Your Name</Label>
                <Control.text
                  model=".yourname"
                  id="yourname"
                  className="form-control"
                  name="yourname"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".yourname"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 chars",
                    maxLength: "Must be 15 chars or less",
                  }}
                />
              </div>
              <div className="form-grop">
                <Label htmlFor="commentUs">Comment</Label>
                <Control.textarea
                  rows="8"
                  model=".commentUs"
                  className="form-control"
                  id="commentUs"
                  name="commentUs"
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

export default CommentForm;
