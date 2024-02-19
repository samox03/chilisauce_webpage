import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton";

import teampic from "@/assets/Personas_picframe.png";
import bubble_homemade from "@/assets//bubble_handmade.png";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Team = ({ setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";


    return (
        <section>
            <div className="md:flex justify-content items-center">
                <div className="flex-1 p-20">
                    <img alt="picture of the team" src={teampic} />
                </div>
                <div className="flex-1 p-20 flex-col">
                    <div className="flex-end">
                        <img alt="its all homemade" src={bubble_homemade} />
                    </div>
                    <div>
                        <p className="text-xl p-8 md:text-3xl text-gray-100">
                            Wer steckt dahinter
                        </p>
                        <p className="font-sans">
                            Meine Geschichte begann vor langer langer Zeit im Herzen Neuköllns, Berlin. 
                            Nico erschuf mich in einem Moment der göttlichen Eingebung. 
                            Nach Jahren der Perfektion wusste Malik: <i>Es ist Zeit mich in die Welt hinauszuschicken.</i>
                        </p>
                        <br/>
                        <p className="font-sans">
                            Und hier bin ich erhältlich, nur eine <strong>Email</strong> entfernt. 
                            Du kannst mich <strong>Probekosten</strong> oder auch <strong>in deinem Laden verkaufen</strong> – 
                            schreib mir einfach eine Mail.
                        </p>
                        <div>
                            <div className={`${flexBetween} gap-8 pt-12`}>
                                <ActionButton setSelectedPage={setSelectedPage}>Schreib mir</ActionButton>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </section>
    )

}

export default Team


