"use client";

import { ServiceForm } from "@/app/components/serviceform";
import { useState } from "react";

export default function TechConsultService() {
  const [goTo, setGoTo] = useState(false);
  const Click = () => {
    setGoTo(true);
  };

  return (
    <>
      <h3>Technical Consulting Service</h3>
      <button type="button" className="btn-submit" onClick={() => Click()}>
        Apply
      </button>
      {goTo ? <ServiceForm /> : null}
    </>
  );
}
