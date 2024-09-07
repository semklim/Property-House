import { cn } from '@/helpers/classNames';

import cl from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  className?: string;
}

export default function BurgerMenu(props: BurgerMenuProps) {
  const { className = '', ...otherProps } = props;

  return (
    <ul className={cn(cl.burger, {}, [className])} {...otherProps}>
      <li className={cl.active}>Про нас</li>
      <li>Кейси</li>
      <li>Контакти</li>
    </ul>
  );
}
