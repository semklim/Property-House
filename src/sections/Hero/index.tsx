import bgImage from '@/assets/images/hero.png';
import bgMobileImage from '@/assets/images/hero_mobile.png';
import Header from '@/components/Header/Header';
import { cn } from '@/helpers/classNames';

import cl from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export default function Hero(props: HeroProps) {
  const { className = '', ...otherProps } = props;

  return (
    <section className={cn(className, {}, [cl.main])} {...otherProps}>
      <div className={cn(cl.container)}>
        <Header className="absolute" />
        <picture>
          <source media="(max-width: 768px)" srcSet={bgMobileImage} />
          <img srcSet={bgImage} alt="Commit" />
        </picture>
        <div className={cl.textBox}>
          <h1>Сайти, що втілюють ваші ідеї</h1>
          <p>
            Ми спеціалізуємося на розробці, що поєднує передові технології та
            експертизи
          </p>
        </div>
      </div>
    </section>
  );
}
