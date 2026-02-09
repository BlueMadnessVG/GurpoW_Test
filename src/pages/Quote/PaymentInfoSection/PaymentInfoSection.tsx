import { Controller, useFormContext } from "react-hook-form";
import styles from "./PaymentInfoSection.module.css";
import type { QuoteFormData } from "@/schemas/quote.schema";
import SegmentedControl from "@/components/ui/SegmentedControl/SegmentedControl";
import { PaymentMethod } from "@/types/quote.types";
import InputText from "@/components/ui/InputText/InputText";
import { CREDIT_TERMS, DOWN_PAYMENT_OPTIONS } from "@/utils/constants/quote.constants";
import Dropdown from "@/components/ui/Dropdown/Dropdown";

function PaymentInfoSection() {
  const { control } = useFormContext<QuoteFormData>(); 

  return (
    <div className={styles.paymentInfoSection}>
      <header className={styles.sectionHeader}>
        <h1>Forma de pago</h1>
        <span> PERSONALIZA TU COTIZACIÓN </span>
      </header>

      <div className={styles.paymentInfoSection_buttons}>
        <Controller
          name="paymentMethod"
          control={control}
          render={({ field, fieldState }) => (
            <SegmentedControl 
              {...field}
              label="elije tu tipo de pago"
              required
                error={fieldState.error?.message}
                options={[
                  { label: "Contado", value: PaymentMethod.CASH },
                  { label: "Crédito", value: PaymentMethod.CREDIT }
                ]}
              />
          )}
        />
      </div>

      <div className={styles.paymentInfoSection_mainframe}>
        <Controller
          name="downPayment"
          control={control}
          render={({field, fieldState}) => (
            <InputText
              {...field}
              value={field.value ?? ""}
              label="Cantidad de enganche"
              placeholder="Ingrese cantidad de enganche"
              required
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="creditTerm"
          control={control}
          render={({field, fieldState}) => (
            <Dropdown
            {...field}
            value={field.value ?? null}
            options={CREDIT_TERMS}
            label="Plazo"
            error={fieldState.error?.message}
          />
          )}
        />
      </div>

    </div>
  );
}

export default PaymentInfoSection;
