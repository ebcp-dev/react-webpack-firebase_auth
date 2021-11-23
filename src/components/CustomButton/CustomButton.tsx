import React from 'react';

import './CustomButton.scss';

const CustomButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, ...rest } = props;

  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
