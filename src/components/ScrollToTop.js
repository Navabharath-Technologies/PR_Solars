import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to an anchor like #feedback, don't force scroll to top
    if (hash || window.location.hash.includes('feedback')) {
      return;
    }
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    // Prevent the browser from automatically restoring the scroll position on a hard refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Only force scroll to top on initial mount if not visiting an anchor
    if (!window.location.hash.includes('feedback')) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
