import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";



import HomePageTitle_Logo from "@/assets/homepagetitle_logo.png";
import LogoText_mainImg from "@/assets/logotitle_mainpage.png";
import BG_redWave from "@/assets/BG_redwavey.png";
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
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* TODO: Eventuell md:h-5/6 wieder rausnehmen */}
                <div className="md:flex-col mx-auto w-11/12 items-center justify-center">
                    {/* MAIN HEADER */}

                    <motion.div
                        className="md:-mt-20"
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
                                <div className="hidden md:flex">
                                    <img alt="Bubble-hot-n-fruity" src={Bubble_hotnfruity} />
                                </div>

                                <div>

                                    <div className="flex flex-col justify-center">
                                        <div className="flex justify-center z-10">
                                            <img alt="home-page-logo" src={LogoText_mainImg} />
                                        </div>
                                    </div>

                                </div>
                                {/* Speechbubbles */}
                                {/* This element is hidden on small screens. */}
                                <div className="hidden md:flex flex-col mx-auto w-2/6 items-center justify-center space-y-8">

                                    <img className="py-6" alt="Bubble-hNeukoelln" src={Bubble_NK} />

                                    <img className="py-5" alt="Bubble_vegan" src={Bubble_vegan} />
                                </div>

                            </div>

                        </div>
                    </motion.div>


                    <div >
                        <motion.div
                            className="mt-8 flex-col text-center gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div>
                                <div>
                                    <p className="text-base md:text-lg">
                                        Was ist Paya Chili Sauce
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base md:text-lg">
                                        Ich bin vermutlich die fruchtigste & leckerste Chili Sauce der Welt. Ehrlich.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </section >
    )
}

export default Home;