import { useState } from 'react';

type ErrorProps = {
  field: string;
  message: string;
};

const useErrors = () => {
  const [errors, setErrors] = useState<ErrorProps[]>([]);

  const setError = ({ field, message }: ErrorProps) => {
    const errorAlreadyExists = errors.find(
      (error: { field: string }) => error?.field === field
    );
    if (errorAlreadyExists) {
      return;
    }
    setErrors((prevState) => [...prevState, { field, message }]);
  };

  const removeError = (fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter(({ field }) => field !== fieldName)
    );
  };

  const getErrorMessageByFieldName = (fieldName: string) =>
    errors.find(({ field }) => field === fieldName)?.message;

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
};

export default useErrors;