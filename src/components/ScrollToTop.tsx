/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

interface ScrollToTopProps {
  activeTab: string;
}

export default function ScrollToTop({ activeTab }: ScrollToTopProps) {
  useEffect(() => {
    // Scroll window instantly/smoothly to top on tab changes
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Instant is preferred during state switches to mock real router navigation
    });
  }, [activeTab]);

  return null;
}
