/* eslint-disable react/button-has-type */
import type { FC } from 'react';

import { cn } from '@/helpers/classNames';

import cl from './Button.module.scss';

interface ButtonProps {
  className?: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  name?: string;
  id?: string;
  variant?: 'button-main' | 'button-contact-us';
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  className,
  label,
  onClick = () => {},
  disabled,
  name,
  type = 'button',
  variant = 'button-main',
  id,
}) => {
  return (
    <button
      type={type}
      name={name}
      id={id}
      disabled={disabled}
      onClick={(e) => {
        onClick(e);
      }}
      className={cn(cl[variant], {}, [className, 'mainBtnHover'])}
    >
      {label}
    </button>
  );
};

export default Button;
