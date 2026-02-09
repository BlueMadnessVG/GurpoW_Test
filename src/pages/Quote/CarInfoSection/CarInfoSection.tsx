import { useMemo } from "react";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import {
  CAR_CONDITIONS,
  CAR_MODELS,
  CAR_VERSIONS,
  DISTRIBUTORS,
} from "@/utils/constants/quote.constants";
import type { QuoteFormData } from "@/schemas/quote.schema";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./CarInfoSection.module.css";

function CarInfoSection() {
  const { control, watch, setValue, formState } =
    useFormContext<QuoteFormData>();

  const selectedModel = watch("carModel");

  const versions = useMemo(
    () =>
      selectedModel
        ? (CAR_VERSIONS[selectedModel as keyof typeof CAR_VERSIONS] ?? [])
        : [],
    [selectedModel],
  );

  return (
    <div className={styles.carInfoSection}>
      <Controller
        control={control}
        name="carModel"
        render={({ field, fieldState }) => (
          <Dropdown
            {...field}
            options={CAR_MODELS}
            label="Modelo"
            error={fieldState.error?.message}
            onChange={(value) => {
              field.onChange(value);
              setValue("carModel", String(value));
            }}
          />
        )}
      />

      <Controller
        control={control}
        name="carVersion"
        render={({ field, fieldState }) => (
          <Dropdown
            {...field}
            options={versions}
            label="Versión"
            disable={!selectedModel}
            error={fieldState.error?.message}
            onChange={(value) => {
              field.onChange(value);
              setValue("carVersion", String(value));
            }}
          />
        )}
      />

      <Controller
        control={control}
        name="carCondition"
        render={({ field, fieldState }) => (
          <Dropdown
            {...field}
            options={CAR_CONDITIONS}
            label="Estado"
            error={fieldState.error?.message}
            onChange={(value) => {
              field.onChange(value);
              setValue("carCondition", value as "new" | "used");
            }}
          />
        )}
      />

      <Controller
        control={control}
        name="distributor"
        render={({ field, fieldState }) => (
          <Dropdown
            {...field}
            options={DISTRIBUTORS}
            label="Distribuidor"
            error={fieldState.error?.message}
            onChange={(value) => {
              field.onChange(value);
              setValue("distributor", String(value));
            }}
          />
        )}
      />
    </div>
  );
}

export default CarInfoSection;
