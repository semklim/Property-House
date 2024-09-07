import chel_v_ochckah from '@/assets/images/Chel-v-ochckah.png';
import paper from '@/assets/images/paper.png';
import ruki_v_verh from '@/assets/images/ruki-v-verh.png';
import { cn } from '@/helpers/classNames';

import cl from './CardsBox.module.scss';

interface CardsBoxProps {
  className?: string;
}

export default function CardsBox(props: CardsBoxProps) {
  const { className = '', ...otherProps } = props;

  return (
    <div className={cn(cl.cardsBox, {}, [className])} {...otherProps}>
      <div className={cl.card1}>
        <img className={cl.bg_img} src={paper} alt="" />
        <img src={ruki_v_verh} alt="Руки в гору" />
      </div>
      <div className={cn(cl.cardInfo, {}, [cl.card2])}>
        <h4>
          <span className={cl.accent}>1250+</span>
          <span className={cl.cardText}>виконаних проектів</span>
        </h4>
      </div>
      <div className={cn(cl.cardInfo, {}, [cl.card3])}>
        <h4>
          <span className={cl.accent}>10mln+</span>
          <span className={cl.cardText}>рядків коду</span>
        </h4>
      </div>
      <div className={cn(cl.cardInfo, {}, [cl.card4])}>
        <h4>
          <span className={cl.accent}>99%</span>
          <span className={cl.cardText}>задоволених клієнтів</span>
        </h4>
      </div>
      <div className={cn(cl.cardInfo, {}, [cl.card5])}>
        <h4>
          <span className={cl.accent}>85% </span>
          <span className={cl.cardText}>зростання бізнесу</span>
        </h4>
      </div>
      <div className={cl.card6}>
        <img src={chel_v_ochckah} alt="Чел в окулярах" />
      </div>
    </div>
  );
}
