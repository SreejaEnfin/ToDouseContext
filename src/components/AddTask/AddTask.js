//

import React, { useContext, useEffect, useState } from "react";
import "./AddTask.css";
import { DataContext } from "../../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddTask = () => {
  const { todoText, setTodoText, pending, setPending } =
    useContext(DataContext);
  const [showError, setShowError] = useState(false);

  const changeTodoText = (e) => {
    const uniqueId = uuidv4();
    setTodoText({
      ...todoText,
      text: e.target.value,
      isPending: true,
      id: uniqueId,
    });
  };

  const addTask = () => {
    if (todoText.text) {
      setPending((prevPending) => [...prevPending, todoText]);
      setTodoText({ text: "" });
      console.log(showError);
      setShowError(true);
    } else {
      console.log("no text");
      setShowError(false);
    }
  };

  const validationSchema = Yup.object().shape({
    text: Yup.string()
      .required("Task text is required")
      .max(255, "Task text is too long"),
  });

  return (
    <div className="todoText">
      <Formik
        initialValues={{ text: todoText.text }}
        validationSchema={validationSchema}
        onSubmit={addTask}
      >
        {() => (
          <Form onSubmit={addTask}>
            <Field
              type="text"
              value={todoText.text}
              name="text"
              placeholder="Enter Task"
              onChange={changeTodoText}
            />
            <button type="submit">Add Task</button>
            {showError ? (
              ""
            ) : (
              <ErrorMessage
                name="text"
                component="div"
                className="error-message"
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTask;
