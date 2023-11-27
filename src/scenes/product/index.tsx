import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";

import Product1_Wrapper from "@/assets/Product1_Wrapper.png";
import BG_redwave from "@/assets/BG_redwavey.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Product = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="product"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Product)}
            >
                {/* BackgroundIMG*/}
                {/* <div>
                    <img alt="background-red-wave" src={BG_redwave} className="w-full bg-cover" />
                </div> */}
                {/* ProductWrapper*/}
               
                    <div className="items-center justify-center md:flex gap-10" >
                        <img alt="Product1" src={Product1_Wrapper} />
                        <img alt="Product1" src={Product1_Wrapper} />
                        <img alt="Product1" src={Product1_Wrapper} />
                    </div>
            
            </motion.div>
        </section>
    )
}

export default Product