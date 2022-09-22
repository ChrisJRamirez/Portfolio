import { motion } from "framer-motion";

import { fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, staggerContainer, staggerTextContainer } from "../../variants";
import { FooterBottom, FooterContainer, FooterTop } from "./Footer.Styles";
import { links } from "./footerLinks";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop
        variants={staggerContainer}
        initial="initial"
        viewport={{ once: false, amount: 0.4 }}
        whileInView="animate"
      >
        <motion.div className="footer__logo" variants={fadeIn}>
          {/* <img src={Logo} alt="crrappo-logo" /> */}
        </motion.div>

        <motion.div
          className="footer__links"
          variants={staggerTextContainer}
          initial="initial"
          viewport={{ once: false, amount: 0.4 }}
          whileInView="animate"
        >
          <motion.div
            className="footer__links--container"
            variants={staggerTextContainer}
            initial="initial"
            viewport={{ once: false, amount: 0.4 }}
            whileInView="animate"
          >
            <motion.h4 className="footer__links--title" variants={fadeInRight}>
              Quick Link
            </motion.h4>
            <motion.ul
              className="footer__list"
              variants={staggerTextContainer}
              initial="initial"
              viewport={{ once: false, amount: 0.4 }}
              whileInView="animate"
            >
              {links.firstLinks.map((link, id) => (
                <motion.li
                  className="footer__list--item"
                  key={id}
                  variants={fadeInLeft}
                >
                  {link.link}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            className="footer__links--container"
            variants={staggerTextContainer}
            initial="initial"
            viewport={{ once: false, amount: 0.4 }}
            whileInView="animate"
          >
            <motion.h4 className="footer__links--title" variants={fadeInDown}>
              Resources
            </motion.h4>
            <motion.ul
              className="footer__list"
              variants={staggerTextContainer}
              initial="initial"
              viewport={{ once: false, amount: 0.4 }}
              whileInView="animate"
            >
              {links.secondLinks.map((link, id) => (
                <motion.li
                  className="footer__list--item"
                  key={id}
                  variants={fadeInUp}
                >
                  {link.link}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="footer__payments"
          variants={staggerContainer}
          initial="initial"
          viewport={{ once: false, amount: 0.4 }}
          whileInView="animate"
        >
          <motion.h5 className="footer___payments--title" variants={fadeInDown}>
            We accept following payment systems
          </motion.h5>
          <motion.div
            className="footer__payments--images"
            variants={staggerContainer}
            initial="initial"
            viewport={{ once: false, amount: 0.4 }}
            whileInView="animate"
          >
            <motion.img alt="Visa" variants={fadeInLeft} />
            <motion.img
             
              alt="Mastercard"
              variants={fadeInLeft}
            />
            <motion.img  alt="Bitcoin" variants={fadeInLeft} />
          </motion.div>
        </motion.div>
      </FooterTop>
      <FooterBottom
        variants={staggerContainer}
        initial="initial"
        viewport={{ once: false, amount: 0.4 }}
        whileInView="animate"
      >
        <motion.span className="footer__bottom--left" variants={fadeInRight}>
          ©2021 CRAPPO. All rights reserved
        </motion.span>
        <motion.div
          className="footer__bottom--right"
          variants={staggerContainer}
          initial="initial"
          viewport={{ once: false, amount: 0.4 }}
          whileInView="animate"
        >
          <motion.img
            alt="facebook"
            className="footer__bottom--icon"
            variants={fadeInRight}
          />
          <motion.img
            
            alt="instagram"
            className="footer__bottom--icon"
            variants={fadeInRight}
          />
          <motion.img
            
            alt="youtube"
            className="footer__bottom--icon"
            variants={fadeInRight}
          />
          <motion.img
            
            alt="twitter"
            className="footer__bottom--icon"
            variants={fadeInRight}
          />
          <motion.img
            
            alt="linkedin"
            className="footer__bottom--icon"
            variants={fadeInRight}
          />
        </motion.div>
      </FooterBottom>
    </FooterContainer>
  );
};