import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("form has labels", () => {
  const { getByLabelText } = render(<ContactForm/>);

  getByLabelText(/first name*/i);
  getByLabelText(/last name*/i);
  getByLabelText(/email*/i);
  getByLabelText(/message*/i);
});

test('Changing inputs', () => {
  const {getByLabelText, getByTestId} = render(<ContactForm/>)


  const firstNameInput = getByLabelText(/First Name*/)
  const lastNameInput = getByLabelText(/Last Name*/)
  const emailInput =  getByLabelText(/email/i)

  fireEvent.change(firstNameInput, {target: { value: "First Name" },});
  
  fireEvent.change(lastNameInput, {target: { value: "Last Name" },});

  fireEvent.change(emailInput, {target: { value: "test@email.com" },});

  expect(firstNameInput.value).toBe("First Name");
  expect(lastNameInput.value).toBe("Last Name");
  expect(emailInput.value).toBe("test@email.com");
});

test("Form will Submit", () => {
  async () => {const {getByLabelText, getByTestId} = render(<ContactForm />)
  const firstNameInput = getByLabelText(/First Name*/);
  const lastNameInput = getByLabelText(/Last Name*/);
  const emailInput =  getByLabelText(/email/i);
  const submit = getByTestId("submit");

  fireEvent.change(firstNameInput, {target: { value: "First Name" },});
  fireEvent.change(lastNameInput, {target: { value: "Last Name" },});
  fireEvent.change(emailInput, {target: { value: "test@email.com" },});
  fireEvent.change(submitBtn);
  

  fireEvent.click(getByTestId("submit"));}
});
