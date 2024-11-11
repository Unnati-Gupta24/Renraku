import React from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password", "");
  const validatePasswordMatch = (value) => {
    return value === password || "Password and Confirm Password do not match";
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-white px-6 py-5 rounded-md space-y-3"
      >
        <h1 className="text-xl text-blue-600 font-bold">RenRaku</h1>
        <h1 className="text-2xl items-center font-semibold">
          Create a new <span className="text-emerald-600">Account</span>
        </h1>

        <div>
          {/* Email */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-600">This field is required</span>
          )}

          {/* Username */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Username"
              {...register("name", { required: true })}
            />
          </label>
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}

          {/* Password */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}

          {/* Confirm Password */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Confirm password"
              {...register("confirmpassword", {
                required: true,
                validate: validatePasswordMatch,
              })}
            />
          </label>
          {errors.confirmpassword && (
            <span className="text-red-600">
              {errors.confirmpassword.message}
            </span>
          )}

          <br />

          {/* Submit Button */}
          <div className="flex justify-between">
            <input
              type="submit"
              value="Signup"
              className="text-white bg-emerald-600 w-full rounded-lg py-2 font-semibold cursor-pointer"
            />
          </div>
        </div>
      </form>
      <p className="absolute bottom-0 left-0">
        Have any Account?{" "}
        <span className="text-blue-500 underline cursor-pointer ml-1">
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;
