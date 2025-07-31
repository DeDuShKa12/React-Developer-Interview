import clsx from "clsx";

export const Field = ({
  name,
  config,
  register,
  errors,
  passwordForConfirm,
  formPrefix,
}) => {
  const id = `${formPrefix}-${name}`;

  const validation =
    name === "confirmPassword" && typeof config.validation === "function"
      ? config.validation(passwordForConfirm)
      : config.validation;

  const errorMessage = errors[name]?.message;

  return (
    <div className="flex flex-col w-full mt-2">
      <label htmlFor={id} className="sr-only">
        {config.label}
      </label>
      <input
        id={id}
        type={config.type}
        placeholder={config.placeholder}
        {...register(name, validation)}
        aria-invalid={!!errorMessage}
        aria-describedby={errorMessage ? `${id}-error` : undefined}
        className={clsx(
          "w-full p-2 m-0 rounded border bg-bginput text-base placeholder:text-sm",
          errorMessage && "border-danger"
        )}
      />
      <p
        id={`${id}-error`}
        className={clsx(
          "text-danger text-xs m-0 h-4 py-1 transition-opacity duration-200",
          errorMessage ? "opacity-100" : "opacity-0"
        )}
      >
        {errorMessage || ""}
      </p>
    </div>
  );
};
