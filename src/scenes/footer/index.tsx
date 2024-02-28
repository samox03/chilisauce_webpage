import ContactBtnLight from "@/shared/ContactBtnLight";
import InstaBtnLight from "@/shared/InstaBtnLight";
import Link from "../navbar/Link";
import { SelectedPage } from "@/shared/types";



type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <div className="footer-background">
      {/* <img alt="red background wave" src={BG_half_redwavey} className="w-full" /> */}
      <div className="justify-content mx-auto w-5/6 md:flex-col">
        <div className={`${flexBetween} gap-5 flex-col`}>
          <ContactBtnLight setSelectedPage={setSelectedPage}>Schreib mir</ContactBtnLight>
          <InstaBtnLight setSelectedPage={setSelectedPage}>Folg mir auf Insta</InstaBtnLight>
        </div>
      </div>
      <div className={`${flexBetween} text-sm mx-20 text-white font-sans`}>
        <div></div>
        <Link
          page="Was bin ich"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Wer steckt dahinter"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        <Link
          page="Wo gibts mich"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
         <div></div>
      </div>
      <div>
        <p><a>Impressum</a></p>
        <p><a>Kontakt</a></p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Footer