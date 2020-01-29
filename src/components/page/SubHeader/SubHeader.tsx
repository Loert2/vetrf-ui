import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Icon } from '../../other/Icon/Icon';
import { Color as ColorIcon } from '../../../utils/type/Color';
import { Size as SizeIcon } from '../../../utils/type/Size';

export type LevelType = 2 | 3 | 4 | 5 | 6;

export interface SubHeaderProps {
   /** Заголовок */
   header: string;
   /** Стили */
   className?: string;
   /** Уровень заголовка */
   level?: LevelType;
   /** Иконка. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
           Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon: string;
   /** Цвет иконки */
   colorIcon?: ColorIcon;
   /** Размер иконки */
   sizeIcon?: SizeIcon;
   /** Подпись (добавляется снизу заголовка) */
   description?: string;
   /** Нижняя гланица */
   underline?: boolean;
   /** Панель */
   toolbar?: ReactNode;
}

function levelHeader({ level, className, icon, colorIcon, sizeIcon, header }: SubHeaderProps) {
   const childrenComponent = (
      <React.Fragment>
         <Icon icon={icon} color={colorIcon} size={sizeIcon} />
         &nbsp;{header}
      </React.Fragment>
   );
   return React.createElement(`h${level}`, { className }, childrenComponent);
}

export const SubHeader = ({
   className = 'lighter',
   icon,
   colorIcon,
   sizeIcon,
   header,
   level = 4,
   description,
   underline,
   toolbar
}: SubHeaderProps) => (
   <div>
      <div className={classNames('widget-header-my', underline && 'header blue')}>
         {levelHeader({ level, className, icon, colorIcon, sizeIcon, header })}
         &nbsp;
         {toolbar}
      </div>
      {description && <p className="sub-header__description">{description}</p>}
   </div>
);

export default SubHeader;
