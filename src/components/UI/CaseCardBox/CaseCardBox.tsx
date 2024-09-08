import case1 from '@/assets/images/Case1.png';
import { cn } from '@/helpers/classNames';

import cl from './CaseCardBox.module.scss';

interface CaseCardBoxProps {
  className?: string;
}

export default function CaseCardBox(props: CaseCardBoxProps) {
  const { className = '', ...otherProps } = props;

  return (
    <article className={cn(cl.caseCardBox, {}, [className])} {...otherProps}>
      <img src={case1} alt="" />
      <div className={cl.descWrapper}>
        <h2 className={cl.title}>250+ Корпоративних сайтів</h2>
        <ul className={cl.desc}>
          <li>стартапи</li>
          <li>фінансові та юридичні послуги</li>
          <li>медичні послуги</li>
          <li>бізнес-конференції</li>
          <li>туристичні послуги</li>
          <li>сільськогосподарська продукція</li>
        </ul>
      </div>
    </article>
  );
}
