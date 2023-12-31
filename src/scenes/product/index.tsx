import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";

import Product1_Wrapper from "@/assets/Product1_Wrapper.png";
import Product2_Wrapper from "@/assets/Product2Wrapper.png";
import Product3_Wrapper from "@/assets/Product3Wrapper.png";

import BG_redwave from "@/assets/BG_redwavey.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Product = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="product"
            className="mx-auto min-h-full bg-gray-500"
            // className="mx-auto min-h-full w-5/6 py-20  bg-red-500"
        >
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 "
                onViewportEnter={() => setSelectedPage(SelectedPage.Product)}
            >
                {/* BackgroundIMG*/}
                {/* <div>
                    <img alt="background-red-wave" src={BG_redwave} className="w-full bg-cover" />
                </div> */}
                {/* ProductWrapper*/}
               
                    <div className="items-center justify-center md:flex gap-20 " >
                        <img alt="Product1" src={Product1_Wrapper} className="pt-10"/>
                        <img alt="Product2" src={Product2_Wrapper} className="pt-10"/>
                        <img alt="Product3" src={Product3_Wrapper} className="pt-10"/>
                    </div>
            
            </motion.div>
        </section>
    )
}

export default Product