"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import SearchModalOverlay from "../../../apps/finance/components/organisms/Nav/SearchModal/overlay";

const PortalModal = ({ children }: React.PropsWithChildren) => {
  const [domReady, setDomReady] = useState<any>(null);
  useEffect(() => {
    setDomReady(document.getElementById("modal-root"));
  }, []);
  return domReady && createPortal(<>{children}</>, domReady);
};

export default PortalModal;
