import React from "react";
import { X } from "lucide-react";

const modalStyles = {
  base: "fixed inset-0 z-50 flex items-center justify-center",
  overlay: "fixed inset-0 bg-black opacity-50",
  container: "relative bg-sandpr rounded-lg shadow-lg w-[340px] p-6 border-2 border-sandhard",
  header: "flex justify-between items-center mb-[10px] text-sandhard",
  body: "text-left",
  footer: "flex justify-end gap-4 mt-4",
  closeIcon: "cursor-pointer transition-colors hover:text-blackpr",
};

const Modal = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
  footerButtons = null,
}) => {
  if (!isOpen) return null;

  return (
    <div className={modalStyles.base}>
      <div className={modalStyles.overlay} onClick={onClose}></div>
      <div className={modalStyles.container}>
        <div className={modalStyles.header}>
          <h2 className="text-xl font-bold mx-auto">{title}</h2>
          <X className={modalStyles.closeIcon} onClick={onClose} />
        </div>
        <div className={modalStyles.body}>{children}</div>
        {footerButtons && (
          <div className={modalStyles.footer}>{footerButtons}</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
