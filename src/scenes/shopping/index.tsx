
import { SelectedPage } from "@/shared/types"
import logo_smallaside from "@/assets/logo_smallaside.png";
import chillis_graphic from "@/assets/chillis_graphic.png";






type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Shopping = ({ setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";


    return (
        <section
            id="wogibtsmich">

            {/* TODO: Insert Table, Insert Shoppify link, Insert 
*/}
            <div>
                <div>
                    <h1>Wo du mich findest</h1>
                    <p>
                        Momentan bin ich nur in Berlin oder online erhältlich. Das kann sich aber gerne ändern. Drucke hier ein Wunschformular für den Laden in deiner Nähe, oder, wenn du selbst einen Laden hast, schreib mir hier.
                    </p>
                </div>
                <div>
                    <img alt="logo" src={logo_smallaside} />
                </div>
            </div>
            <div>
                <div>
                    <h2>Im Laden</h2>
                    <table>
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
                <h2>Online</h2>
                <div>
                    <img alt="logo" src={chillis_graphic} />

                    <p>Klick hier um bequem & online an deine köstliche Portion Paya Chili Sauce zu kommen!
                    </p>
                </div>
                <div>

                </div>



            </div>
        </section>
    )
}

export default Shopping