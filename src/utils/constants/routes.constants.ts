export const Routes = {
  HOME: "/",
  MODELS: "/models",
  TRY_OUT: "/try-out",
  QUOTE: "/quote",
  PROMOTIONS: "/promotions",
  DISTRIBUTORS: "/distributors",

  LOGIN: "/login",
  REGISTER: "/register",

  ADMIN: "/admin",
  ADMIN_MODELS: "/admin/models",
} as const;

export type RouteKey = keyof typeof Routes;

export type AppRoute = typeof Routes[RouteKey];

export interface RouteConfig {
    path: AppRoute;
    element: React.ReactNode;
    isProtected?: boolean;
}