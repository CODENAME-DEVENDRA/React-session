import React, { useState } from "react";

const FormHandling = () => {
  const [form, setForm] = useState({
    username: "",
    subscribe: false,
    plan: "free",
    course: "React",
  });
  const radioTypes = ["free", "pro"];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Data ${JSON.stringify(form, null, 2)}`);
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: updatedValue }));
  };

  return (
    <div>
      <h2>Controlled Form (Many Input types)</h2>

      <form style={{ display: "grid", gap: 10 }} onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            value={form.username}
            onChange={handleChange}
            name="username"
            id="username"
          />
        </label>

        <label htmlFor="subscribe">
          <input
            type="checkbox"
            checked={form.subscribe}
            onChange={handleChange}
            name="subscribe"
            id="subscribe"
          />
          Subscribe to news letter
        </label>

        <fieldset>
          <legend>Plan</legend>
          {radioTypes.map((r) => (
            <label htmlFor="plan">
              <input
                type="radio"
                value={r}
                checked={form.plan === r}
                onChange={handleChange}
                name="plan"
                id="plan"
              />
              {r}
            </label>
          ))}
        </fieldset>

        <label htmlFor="course">
          <select
            name="course"
            id="course"
            value={form.course}
            onChange={handleChange}
          >
            <option>React</option>
            <option>Angular</option>
            <option>Nodejs</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>

      <p>{JSON.stringify(form, null, 2)}</p>
    </div>
  );
};

export default FormHandling;
