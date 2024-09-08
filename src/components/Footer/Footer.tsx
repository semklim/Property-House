import Facebook from '@/assets/icons/Facebook.svg?react';
import Instagram from '@/assets/icons/Instagram.svg?react';
import LinkedIn from '@/assets/icons/LinkedIn.svg?react';
import { cn } from '@/helpers/classNames';

import cl from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export default function Footer(props: FooterProps) {
  const { className = '', ...otherProps } = props;

  return (
    <footer className={cn(cl.footer, {}, [className])} {...otherProps}>
      <section className={cl.top}>
        <ul className={cl.company}>
          <li>
            <h3>Commit</h3>
          </li>
          <li>
            <p>Комітимо мрії в реальність</p>
          </li>
        </ul>
        <div className={cl.infoBlocks}>
          <ul className={cl.infoBlock}>
            <li className={cl.title}>
              <h4>Адреса</h4>
            </li>
            <li className={cl.desc}>
              <p>
                <span className="block">Київ, Україна</span>
                <span className="block">ТЦ Мармелад, вул. Борщагівська</span>
                <span className="block">154, офіс / блок 4-5</span>
              </p>
            </li>
          </ul>
          <ul className={cl.infoBlock}>
            <li className={cl.title}>
              <h4>Телефони</h4>
            </li>
            <li className={cl.desc}>
              <address>
                <a href="tel:+380980013939">+38 098-001-39-39</a>
                <a href="tel:+380980013939">+38 098-001-39-39</a>
                <a href="tel:+380980013939">+38 098-001-39-39</a>
              </address>
            </li>
          </ul>
          <ul className={cl.infoBlock}>
            <li className={cl.title}>
              <h4>Месенджери</h4>
            </li>
            <li className={cl.desc}>
              <address>
                <a href="mailto:ww@gmail.com">
                  <span>Email:</span>gmail
                </a>
                <a href="https://t.me/sales">
                  <span>Telegram:</span>sales
                </a>
                <a href="viber://chat?number=12345678">
                  <span>Viber:</span>sales
                </a>
              </address>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className={cl.copyright}>
        <p>Copyright © 2022 BRIX Templates | All Rights Reserved</p>
        <div className={cl.icons}>
          <LinkedIn />
          <Instagram />
          <Facebook />
        </div>
      </section>
    </footer>
  );
}
