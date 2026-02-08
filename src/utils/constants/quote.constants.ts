import {
  CarCondition,
  ContactPreference,
  CreditTerm,
  PaymentMethod,
} from "@/types/quote.types";

export const CAR_MODELS = [
  { id: "model-1", value: "model-1", label: "Modelo A", category: "Sedán" },
  { id: "model-2", value: "model-2", label: "Modelo B", category: "SUV" },
  { id: "model-3", value: "model-3", label: "Modelo C", category: "Hatchback" },
  { id: "model-4", value: "model-4", label: "Modelo D", category: "Camioneta" },
  { id: "model-5", value: "model-5", label: "Modelo E", category: "Deportivo" },
];

export const CAR_VERSIONS = {
  "model-1": [
    { id: "v1-1", value: "v1-1", label: "Versión Base", price: 250000 },
    { id: "v1-2", value: "v1-2", label: "Versión Media", price: 300000 },
    { id: "v1-3", value: "v1-3", label: "Versión Full", price: 350000 },
  ],
  "model-2": [
    { id: "v2-1", value: "v2-1", label: "Versión Base", price: 280000 },
    { id: "v2-2", value: "v2-2", label: "Versión Media", price: 330000 },
    { id: "v2-3", value: "v2-3", label: "Versión Full", price: 380000 },
  ],
  "model-3": [
    { id: "v3-1", value: "v3-1", label: "Versión Base", price: 290000 },
    { id: "v3-2", value: "v3-2", label: "Versión Media", price: 340000 },
    { id: "v3-3", value: "v3-3", label: "Versión Full", price: 390000 },
  ],
  "model-4": [
    { id: "v4-1", value: "v4-1", label: "Versión Base", price: 320000 },
    { id: "v4-2", value: "v4-2", label: "Versión Media", price: 370000 },
    { id: "v4-3", value: "v4-3", label: "Versión Full", price: 420000 },
  ],
  "model-5": [
    { id: "v5-1", value: "v5-1", label: "Versión Base", price: 350000 },
    { id: "v5-2", value: "v5-2", label: "Versión Media", price: 400000 },
    { id: "v5-3", value: "v5-3", label: "Versión Full", price: 450000 },
  ],
};

export const CAR_CONDITIONS = [
  { id: "new", value: CarCondition.NEW, label: "Nuevo" },
  { id: "used", value: CarCondition.USED, label: "Usado" },
];

export const MEXICAN_STATES = [
  { id: "ags", value: "Aguascalientes", label: "Aguascalientes" },
  { id: "bc", value: "Baja California", label: "Baja California" },
  { id: "bcs", value: "Baja California Sur", label: "Baja California Sur" },
  { id: "camp", value: "Campeche", label: "Campeche" },
  { id: "chis", value: "Chiapas", label: "Chiapas" },
  { id: "chih", value: "Chihuahua", label: "Chihuahua" },
  { id: "cdmx", value: "Ciudad de México", label: "Ciudad de México" },
  { id: "coah", value: "Coahuila", label: "Coahuila" },
  { id: "col", value: "Colima", label: "Colima" },
  { id: "dur", value: "Durango", label: "Durango" },
  { id: "gto", value: "Guanajuato", label: "Guanajuato" },
  { id: "gro", value: "Guerrero", label: "Guerrero" },
  { id: "hgo", value: "Hidalgo", label: "Hidalgo" },
  { id: "jal", value: "Jalisco", label: "Jalisco" },
  { id: "mex", value: "Estado de México", label: "Estado de México" },
  { id: "mich", value: "Michoacán", label: "Michoacán" },
  { id: "mor", value: "Morelos", label: "Morelos" },
  { id: "nay", value: "Nayarit", label: "Nayarit" },
  { id: "nl", value: "Nuevo León", label: "Nuevo León" },
  { id: "oax", value: "Oaxaca", label: "Oaxaca" },
  { id: "pue", value: "Puebla", label: "Puebla" },
  { id: "qro", value: "Querétaro", label: "Querétaro" },
  { id: "qroo", value: "Quintana Roo", label: "Quintana Roo" },
  { id: "slp", value: "San Luis Potosí", label: "San Luis Potosí" },
  { id: "sin", value: "Sinaloa", label: "Sinaloa" },
  { id: "son", value: "Sonora", label: "Sonora" },
  { id: "tab", value: "Tabasco", label: "Tabasco" },
  { id: "tamps", value: "Tamaulipas", label: "Tamaulipas" },
  { id: "tlax", value: "Tlaxcala", label: "Tlaxcala" },
  { id: "ver", value: "Veracruz", label: "Veracruz" },
  { id: "yuc", value: "Yucatán", label: "Yucatán" },
  { id: "zac", value: "Zacatecas", label: "Zacatecas" },
];

export const DISTRIBUTORS = [
  {
    id: "dist-1",
    value: "dist-1",
    label: "Distribuidor Norte",
    state: "Chihuahua",
  },
  {
    id: "dist-2",
    value: "dist-2",
    label: "Distribuidor Centro",
    state: "Ciudad de México",
  },
  {
    id: "dist-3",
    value: "dist-3",
    label: "Distribuidor Sur",
    state: "Guerrero",
  },
  {
    id: "dist-4",
    value: "dist-4",
    label: "Distribuidor Este",
    state: "Veracruz",
  },
  {
    id: "dist-5",
    value: "dist-5",
    label: "Distribuidor Oeste",
    state: "Jalisco",
  },
];

export const CONTACT_PREFERENCES = [
  {
    id: "phone",
    value: ContactPreference.PHONE,
    label: "Llamada telefónica",
    icon: "📞",
  },
  {
    id: "email",
    value: ContactPreference.EMAIL,
    label: "Correo electrónico",
    icon: "✉️",
  },
  { id: "both", value: ContactPreference.BOTH, label: "Ambos", icon: "📱✉️" },
];

export const PAYMENT_METHODS = [
  { id: "cash", value: PaymentMethod.CASH, label: "Contado", icon: "💵" },
  { id: "credit", value: PaymentMethod.CREDIT, label: "Crédito", icon: "💳" },
];

export const CREDIT_TERMS = [
  { id: "12", value: CreditTerm.TERM_12, label: "12 meses" },
  { id: "24", value: CreditTerm.TERM_24, label: "24 meses" },
  { id: "36", value: CreditTerm.TERM_36, label: "36 meses" },
  { id: "48", value: CreditTerm.TERM_48, label: "48 meses" },
  { id: "60", value: CreditTerm.TERM_60, label: "60 meses" },
  { id: "72", value: CreditTerm.TERM_72, label: "72 meses" },
];

export const DOWN_PAYMENT_OPTIONS = [
  { id: "10%", value: 10, label: "10%", type: "percentage" },
  { id: "20%", value: 20, label: "20%", type: "percentage" },
  { id: "30%", value: 30, label: "30%", type: "percentage" },
  { id: "40%", value: 40, label: "40%", type: "percentage" },
  { id: "50%", value: 50, label: "50%", type: "percentage" },
  { id: "other", value: null, label: "Otro monto", type: "custom" },
];
