// //

// import React, { useContext, useEffect, useState } from "react";
// import "./AddTask.css";
// import { DataContext } from "../../context/DataContext";
// import { v4 as uuidv4 } from "uuid";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

// const AddTask = () => {
//   const { todoText, setTodoText, setPending } = useContext(DataContext);

//   const changeTodoText = (e) => {
//     const uniqueId = uuidv4();
//     setTodoText({
//       ...todoText,
//       text: e.target.value,
//       isPending: true,
//       id: uniqueId,
//     });
//   };

//   const addTask = () => {
//     if (todoText.text) {
//       setPending((prevPending) => [...prevPending, todoText]);
//     } else {
//       console.log("no text");
//     }
//     setTodoText("");
//   };

//   const validationSchema = Yup.object().shape({
//     text: Yup.string()
//       .required("Required")
//       .min(2, "Too Short!")
//       .max(50, "Too Long!"),
//   });

//   return (
//     <div className="todoText">
//       <Formik
//         initialValues={{
//           text: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => console.log(values)}
//       >
//         {({ errors, touched }) => (
//           <Form onSubmit={addTask}>
//             <Field
//               className="todo"
//               type="text"
//               value={todoText.text || ""}
//               name="text"
//               placeholder="Enter Task"
//               onChange={changeTodoText}
//             />
//             <button type="submit">Add Task</button>
//             <br />
//             {errors.text && touched.text ? <div>{errors.text}</div> : null}
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AddTask;

import React, { useContext } from "react";
import "./AddTask.css";
import { DataContext } from "../../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddTask = () => {
  const { setTodoText, setPending } = useContext(DataContext);

  const addTask = (values) => {
    const uniqueId = uuidv4();
    const newTask = {
      text: values.text,
      isPending: true,
      id: uniqueId,
    };

    if (values.text) {
      setPending((prevPending) => [...prevPending, newTask]);
    } else {
      console.log("no text");
    }
    setTodoText("");
  };

  const validationSchema = Yup.object().shape({
    text: Yup.string()
      .required("Todo Text Required")
      .min(2, "Todo Text Too Short!")
      .max(50, "Todo Text Too Long!"),
  });

  return (
    <div className="todoText">
      <Formik
        initialValues={{
          text: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => addTask(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              className="todo"
              type="text"
              name="text"
              placeholder="Enter Task"
            />
            <button type="submit">Add Task</button>
            <br />
            <ErrorMessage
              name="text"
              className="error-message"
              component="div"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTask;
