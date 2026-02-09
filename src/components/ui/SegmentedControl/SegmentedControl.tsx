import type { SegmentedControlProps } from "@/types/SegmentedControl.types";
import styles from "./SegmentedControl.module.css";
import { motion } from "motion/react";

function SegmentedControl({
  value,
  onChange,
  options,
  label,
  error,
  required = false,
  disable = false,
  containerClassName = "",
  buttonClassName = "",
  labelClassName = "",
  errorClassName = "",
}: SegmentedControlProps) {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      {/* Label */}
      {label && (
        <label className={`${styles.label} ${labelClassName}`}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      {/* Buttons */}
      <div className={`${styles.group} ${error ? styles.error : ""}`}>
        {options.map((opt) => {
          const isActive = opt.value === value;

          return (
            <motion.button
              key={String(opt.value)}
              type="button"
              disabled={disable}
              onClick={() => onChange(opt.value)}
              className={`${styles.button} ${
                isActive ? styles.active : ""
              } ${buttonClassName}`}
              whileTap={{ scale: 0.97 }}
            >
              {opt.label}
            </motion.button>
          );
        })}
      </div>

      {/* Error */}
      {error && (
        <motion.span
          className={`${styles.errorMessage} ${errorClassName}`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.span>
      )}
    </div>
  );
}

export default SegmentedControl;
