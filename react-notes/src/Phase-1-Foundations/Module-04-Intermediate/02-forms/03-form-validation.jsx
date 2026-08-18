import React, { useState } from "react";

const FormValidation = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values) => {
    const obj = {};
    // console.log(
    //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email),
    // );

    //email
    if (!values.email.trim()) {
      obj.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
    ) {
      obj.email = "Enter a valid email address";
    }

    //password
    if (!values.password) {
      obj.password = "Password is required";
    } else if (values.password.length < 6) {
      obj.password = "Password must be atleast 6 characters";
    }

    console.log("obj", obj);
    return obj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valObj = validate(form);
    setError(valObj);

    console.log("valObj", Object.keys(valObj));

    if (Object.keys(valObj).length === 0) {
      setSubmitted(true);
      setForm({ email: "", password: "" });
    }

    submitted && console.log("form", form); //why this is happening //because we used here setter function not submitted
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Form Validation</h2>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
        onSubmit={handleSubmit}
        noValidate
      >
        <div>
          <input
            type="email"
            value={form.email}
            onChange={handleChange}
            name="email"
            placeholder="Enter Email"
          />
          {error.email && (
            <div style={{ color: "#ee0f0f", fontSize: 12 }}>{error.email}</div>
          )}
        </div>

        <div>
          <input
            type="password"
            value={form.password}
            onChange={handleChange}
            name="password"
            placeholder="******"
          />
          {error.password && (
            <div style={{ color: "#ee0f0f", fontSize: 12 }}>
              {error.password}
            </div>
          )}
        </div>

        <button type="submit">Submit</button>

        {submitted && <p>Logged in successfully</p>}
      </form>
    </div>
  );
};

export default FormValidation;
