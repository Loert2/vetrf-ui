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
   /** Контент тела */
   children: ReactNode;
   /** Стиль тела */
   bodyClass?: string;
   /** Контент нижней части */
   footer?: ReactNode;
   /** Стиль нижней части */
   footerClass?: string;
   /** Ширина */
   width?: string;
   /** Кнопка подтверждения */
   confirmBtn?: ConfirmButton;
   /** Кнопка отмены */
   cancelBtn?: CancelButton;
}

export const ModalDialog = ({
   headerClass,
   header,
   footerClass,
   footer,
   bodyClass,
   confirmBtn,
   cancelBtn = {},
   width,
   children
}: ModalDialogProps) => {
   const [show, close] = useClose();
   return (
      <Modal isVisible={show} width={width}>
         <HeaderModal className={headerClass} title={header} onClose={close} />
         <BodyModal className={bodyClass}>{children}</BodyModal>
         {footer ? (
            <CustomFooterModal className={footerClass}>{footer}</CustomFooterModal>
         ) : (
            <ConfirmFooterModal
               confirmBtn={confirmBtn}
               cancelBtn={{
                  action: close,
                  href: cancelBtn.href,
                  size: cancelBtn.size,
                  className: cancelBtn.className,
                  text: cancelBtn.text,
                  icon: cancelBtn.icon
               }}
               className={footerClass}
            />
         )}
      </Modal>
   );
};

export default ModalDialog;
