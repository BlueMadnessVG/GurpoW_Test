import InputText from "@/components/ui/InputText/InputText";
import styles from "./PersonalInfoSection.module.css";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { QuoteFormData } from "@/schemas/quote.schema";
import SegmentedControl from "@/components/ui/SegmentedControl/SegmentedControl";
import { ContactPreference } from "@/types/quote.types";

function PersonalInfoSection() {
  const { control } = useFormContext<QuoteFormData>();

  return (
    <div className={styles.personalInfoSection}>
      <header className={styles.sectionHeader}>
        <h1>Datos personales</h1>
        <span> ESCRIBE TUS DATOS PERSONALES </span>
      </header>

      <div className={styles.personalInfoSection_mainframe}>
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState }) => (
            <InputText
              {...field}
              label="Nombre (s)"
              placeholder="Ingresa tu nombre"
              required
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="fatherLastName"
          control={control}
          render={({ field, fieldState }) => (
            <InputText
              {...field}
              label="Apellido paterno"
              placeholder="Ingresa tu apellido paterno"
              required
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="motherLastName"
          control={control}
          render={({ field, fieldState }) => (
            <InputText
              {...field}
              label="Apellido materno"
              placeholder="Ingresa tu apellido materno"
              required
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <InputText
              {...field}
              label="email"
              placeholder="Ingresa tu email"
              required
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <InputText
              {...field}
              label="teléfono"
              placeholder="Ingresa tu teléfono"
              required
              error={fieldState.error?.message}
            />
          )}
        />
      </div>

      <div className={styles.personalInfoSection_footer}>
        <Controller
          name="contactPreference"
          control={control}
          render={({ field, fieldState }) => (
            <SegmentedControl
              {...field}
              label="Deso ser contactado por"
              required
              error={fieldState.error?.message}
              options={[
                { label: "Teléfono", value: ContactPreference.PHONE },
                { label: "Email", value: ContactPreference.EMAIL },
                { label: "Ambos", value: ContactPreference.BOTH },
              ]}
            />
          )}
        />
      </div>
    </div>
  );
}

export default PersonalInfoSection;
