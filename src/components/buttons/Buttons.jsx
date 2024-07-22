import React from 'react';

const buttonStyles = {
  primary: 'bg-blackpr text-primary',
  secondary: 'bg-transparent text-sandhard border-2 border-sandhard transition-colors hover:bg-sandpr',
  custom: 'bg-transparent text-sandhard transition-colors hover:bg-sandpr',
  // navbutton: '',
};

const sizeStyles = {
  small: 'h-[32px]',
  large: 'h-[36px]',
  extralarge: 'h-[44px]',
};

const Buttons = ({ text = 'Button Primary', size = 'small', type = 'primary', onClick }) => {
  const buttonClass = `${buttonStyles[type]} ${sizeStyles[size]} w-fit rounded-[5px] px-[16px] py-[12px] flex items-center text-[12px] font-bold`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Buttons;
