import type { InputTextProps } from "@/types/InputText.types";
import { useState } from "react";
import styles from "./InputText.module.css";
import { motion } from "motion/react";

function InputText({
  // Required
  value,
  onChange,

  // Optional
  label,
  error,
  required = false,

  // Styling
  containerClassName = "",
  inputClassName = "",
  labelClassName = "",
  errorClassName = "",

  // HTML input props
  type = "text",
  placeholder = "",
  disabled = false,
  name,
  id,

  as = "input",
  rows = 4,
  ...inputProps
}: InputTextProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChange(e.target.value);
  };

  const commonProps = {
    value,
    onChange: handleChange,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    placeholder,
    disabled,
    name,
    id: id || name,
    className: `${styles.input} ${inputClassName}`,
  };

  return (
    <div className={`${styles.container} ${containerClassName}`}>
      {/* label */}
      {label && (
        <label
          htmlFor={id || name}
          className={`${styles.label} ${labelClassName}`}
        >
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      {/* input container */}
      <div
        className={`${styles.inputContainer} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
      >
        {as === "textarea" ? (
          <motion.textarea
            {...commonProps}
            rows={rows}
            animate={{
              borderColor: error ? "#b91c1c" : "#ef4444",
              boxShadow:
                isFocused && !error
                  ? "0 0 0 3px rgba(239, 68, 68, 0.2)"
                  : "none",
            }}
            transition={{ duration: 0.2 }}
          />
        ) : (
          <motion.input
            {...commonProps}
            type={type}
            animate={{
              borderColor: error ? "#b91c1c" : "#ef4444",
              boxShadow:
                isFocused && !error
                  ? "0 0 0 3px rgba(239, 68, 68, 0.2)"
                  : "none",
            }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>

      {/* error */}
      {error && (
        <motion.span
          className={`${styles.errorMessage} ${errorClassName}`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.span>
      )}
    </div>
  );
}

export default InputText;
