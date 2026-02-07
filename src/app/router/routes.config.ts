// routes.config.ts
import { createElement, lazy } from 'react';
import { Routes, type RouteConfig } from '@/utils/constants/routes.constants';

const HomePage = lazy(() => import('@/pages/Home/Home'));
const ModelsPage = lazy(() => import('@/pages/Models/Models'));
const QuotePage = lazy(() => import('@/pages/Quote/Quote'));
const TryOutPage = lazy(() => import('@/pages/TryOut/TryOut'));
const PromotionsPage = lazy(() => import('@/pages/Promotions/Promotions'));
const DistributorsPage = lazy(() => import('@/pages/Distributors/Distributors'));

export const publicRoutes: RouteConfig[] = [
  {
    path: Routes.HOME,
    element: createElement(HomePage),
  },
  {
    path: Routes.MODELS,
    element: createElement(ModelsPage),
  },
  {
    path: Routes.TRY_OUT,
    element: createElement(TryOutPage),
  },
  {
    path: Routes.QUOTE,
    element: createElement(QuotePage),
  },
  {
    path: Routes.PROMOTIONS,
    element: createElement(PromotionsPage),
  },
  {
    path: Routes.DISTRIBUTORS,
    element: createElement(DistributorsPage),
  },
];