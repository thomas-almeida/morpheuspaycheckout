"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Dialog({ open, onClose, title, children }: DialogProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="w-full max-w-lg rounded-2xl bg-surface p-6 shadow-large">
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <h2 className="text-lg font-semibold">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-text-auxiliary transition-colors hover:bg-surface-hover hover:text-text-primary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
