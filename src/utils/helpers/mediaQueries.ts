export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.tablet - 1}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  tabletAndUp: `(min-width: ${breakpoints.tablet}px)`,
  tabletAndDown: `(max-width: ${breakpoints.desktop - 1}px)`,
};