import CardsBox from '@/components/UI/CardsBox/CardsBox';
import TextBlock from '@/components/UI/TextBlock/TextBlock';
import { cn } from '@/helpers/classNames';

import cl from './AboutUs.module.scss';

interface AboutUsProps {
  className?: string;
}

export default function AboutUs(props: AboutUsProps) {
  const { className = '', ...otherProps } = props;

  return (
    <section className={cn(cl.aboutUs, {}, [className])} {...otherProps}>
      <TextBlock
        name="Про нас"
        slogan="Індивідуальний підхід та гнучкість для створення цифрових рішень"
        description="Наша команда працює над тим, щоб кожне рішення було максимально
        адаптивним, інтуїтивним і орієнтованим на вашого кінцевого користувача."
        longSlogan
      />
      <CardsBox className="pb-8" />
    </section>
  );
}
