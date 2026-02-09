import {
  CarCondition,
  ContactPreference,
  CreditTerm,
  PaymentMethod,
} from "@/types/quote.types";
import * as v from "valibot";

const nonEmptyString = (message: string) => {
  return v.pipe(v.string(), v.nonEmpty(message));
};

const lettersOnly = (message: string) => {
  return v.pipe(v.string(), v.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, message));
};

// Car Information schema
const carInfoSchema = v.object({
  carModel: v.pipe(
    v.string(),
    v.nonEmpty("Por favor selecciona un modelo"),
    v.maxLength(100, "El modelo no puede exceder los 100 caracteres"),
  ),

  carVersion: v.pipe(
    v.string(),
    v.nonEmpty("Por favor selecciona una versión"),
    v.maxLength(100, "La versión no puede exceder los 100 caracteres"),
  ),

  carCondition: v.picklist(
    [CarCondition.NEW, CarCondition.USED],
    "Por favor selecciona una condición válida",
  ),

  distributor: v.pipe(
    v.string(),
    v.nonEmpty("Por favor selecciona un distribuidor"),
    v.maxLength(100, "El distribuidor no puede exceder los 100 caracteres"),
  ),
});

const personalInfoSchema = v.object({
  firstName: v.pipe(
    v.string(),
    v.nonEmpty("El nombre es requerido"),
    v.minLength(2, "El nombre debe tener al menos 2 caracteres"),
    v.maxLength(50, "El nombre es demasiado largo"),
    lettersOnly("El nombre solo puede contener letras"),
  ),

  fatherLastName: v.pipe(
    v.string(),
    v.nonEmpty("El apellido paterno es requerido"),
    v.minLength(2, "El apellido paterno debe tener al menos 2 caracteres"),
    v.maxLength(50, "El apellido paterno es demasiado largo"),
    lettersOnly("El apellido solo puede contener letras"),
  ),

  motherLastName: v.pipe(
    v.string(),
    v.nonEmpty("El apellido materno es requerido"),
    v.minLength(2, "El apellido materno debe tener al menos 2 caracteres"),
    v.maxLength(50, "El apellido materno es demasiado largo"),
    lettersOnly("El apellido solo puede contener letras"),
  ),

  email: v.pipe(
    v.string(),
    v.nonEmpty("El email es requerido"),
    v.email("Por favor ingresa un email válido"),
    v.maxLength(100, "El email es demasiado largo"),
  ),

  phone: v.pipe(
    v.string(),
    v.nonEmpty("El teléfono es requerido"),
    v.minLength(10, "El teléfono debe tener al menos 10 dígitos"),
    v.maxLength(15, "El teléfono es demasiado largo"),
    v.regex(
      /^[\d\s\+\-\(\)]+$/,
      "Por favor ingresa un número de teléfono válido",
    ),
  ),

  contactPreference: v.picklist(
    [ContactPreference.PHONE, ContactPreference.EMAIL, ContactPreference.BOTH],
    "Por favor selecciona una preferencia de contacto válida",
  ),
});

const paymentInfoSchema = v.object({
  paymentMethod: v.picklist(
    [PaymentMethod.CASH, PaymentMethod.CREDIT],
    "Por favor selecciona un método de pago válido",
  ),

  downPayment: v.optional(
    v.nullable(
      v.pipe(
        v.string(),
        v.nonEmpty("El enganche es requerido"),
        v.regex(
          /^\d{1,3}(,\d{3})*(\.\d{2})?$/,
          "Formato inválido. Ej: 80,000.00",
        )
      ),
    ),
  ),

  creditTerm: v.optional(
    v.nullable(
      v.picklist(
        [
          CreditTerm.TERM_12,
          CreditTerm.TERM_24,
          CreditTerm.TERM_36,
          CreditTerm.TERM_48,
          CreditTerm.TERM_60,
          CreditTerm.TERM_72,
        ],
        "Por favor selecciona un plazo de crédito válido",
      ),
    ),
  ),
});

const commentsSchema = v.object({
  comments: v.optional(
    v.pipe(
      v.string(),
      v.maxLength(
        1000,
        "Los comentarios no pueden exceder los 1000 caracteres",
      ),
    ),
  ),

  privacyPolicyAccepted: v.pipe(
    v.boolean(),
    v.check(
      (value) => value === true,
      "Debes aceptar la política de privacidad",
    ),
  ),
  termsAccepted: v.pipe(
    v.boolean(),
    v.check(
      (value) => value === true,
      "Debes aceptar los términos y condiciones",
    ),
  ),
});

const baseQuoteSchema = v.object({
  ...carInfoSchema.entries,
  ...personalInfoSchema.entries,
  ...paymentInfoSchema.entries,
  ...commentsSchema.entries,
});

export const quoteFormSchema = v.pipe(
  baseQuoteSchema,
  v.check((input) => {
    if (input.paymentMethod === PaymentMethod.CREDIT) {
      return input.downPayment !== null && input.downPayment !== undefined;
    }
    return true;
  }, "El enganche es requerido para crédito"),
  v.check((input) => {
    if (input.paymentMethod === PaymentMethod.CREDIT) {
      return input.creditTerm !== null && input.creditTerm !== undefined;
    }
    return true;
  }, "El plazo de crédito es requerido para crédito"),
);

export type QuoteFormData = v.InferInput<typeof quoteFormSchema>;
export type QuoteFormOutput = v.InferOutput<typeof quoteFormSchema>;
