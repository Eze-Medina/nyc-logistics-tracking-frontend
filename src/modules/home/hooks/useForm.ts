import { useEffect, useState } from "react";

export const useForm = <T extends object>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const onInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = event.target;

    const input = event.target as HTMLInputElement;

    setFormState((prev) => ({
      ...prev,
      [name]:
        type === "radio" || type === "checkbox"
          ? input.checked
          : value,
    }));
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};