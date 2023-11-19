import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from "./types";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
        className="rounded-md bg-gray-100 px-10 py-2 text-white hover:bg-secondary-500 hover:text-white"
        onClick={() => setSelectedPage(SelectedPage.Contact)}
        href={`#${SelectedPage.Contact}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton