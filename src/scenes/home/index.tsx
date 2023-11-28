import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";



import HomePageTitle_Logo from "@/assets/homepagetitle_logo.png";
import LogoText_mainImg from "@/assets/logotitle_mainpage.png";
import BG_redWave from "@/assets/BG_redwavey.png";
import cut_redWave from "@/assets/cut_redwavey.png";
import Bubble_hotnfruity from "@/assets/bubble_hotNfruity.png";
import Bubble_NK from "@/assets/bubble_BerlinNK.png";
import Bubble_vegan from "@/assets/bubble_vegan.png";
import BG_redwave from "@/assets/BG_redwavey.png";





type Props = {
    setSelectedPage: (valie: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");



    return (
        <section id="home" className=" gap-y-16 bg-gray-20 md:h-full md:pb-0 md:pt-32">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                // className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
                className="mx-auto items-center justify-center md:flex md:h-5/6"

                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* TODO: Eventuell md:h-5/6 wieder rausnehmen */}
                <div className="md:flex-col items-center justify-center w-full">
                {/* <div className="md:flex-col mx-auto w-11/12 items-center justify-center"> */}
                    {/* MAIN HEADER */}

                    <motion.div
                        // className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className="z-10 mt-28">
                            {/* HEADINGS */}
                            <div className="md:flex mx-auto w-11/12 items-center justify-center space-x- ">

                                {/* Speechbubbles */}
                                {/* This element is hidden on small screens. */}
                                <div className="hidden md:flex mx-auto">
                                    <img alt="Bubble-hot-n-fruity" src={Bubble_hotnfruity} />
                                </div>

                                <div>
                                    <div className="flex flex-col justify-center ">
                                        <div className="flex justify-center z-10">
                                            <img alt="home-page-logo" src={LogoText_mainImg} />
                                        </div>
                                    </div>
                                </div>

                                {/* Speechbubbles */}
                                {/* This element is hidden on small screens. */}
                                <div className="hidden md:flex flex-col mx-auto items-center justify-center space-y-8">

                                    <img className="py-6" alt="Bubble-hNeukoelln" src={Bubble_NK} />

                                    <img className="py-5" alt="Bubble_vegan" src={Bubble_vegan} />
                                </div>

                            </div>

                        </div>
                    </motion.div>
                    
                    <img alt="backgroundElement" src={cut_redWave} className="-mt-28"/>

                    <div className=" bg-gray-500">
                        <div className="flex-col gap-y-22">
                            {/* <div className="bg-red-wave bg-cover h-[600px] bg-center -z-50 -mt-20"></div> */}
                            <motion.div
                                className=" flex-col text-center gap-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <div className="pt-8">
                                    <div>
                                        <p className="text-xl p-8 md:text-3xl text-white">
                                            Was ist Paya Chili Sauce
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-base md:text-lg font-sans text-white">
                                            Ich bin vermutlich die fruchtigste & <br /> leckerste Chili Sauce der Welt. Ehrlich.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="p-8">
                                <p className="text-base md:text-lg font-sans text-center text-white">
                                    Mich gibt es in <strong>drei Sorten: </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section >
    )
}

export default Home;