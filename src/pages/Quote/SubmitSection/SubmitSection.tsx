import type { QuoteFormData } from "@/schemas/quote.schema";
import styles from "./SubmitSection.module.css";
import { useFormContext } from "react-hook-form";

function SubmitSection() {
  const { register, formState } = useFormContext<QuoteFormData>();

  return (
    <div className={styles.container}>
      <div className={styles.checkboxes}>
        <label className={styles.checkboxItem}>
          <input type="checkbox" {...register("privacyPolicyAccepted")} />
          <span>
            He leído y acepto el <strong>aviso de privacidad</strong>
          </span>
        </label>

        <label className={styles.checkboxItem}>
          <input type="checkbox" {...register("termsAccepted")} />
          <span>No deseo recibir promociones</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={formState.isSubmitting}
        className={styles.submitButton}
      >
        ENVIAR
      </button>
    </div>
  );
}

export default SubmitSection;
