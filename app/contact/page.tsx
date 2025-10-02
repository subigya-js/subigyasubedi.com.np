"use client";

import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <AnimatedPage>
      <div className="min-h-[70vh] flex items-center justify-center">
        <Contact />
      </div>
    </AnimatedPage>
  );
};

export default ContactPage;
