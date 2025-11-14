"use client";

import { useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function Toast({
  message,
  visible,
  onClose,
}: {
  message: string;
  visible: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3500);

    return () => clearTimeout(timer);
  }, [visible, onClose]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] transition-all duration-300
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}
      `}
    >
      <div className="bg-white rounded-xl shadow-xl px-4 py-3 max-w-[300px] border border-violet-200 flex items-center gap-3">
        <div> <FaCircleCheck className="text-black w-4 h-4" /> </div>
        <p className="text-gray-700 text-sm">{message}</p>
      </div>
    </div>
  );
}
