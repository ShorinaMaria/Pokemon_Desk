import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface IButtonProps {
  color?: 'green' | 'yellow';
  width?: 'auto' | 'fullwidth';
  size?: 'auto' | 'small';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({ children, color = 'green', width = 'auto', size = 'auto', onClick }) => {
  const buttonClasses: Array<string> = [s.root];
  if (color === 'yellow') {
    buttonClasses.push(s.buttonColorYellow);
  }
  if (width === 'fullwidth') {
    buttonClasses.push(s.buttonWidthFullwidth);
  }
  if (size === 'small') {
    buttonClasses.push(s.buttonSizeSmall);
  }

  return (
    <button type="button" className={cn(buttonClasses)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
