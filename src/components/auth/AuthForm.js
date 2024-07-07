import React from "react";
import { Form } from "./auth.styled";

const AuthForm = (data) => {
  console.log(data);
  return (
    <Form onSubmit={(e)=>e.preventDefault()}>
      <label>
        Name:
        <input placeholder="Name"/>
      </label>
      <label>
        Email:
        <input placeholder="Email"/>
      </label>
      <label>
        Password:
        <input placeholder="Password"/>
      </label>
      <button type="submit">qwe</button>
    </Form>
  );
};

export default AuthForm;
