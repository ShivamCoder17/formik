import { Button, Form } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";

const FormHooks = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const submitHandler = (data) => {
    console.log(
      "Form submitted ",
      data,
      "/n profile Image",
      data.profile_image[0]
    );
  };
  return (
    <div>
      <Form className="m-5" onSubmit={handleSubmit(submitHandler)}>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            // placeholder="Firstname"
            name="profile_image"
            accept="image/*"
            {...register("profile_image")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            placeholder="Enter firstname"
            {...register("firstname", {
              required: {
                value: true,
                message: "* Firstname is required",
              },
            })}
          />
          {errors.firstname?.message}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Enter lastname"
            {...register("lastname", {
              required: {
                value: true,
                message: "* Lastname is required",
              },
            })}
          />
          {errors.lastname?.message}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            {...register("email", {
              required: {
                value: true,
                message: "* Email is required",
              },
              pattern: {
                value: /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/,
                message: "* Wrong Pattern",
              },
            })}
          />
          {errors.email?.message}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$/,
                message: "* Password Pattern does not match",
              },
            })}
          />
          {errors.password?.message}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormHooks;
