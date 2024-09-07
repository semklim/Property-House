import { cn } from '@/helpers/classNames';

import BurgerMenu from '../UI/BurgerMenu/BurgerMenu';
import Button from '../UI/Button/Button';
import cl from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export default function Header(props: HeaderProps) {
  const { className = '', ...otherProps } = props;

  return (
    <header className={cn(cl.header, {}, [className])} {...otherProps}>
      <nav>
        <BurgerMenu />
        <h2 className="flex justify-center items-center">
          <span className={cn(cl.logo, {}, [])}>COMMIT</span>
        </h2>
        <Button label="Замовити" className="uppercase" />
      </nav>
    </header>
  );
}
