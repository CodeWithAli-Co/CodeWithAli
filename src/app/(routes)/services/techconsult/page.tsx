"use client";

import { ContactForm } from "@/app/components/contact";
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
      {goTo ? <ContactForm /> : null}
    </>
  );
}
