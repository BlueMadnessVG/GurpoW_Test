import { Routes } from "./routes.constants";

export interface NavigationItem {
  id: string;
  path: typeof Routes[keyof typeof Routes];
  label: string;
  isProtected?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { id: "home", path: Routes.HOME, label: "Home" },
  { id: "models", path: Routes.MODELS, label: "Modelos" },
  { id: "tryOut", path: Routes.TRY_OUT, label: "Prueba de Manejo" },
  { id: "quote", path: Routes.QUOTE, label: "Cotizar" },
  { id: "promotions", path: Routes.PROMOTIONS, label: "Promociones" },
  { id: "distributors", path: Routes.DISTRIBUTORS, label: "Distribuidores" },
];
