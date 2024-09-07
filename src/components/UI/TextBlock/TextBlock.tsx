import icon from '@/assets/icons/chevron-red.png';
import { cn } from '@/helpers/classNames';

import cl from './TextBlock.module.scss';

interface TextBlockProps {
  className?: string;
  classNameSlogan?: string;
  name: string;
  slogan: string;
  description: string;
}

export default function TextBlock(props: TextBlockProps) {
  const {
    className = '',
    classNameSlogan = '',
    name,
    description,
    slogan,
    ...otherProps
  } = props;

  return (
    <article className={cn(cl.textBlock, {}, [className])} {...otherProps}>
      <div className={cl.first}>
        <img src={icon} alt="" />
        <h2>{name}</h2>
      </div>
      <h3 className={cn(cl.second, {}, [classNameSlogan])}>{slogan}</h3>
      <p className={cl.last}>{description}</p>
    </article>
  );
}
