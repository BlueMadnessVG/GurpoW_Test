import { useIsMobile } from "@/hooks/useMediaQuery";
import type { DropdownProps } from "@/types/Dropdown.types";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import styles from "./Dropdown.module.css";

// Animation variants
const menuVariants: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const optionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
    },
  }),
};

function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Seleccionar",
  label,
  error,
  disable = false,
  required = false,
  name,
  id,
  className,
  dropdownClassName = "",
  optionClassName = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find the currently selected option based on the value prop
  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen]);

  const handleSelect = (optionValue: string | number) => {
    if (disable) return;

    onChange(optionValue);
    setIsOpen(false);
  };

  const isMobile = useIsMobile();
  const menuAnimation = isMobile ? mobileMenuVariants : menuVariants;

  return (
    <div ref={dropdownRef} className={`${styles.dropdown} ${className}`}>
      {/* Label */}
      {label && (
        <label htmlFor={id || name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        className={`${styles.trigger} ${error ? styles.error : ""} ${disable ? styles.disabled : ""}`}
        onClick={() => !disable && setIsOpen(!isOpen)}
        disabled={disable}
        id={id}
        name={name}
      >
        <span
          className={selectedOption ? styles.selectedValue : styles.placeholder}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={`${styles.chevron} ${isOpen ? styles.open : ""}`}>
          ▼
        </span>
      </button>

      {/* Error Message */}
      {error && (
        <motion.span
          className={styles.errorMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.span>
      )}

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && !disable && (
          <motion.div
            className={`${styles.menu} ${dropdownClassName}`}
            variants={menuAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className={styles.options}>
              {options.length > 0 ? (
                options.map((option, index) => (
                  <motion.li
                    key={option.value}
                    className={`${styles.option} ${optionClassName} ${option.disable ? styles.disabled : ""} ${option.value === value ? styles.selected : ""}`}
                    onClick={() =>
                      !option.disable && handleSelect(option.value)
                    }
                    variants={optionVariants}
                    custom={index}
                    whileHover={
                      option.disable ? {} : { backgroundColor: "#fef2f2" }
                    }
                  >
                    {option.label}
                  </motion.li>
                ))
              ) : (
                <li className={styles.noResults}>
                  No hay opciones disponibles
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
