import useMediaQuery from "@/hooks/useMediaQuery";
import { setSelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageTitle_Logo from "@/assets/homepagetitle_logo.png";
import Logo_mainImg from "@/assets/Logo_main.png";
import BG_redWave from "@/assets/BG_redwavey.png";

import Bubble_hotnfruity from "@/assets/bubble_hotNfruity.png";
import Bubble_NK from "@/assets/bubble_BerlinNK.png";
import Bubble_vegan from "@/assets/bubble_vegan.png";




type Props = {
    setSelectedPage: (valie: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");



    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            {/* TODO: Eventuell md:h-5/6 wieder rausnehmen */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center">
                {/* MAIN HEADER */}
                <div className="z-10 mt-28">
                    {/* HEADINGS */}
                    <div className="md:flex mx-auto w-5/6 items-center justify-center">
                        {/* Speechbubbles */}
                        {/* This element is hidden on small screens. */}
                        <div className="hidden md:flex">
                            <img alt="Bubble-hot-n-fruity" src={Bubble_hotnfruity} />
                        </div>

                        <div>
                            <div>
                                <div>
                                    <img alt="home-page-text" src={HomePageTitle_Logo} />
                                </div>
                                <div >
                                    <img className="-mt-20"alt="home-page-logo" src={Logo_mainImg} />
                                </div>
                            </div>
                            <p className="text-base md:text-lg">
                                Was ist Paya Chili Sauce
                            </p>
                            <p className="text-base md:text-lg">
                                Ich bin vermutlich fruchtigste & leckerste Chili Sauce der Welt. Ehrlich.
                            </p>
                        </div>
                        {/* Speechbubbles */}
                        {/* This element is hidden on small screens. */}
                        <div className="hidden md:flex flex-col mx-auto w-2/6 items-center justify-center">
                            <div>
                                <img className="py-6" alt="Bubble-hNeukoelln" src={Bubble_NK} />
                            </div>
                            <div>
                                <img className="py-5" alt="Bubble_vegan" src={Bubble_vegan} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Home;