import { Controller, useFormContext } from "react-hook-form";
import styles from "./CommentsSection.module.css";
import type { QuoteFormData } from "@/schemas/quote.schema";
import InputText from "@/components/ui/InputText/InputText";

function CommentsSection() {
  const { control } = useFormContext<QuoteFormData>();

  return (
    <div className={styles.commentSection}>
      <header className={styles.sectionHeader}>
        <h1>Comentarios</h1>
        <span> NOS IMPORTAN TUS COMENTARIOS </span>
      </header>

      <div className={styles.commentsSection_mainframe}>
        <Controller
          name="comments"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <InputText
              {...field}
              value={field.value ?? ""}
              as="textarea"
              rows={9}
              label="¿Dudas? ¿Comentarios?"
              placeholder="Escríbenos"
              error={fieldState.error?.message}
            />
          )}
        />
      </div>
    </div>
  );
}

export default CommentsSection;
