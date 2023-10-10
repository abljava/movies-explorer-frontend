import { useState, useEffect } from 'react';

const useValidation = (value, validators) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEmailError, setIsEmailError] = useState(false);
  const [minLength, setMinLength] = useState(false);
  const [maxLength, setMaxLength] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validators) {
      switch (validation) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'isEmailError':
          const re =
            /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;
          re.test(String(value).toLowerCase())
            ? setIsEmailError(false)
            : setIsEmailError(true);
          break;
        case 'minLength':
          value.length < validators[validation]
            ? setMinLength(true)
            : setMinLength(false);
          break;
        case 'maxLength':
          value.length > validators[validation]
            ? setMaxLength(true)
            : setMaxLength(false);
          break;

        default:
      }
    }
  }, [value, validators]);

  useEffect(() => {
    if (isEmpty || isEmailError || minLength || maxLength) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
    }
  }, [isEmpty, isEmailError, minLength, maxLength]);

  return { isEmpty, minLength, maxLength, isEmailError, isInputValid };
};

const useInput = (initialValue, validators) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const isValid = useValidation(value, validators);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsTouched(true);
  };

  return { value, onChange, onBlur, isTouched, ...isValid };
};

export default useInput;
