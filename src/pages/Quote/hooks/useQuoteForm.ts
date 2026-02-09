import { useForm } from "react-hook-form";
import { quoteFormSchema, type QuoteFormData } from "@/schemas/quote.schema";
import { valibotResolver } from "@hookform/resolvers/valibot";

export function useQuoteForm() {
  return useForm<QuoteFormData>({
    resolver: valibotResolver(quoteFormSchema),

    defaultValues: {
      carModel: "",
      carVersion: "",
      carCondition: "new",
      distributor: "",

      firstName: "",
      fatherLastName: "",
      motherLastName: "",
      email: "",
      phone: "",
      contactPreference: "email",

      paymentMethod: "cash",
      downPayment: null,
      creditTerm: null,

      comments: "",

      privacyPolicyAccepted: false,
      termsAccepted: false,
    },

    mode: "onSubmit",
  });
}
