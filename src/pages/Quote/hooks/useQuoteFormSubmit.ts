import type { QuoteFormData } from "@/types/quote.types";
import { useState } from "react";

// Minimal version
export const useQuoteFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData: QuoteFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    // Simulate API call with random success/failure
    await new Promise(resolve => setTimeout(resolve, 1500));
    const shouldSucceed = Math.random() > 0.1;
    
    if (shouldSucceed) {
      setSuccess(true);
      return { success: true, message: 'Cotización enviada exitosamente' };
    } else {
      const errorMsg = 'Error simulado: Por favor intenta nuevamente';
      setError(errorMsg);
      return { success: false, message: errorMsg };
    }
  };

  return { isSubmitting, error, success, submitForm };
};