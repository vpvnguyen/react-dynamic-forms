import React from "react";
import { useForm } from "react-hook-form";
import fields from "./fields";

const program = {
  rules: {
    forms: {
      awesomeForm: {
        ...fields,
      },
    },
  },
};

function App() {
  const programFields = Object.keys(program?.rules?.forms?.awesomeForm);

  const {
    register,
    unregister,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    setValue,
    setFocus,
    getValues,
    trigger,
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  return (
    <div
      style={{
        border: "1px solid grey",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid blue",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <form
          style={{ border: "1px solid red" }}
          onSubmit={handleSubmit((data) => {
            console.log("onSubmit data", data);
          })}
        >
          <div style={{ display: "flex", width: "100%" }}>
            {programFields.includes("firstName") && (
              <div>
                <input
                  type="text"
                  placeholder="firstName"
                  {...register("firstName", {
                    required: "required",
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "min 3",
                    },
                  })}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>
            )}

            {programFields.includes("lastName") && (
              <div>
                <input
                  type="text"
                  placeholder="lastName"
                  {...register("lastName", { required: "required" })}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
            )}
          </div>

          <div style={{ display: "flex" }}>
            {programFields.includes("address") && (
              <div>
                <input
                  type="text"
                  placeholder="address"
                  {...register("address", { required: "required" })}
                />
                {errors.address && <p>{errors.address.message}</p>}
              </div>
            )}

            {programFields.includes("unit") && (
              <div>
                <input
                  type="text"
                  placeholder="unit"
                  {...register("unit", { required: "required" })}
                />
                {errors.unit && <p>{errors.unit.message}</p>}
              </div>
            )}
          </div>

          <div style={{ display: "flex" }}>
            {programFields.includes("city") && (
              <div>
                <input
                  type="text"
                  placeholder="city"
                  {...register("city", { required: "required" })}
                />
                {errors.city && <p>{errors.city.message}</p>}
              </div>
            )}

            {programFields.includes("state") && (
              <div>
                <input
                  type="text"
                  placeholder="state"
                  {...register("state", { required: "required" })}
                />
                {errors.state && <p>{errors.state.message}</p>}
              </div>
            )}

            {programFields.includes("zipcode") && (
              <div>
                <input
                  type="number"
                  placeholder="zipcode"
                  {...register("zipcode", { required: "required" })}
                />
                {errors.zipcode && <p>{errors.zipcode.message}</p>}
              </div>
            )}
          </div>

          {programFields.includes("phone") && (
            <input type="tel" placeholder="phone" {...register("phone")} />
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
