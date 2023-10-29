import classes from "./CreateHabit.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../ui/Card";
import { Button, Form } from "react-bootstrap";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { uiActions } from "../../store/uiSlice";

const CreateHabit = (props) => {
  const dispatch = useDispatch();
  const nameRef = useRef('');
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      uiActions.addHabit({
        id: nameRef.current.value,
        name: nameRef.current.value,
      })
    );
    nameRef.current.value = '';
  }

  return (
    <>
      <Modal onClose={props.onClose}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>Create New</h2>
            <Button variant="outline-dark" onClick={props.onClose}>
              X
            </Button>
          </header>
          <div className={classes.content}>
            <Form onSubmit={submitHandler}>
              <Form.Label style={{ fontSize: 18 }}>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter New Habit"
                ref={nameRef}
                required
              />
              <Button className="mt-4" variant="outline-dark" type="submit">
                Add
              </Button>
            </Form>
          </div>
        </Card>
      </Modal>
    </>
  );
};

export default CreateHabit;
