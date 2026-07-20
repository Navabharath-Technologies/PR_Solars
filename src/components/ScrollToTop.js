import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Prevent the browser from automatically restoring the scroll position on a hard refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Also force scroll to top on initial mount
    window.scrollTo(0, 0);
  }, []);

  return null;
}
