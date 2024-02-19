
import { SelectedPage } from "@/shared/types"
import logo_smallaside from "@/assets/logo_smallaside.png";
import chillis_graphic from "@/assets/chillis_graphic.png";
import BG_graphicLine from "@/assets/BG_graphicLine.png";






type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Shopping = ({ setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";


    return (
        <section
            id="wogibtsmich"
            className="mx-auto min-h-full">

            {/* TODO: Insert Table, Insert Shoppify link, Insert 
*/}
            <img alt="wave_white_background" src={BG_graphicLine} />

            <div className="md:flex justify-content items-center">
                <div className="flex-1 p-40 flex-col">
                    <p className="text-xl p-8 md:text-3xl text-gray-100">Wo du mich findest</p>
                    <p className="font-sans">
                        Momentan bin ich nur in Berlin oder online erhältlich. Das kann sich aber gerne ändern. Drucke hier ein Wunschformular für den Laden in deiner Nähe, oder, wenn du selbst einen Laden hast, schreib mir hier.
                    </p>
                </div>
                <div>
                    <img className="flex-1 p-40 flex-col" alt="logo" src={logo_smallaside} />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div >
                    <h2>Im Laden</h2>
                    <table className="font-sans table-auto">
                        <tbody>
                            <tr>
                                <td>Pfefferhaus, Kreuzberg</td>
                                <td>Herrfurthstr 324, 12047 Berlin</td>
                            </tr>
                            <tr>
                                <td>Edeka Hermann</td>
                                <td>Herrfurthstr 324, 12047 Berlin</td>
                            </tr>
                            <tr>
                                <td>Späti zu Späti</td>
                                <td>Herrfurthstr 324, 12047 Berlin</td>
                            </tr>
                            <tr>
                                <td>Chililaden</td>
                                <td>Herrfurthstr 324, 12047 Berlin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>

                    <div className="md:flex justify-content items-center">
                        <div>
                            <img alt="logo" src={chillis_graphic} />
                        </div>
                        <div>
                            <p>Online</p>
                            <p className="font-sans">Klick hier um bequem & online an deine köstliche Portion Paya Chili Sauce zu kommen!
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>


        </section>
    )
}

export default Shopping