import React, { useState } from 'react';

const inputStyles = {
  base: 'border-2 p-2 w-full mt-4 rounded-[5px] bg-transparent placeholder:text-sandhard focus:outline-none focus:text-sandhard',
  valid: 'border-sandhard',
  invalid: 'border-red-500',
};

const Input = ({ type = 'text', placeholder = '', ...props }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (type === 'email') {
      if (inputValue === '') {
        setIsValid(true);
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(inputValue));
      }
    }
  };

  const inputClassName = `${inputStyles.base} ${isValid ? inputStyles.valid : inputStyles.invalid}`;

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      className={inputClassName}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
