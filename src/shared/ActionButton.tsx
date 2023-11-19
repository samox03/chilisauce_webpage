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
        className="rounded-lg border-solid border-2 border-gray-100 px-6 py-1 text-gray-500 shadow-3xl hover:bg-white hover:text-gray-500 hover:font-semibold first-line:hover:border-solid hover:border-gray-500"
        onClick={() => setSelectedPage(SelectedPage.Contact)}
        href={`#${SelectedPage.Contact}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton