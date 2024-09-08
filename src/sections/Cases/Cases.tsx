import CaseCardBox from '@/components/UI/CaseCardBox/CaseCardBox';
import TextBlock from '@/components/UI/TextBlock/TextBlock';
import { cn } from '@/helpers/classNames';

import cl from './Cases.module.scss';

interface CasesProps {
  className?: string;
}

export default function Cases(props: CasesProps) {
  const { className = '', ...otherProps } = props;

  return (
    <section className={cn(cl.cases, {}, [className])} {...otherProps}>
      <TextBlock
        classNameSlogan="flex-[1_0_365px]"
        name="кейси"
        slogan="Реалізовані ідеї наших клієнтів"
        description="Мрія створювати індивідуальні рішення, надаючи можливість реалізувати потенціал у цифровому світі, втілилась в наших кейсах. Ми віримо, що кожен бізнес унікальний, і допомагаємо розкрити це через вебсайти та онлайн-платформи."
      />
      <div className={cl.slider}>
        <div className={cl.slide}>
          <CaseCardBox />
        </div>
        <div className={cl.slide}>
          <CaseCardBox />
        </div>
        <div className={cl.slide}>
          <CaseCardBox />
        </div>
      </div>
    </section>
  );
}
