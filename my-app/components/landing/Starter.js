// import { useScroll } from "../components/useScroll";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import Web3Modal from 'web3modal'
import { headerAnimation, imageAnimation } from "../Animations";
import GDG_icon from "../../public/img/contact/GDG_icon.svg"



export default function Starter() {
  const [element, controls] = useScroll();
  const [walletConnected, setWalletConnected] = useState(false)
  const [currentAddress, setCurrentAddress] = useState()



  return (
    <div
      ref={element}
      className="relative flex flex-col pt-24
                      laptop:grid laptop:grid-cols-2"
    >
      <div
        className="relative flex flex-col mb-6 justify-center
                        laptop:order-2 laptop:mb-0"
      >
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Image src={GDG_icon} alt="image" />
        </motion.div>
      </div>

      <div
        className="relative flex flex-col items-center
                        laptop:block laptop:order-1"
      >
        <div
          className="relative flex flex-col items-center
                          laptop:items-start "
        >
          <h5>Don't just participate in events</h5>
          <h1 className="mb-1">Buy NFT Tickets</h1>
          {/* <h5>Get your own ticket</h5> */}
          <h4 className="mb-1 text">NFT as a ticketing service</h4>
          <h4 className="relative flex flex-row mb-3 ">


          </h4>
          <p
            className="relative sub-heading-1 mb-6 text-center max-w-[50%]
                          laptop:mb-11 laptop:text-left laptop:max-w-[75%]"
          >
            GDvent is a onestop solution for organizing event with NFT's as a ticketing service
          </p>
        </div>
        <motion.button className="primary" whileHover={{ y: -2 }} whileTap={{ y: 0 }}>

          {/* {walletButton()} */}
          Connect Wallet&nbsp;


        </motion.button>


      </div>
    </div>
  );
}
