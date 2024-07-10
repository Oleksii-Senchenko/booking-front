import React from "react";
import {
  Button,
  Container,
  FormWrapper,
  Input,
  Title,
} from "./Register.styled";

const RegisterForm = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Sign In</Title>
        <form>
          <Input type="text" placeholder="Имя" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Пароль" />
          <Button type="submit">Sign In</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default RegisterForm;
