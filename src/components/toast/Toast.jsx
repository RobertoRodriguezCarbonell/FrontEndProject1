import React, { useState, useEffect } from "react";
import { Check, X, Info, CircleHelp } from "lucide-react";

const toastStyles = {
  primarySuccess: "bg-blackpr text-primary cursor-pointer",
  primaryError: "bg-blackpr text-primary cursor-pointer",
  primaryInfo: "bg-blackpr text-primary cursor-pointer",
  primaryWarning: "bg-blackpr text-primary cursor-pointer",
  secondarySuccess: "bg-transparent text-sandhard border-2 border-sandhard transition-colors hover:bg-sandpr cursor-pointer",
  secondaryError: "bg-transparent text-sandhard border-2 border-sandhard transition-colors hover:bg-sandpr cursor-pointer",
  secondaryInfo: "bg-transparent text-sandhard border-2 border-sandhard transition-colors hover:bg-sandpr cursor-pointer",
  secondaryWarning: "bg-transparent text-sandhard border-2 border-sandhard transition-colors hover:bg-sandpr cursor-pointer",
};

const iconsComponents = {
  success: Check,
  error: X,
  info: Info,
  warning: CircleHelp,
};

const Toast = ({
  message = "This is a toast message",
  type = "primarySuccess",
  duration = 3000,
  onClose,
  icon = "success",
}) => {
  const [visible, setVisible] = useState(true);
  const IconComponet = iconsComponents[icon];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 p-[16px] rounded shadow-lg ${toastStyles[type]} transition-opacity duration-300 h-[36px] flex items-center`}
      onClick={() => setVisible(false)}
    >
      <div className="flex items-center gap-x-[10px]">
        <div>
          <IconComponet className="w-[20px] h-[20px]" />
        </div>
        <div className="text-[12px] font-bold">{message}</div>
      </div>
    </div>
  );
};

export default Toast;
