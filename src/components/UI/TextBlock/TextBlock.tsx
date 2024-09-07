import icon from '@/assets/icons/chevron-red.png';
import { cn } from '@/helpers/classNames';

import cl from './TextBlock.module.scss';

interface TextBlockProps {
  className?: string;
  name: string;
  slogan: string;
  description: string;
  longSlogan?: boolean;
}

export default function TextBlock(props: TextBlockProps) {
  const {
    className = '',
    name,
    description,
    slogan,
    longSlogan = false,
    ...otherProps
  } = props;

  return (
    <article className={cn(cl.textBlock, {}, [className])} {...otherProps}>
      <div className={cl.first}>
        <img src={icon} alt="" />
        <h2>{name}</h2>
      </div>
      <h3 className={cn(cl.second, { 'flex-[1_0_565px]': longSlogan })}>
        {slogan}
      </h3>
      <p className={cl.last}>{description}</p>
    </article>
  );
}
