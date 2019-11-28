import React, { useReducer } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

const reducer = (state, action) => {
  switch (action.name) {
    case "displayName":
      return { ...state, displayName: action.value };
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };
    case "confirmPassword":
      return { ...state, confirmPassword: action.value };
    case "reset":
      return { displayName: "", email: "", password: "", confirmPassword: "" };
    default:
      throw new Error();
  }
};

const SignUp = () => {
  const [
    { displayName, email, password, confirmPassword },
    dispatch
  ] = useReducer(reducer, {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) return;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      dispatch({ name: "reset" });
    } catch (error) {
      console.log("Error creating user", error);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    dispatch({ name, value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
