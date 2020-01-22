import React, { ReactNode } from 'react';

import Modal from '../inner/Modal/Modal';
import HeaderModal from '../inner/HeaderModal/HeaderModal';
import BodyModal from '../inner/BodyModal/BodyModal';
import CustomFooterModal from '../inner/CustomFooterModal/CustomFooterModal';
import ConfirmFooterModal, {
   ConfirmButton,
   CancelButton
} from '../inner/ConfirmFooterModal/ConfirmFooterModal';
import useClose from '../../../utils/hooks/useClose';

export interface ModalDialogProps {
   /** Заголовок */
   header: string;
   /** Стиль заголовка */
   headerClass?: string;
   /** Контент */
   children: ReactNode;
   /** Стиль основной части */
   bodyClass?: string;
   /** Пользовательский нижний колонтитул.
    * По умолчанию отображается панель с кнопками для подтверждения и отмены */
   footer?: ReactNode;
   /** Стиль нижнего колонтитула */
   footerClass?: string;
   /** Ширина */
   width?: string;
   /** Кнопка подтверждения */
   confirmBtn?: ConfirmButton;
   /** Кнопка отмены */
   cancelBtn?: CancelButton;
   /** Дополнительное действие при нажатии на кнопку закрытия */
   onClose: () => void;
}

const closeHandler = ({ close, onClose }) => {
   close();
   onClose && onClose();
};

export const ModalDialog = ({
   headerClass,
   header,
   footerClass,
   footer,
   bodyClass,
   confirmBtn,
   cancelBtn = {},
   width,
   children,
   onClose
}: ModalDialogProps) => {
   const [isVisible, close] = useClose();
   return (
      <Modal isVisible={isVisible} width={width}>
         <HeaderModal
            className={headerClass}
            title={header}
            onClose={() => closeHandler({ close, onClose })}
         />
         <BodyModal className={bodyClass}>{children}</BodyModal>
         {footer ? (
            <CustomFooterModal className={footerClass}>{footer}</CustomFooterModal>
         ) : (
            <ConfirmFooterModal
               confirmBtn={confirmBtn}
               cancelBtn={{
                  action: () => closeHandler({ close, onClose }),
                  ...cancelBtn
               }}
               className={footerClass}
            />
         )}
      </Modal>
   );
};

export default ModalDialog;
