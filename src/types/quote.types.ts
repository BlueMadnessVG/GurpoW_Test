export const CarCondition = {
    NEW: 'new',
    USED: 'used'
} as const;

export const PaymentMethod = { 
    CASH: 'cash',
    CREDIT: 'credit',
} as const;

export const ContactPreference = {
  PHONE: 'phone',
  EMAIL: 'email',
  BOTH: 'both'
} as const;

export const CreditTerm = {
    TERM_12: 12,
    TERM_24: 24,
    TERM_36: 36,
    TERM_48: 48,
    TERM_60: 60,
    TERM_72: 72,
} as const;

export interface QuoteFormData {
    // Car Information
    carModel: string;
    carVersion: string;
    carCondition: typeof CarCondition[keyof typeof CarCondition];
    distributor: string;

    // Personal Information
    firstName: string;
    fatherLastName: string;
    motherLastName: string;
    email: string;
    phone: string;
    contactPreference: typeof ContactPreference[keyof typeof ContactPreference];    

    // Payment Information
    paymentMethod: typeof PaymentMethod[keyof typeof PaymentMethod];
    downPayment: number | null;
    creditTerm: typeof CreditTerm[keyof typeof CreditTerm] | null;

    // Comments
    comments: string;

    // Terms
    privacyPolicyAccepted: boolean;
    termsAccepted: boolean;
}

export interface QuoteSubmission extends QuoteFormData {
    submittedAt: Date;
    ipAddress: string;
    userAgent: string;
}
