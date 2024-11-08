import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";

import SocialMenu from "../../../Components/SocialMenu/SocialMenu";
import Title from "../Components/Title/Title";
import TechnologiesBadge from "Components/Badges/TechnologiesBadge";
import ContactsSectionContent from "./ContactsSectionContent";
import CVButton from "../Components/Button/CVButton"

const HomeSectionContent = memo(({ setActiveSection, setActiveIndex }) => {
  const handleSectionChange = useCallback(() => {
    if (typeof setActiveIndex === "function" && typeof setActiveSection === "function") {
      setActiveIndex(2);
      setActiveSection(<ContactsSectionContent />);
    } else {
      console.error("setActiveIndex o setActiveSection no está definido");
    }
  }, [setActiveIndex, setActiveSection]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="d-flex flex-column h-100 align-items-center justify-content-center text-center"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <SocialMenu />
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="my-8"
      >
        <Title />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="py-5"
      >
        <TechnologiesBadge />
      </motion.div>

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 0.9, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="d-flex"
      >
        <CVButton 
                onClick={()=> handleSectionChange()} 
                className={"btn border-none fw-bold"} 
                content="Contactate conmigo"/>
      </motion.div>
    </motion.section>
  );
});

export default HomeSectionContent;