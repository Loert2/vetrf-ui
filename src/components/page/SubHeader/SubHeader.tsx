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
   const IconComponent = () => <Icon icon={icon} color={colorIcon} size={sizeIcon} />;
   switch (level) {
      case 2:
         return (
            <h2 className={className}>
               <IconComponent />
               &nbsp;{header}
            </h2>
         );
      case 3:
         return (
            <h3 className={className}>
               <IconComponent />
               &nbsp;{header}
            </h3>
         );
      case 4:
         return (
            <h4 className={className}>
               <IconComponent />
               &nbsp;{header}
            </h4>
         );
      case 5:
         return (
            <h5 className={className}>
               <IconComponent />
               &nbsp;{header}
            </h5>
         );
      case 6:
         return (
            <h6 className={className}>
               <IconComponent />
               &nbsp;{header}
            </h6>
         );
      default:
         return null;
   }
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
      {description && <p>{description}</p>}
   </div>
);

export default SubHeader;
