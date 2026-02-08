import { useEffect, useState } from "react";

interface Props {
  query: string;
}

export const useMediaQuery = ({ query }: Props) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    const updateMatches = () => setMatches(media.matches);
    updateMatches();
    
    media.addEventListener("change", updateMatches);
    return () => media.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
};

export const useIsMobile = () => useMediaQuery({ query: "(max-width: 767px)" });
export const useIsTablet = () => useMediaQuery({ query: "(min-width: 768px) and (max-width: 1023px)" });
export const useIsDesktop = () => useMediaQuery({ query: "(min-width: 1024px)" });
export const useIsTabletOrLarger = () => useMediaQuery({ query: "(min-width: 768px)" });
export const useIsMobileOrTablet = () => useMediaQuery({ query: "(max-width: 1023px)" });