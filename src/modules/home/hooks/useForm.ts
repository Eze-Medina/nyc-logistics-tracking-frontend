import { useState } from 'react';

export const useForm = <T extends object>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    const [parent, child] = name.split('.');

    if (child) {
      setFormState(prev => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: value,
        },
      }));

      return;
    }

    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;

    const [parent, child] = name.split('.');

    if (child) {
      setFormState(prev => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: checked,
        },
      }));

      return;
    }

    setFormState(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    onInputChange,
    onCheckboxChange,
    onResetForm,
  };
};