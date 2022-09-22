import {motion} from 'framer-motion'
// import { ArrowSm, BorderArrowRight } from '../../assets';
import { fadeIn,  fadeInLeft, staggerContainer } from '../../variants';
import { Button } from '../button';
import { Currencies, TradeCryptoContainer } from "./Project.Styles"
import { tradeData } from "./projectData"


export const TradeCrypto = () => {
  return (
    <TradeCryptoContainer>
      <motion.div
        className="content"
        variants={staggerContainer}
        initial="initial"
        viewport={{ once: false, amount: 0.2 }}
        whileInView="animate"
      >
        <motion.h4 className="title" variants={fadeIn}>
          Trade securely and market the high growth cryptocurrencies.
        </motion.h4>
        <Currencies
          variants={staggerContainer}
          initial="initial"
          viewport={{ once: false, amount: 0.2 }}
          whileInView="animate"
        >
          {tradeData.map((item, id) => {
            return (
              <motion.div
                className="currency__box"
                key={id}
                variants={fadeInLeft}
              >
                {item.icon}
                <h4 className="currency__box--name">
                  {item.pName} 
                </h4>
               
                
                  
              </motion.div>
            );
          })}
        </Currencies>
      </motion.div>
    </TradeCryptoContainer>
  );
}