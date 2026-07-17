import { useEffect, useState } from 'react';

// Agregamos <T extends object> para capturar la estructura exacta que le pases
export const useForm = <T extends object>(initialForm: T) => {

  const [formState, setFormState] = useState<T>(initialForm);

  // Mantenemos sincronizado el estado si el initialForm cambia externamente
  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  // Tipamos el target correctamente admitiendo inputs, selects y textareas
  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  // Retornamos el estado esparcido conservando los tipos exactos de T
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
