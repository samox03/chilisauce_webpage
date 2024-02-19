import BG_half_redwavey from "@/assets//BG_half_redwavey.png";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({ setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";

  return (
    <div>
        <img alt="red background wave" src={BG_half_redwavey}/>
    </div>
  )
}

export default Footer