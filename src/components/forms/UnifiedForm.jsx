import { useForm } from "react-hook-form";
import { Field } from "./UnifiedField.jsx";
import { getFormVariantConfig } from "./UnifiedForm.funcs.js";
import { getFormFields, fieldConfigs } from "./UnifiedField.funcs.js";
import clsx from "clsx";

export const UnifiedForm = ({ variant, onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const fields = getFormFields(variant);
  const formVariantConfig = getFormVariantConfig(variant);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="gap-1 flex items-center flex-col border border-slate-300 dark:border-slate-600 p-6 rounded-xl shadow-sm w-full bg-base text-base transition-colors"
    >
      <h2 className="text-2xl font-semibold capitalize text-primary text-center">
        {formVariantConfig.headerText}
      </h2>

      {fields.map((fieldName, index) => (
        <Field
          key={fieldName + variant + index}
          name={fieldName}
          config={fieldConfigs[fieldName]}
          register={register}
          errors={errors}
          passwordForConfirm={password}
          formPrefix={variant}
        />
      ))}

      <button
        type="submit"
        className={clsx(
          "w-full sm:w-1/2 px-4 py-2 rounded-md text-white font-medium transition-colors",
          formVariantConfig.buttonColor
        )}
      >
        {formVariantConfig.buttonText}
      </button>
    </form>
  );
};
