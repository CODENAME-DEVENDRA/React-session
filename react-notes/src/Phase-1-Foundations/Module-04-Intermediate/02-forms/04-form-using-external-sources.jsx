import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// React hook form
// npm i react-hook-form
// npm i @hookform/resolvers
// npm i zod

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(6, "Password must be atleast 6 characters"),
  // .regex(/[A-Z]/, {
  //   message: "Password must contain at least one uppercase letter",
  // })
  // .regex(/[a-z]/, {
  //   message: "Password must contain at least one lowercase letter",
  // })
  // .regex(/[0-9]/, { message: "Password must contain at least one number" }),
});

function HookFormZod() {
  //register : connects an input to the form by name
  //handleSubmit : validates and then call your function only if valid
  //formState.errors : error message
  //formState.isSubmitSuccessful : clean submit -> true
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(loginSchema), //runs zod on submit
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data) => {
    console.log("data", data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid", gap: 10 }}
      >
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />
          {errors.email && (
            <div style={{ color: "#ed0909" }}>{errors.email.message}</div>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          {errors.password && (
            <div style={{ color: "#ed0909" }}>{errors.password.message}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      {isSubmitSuccessful && <p>Logged in successful</p>}
    </>
  );
}

export default HookFormZod;
