import { useState } from "react";

interface IPengumumanInitial {
    initialCategory?: string | undefined
    initialTitle?: string
    initialInformation?: string
    initialPublicationDate?: Date | null
}

export interface PengumumanState {
    category?: string | undefined
    title?: string
    information?: string
    publicationDate: Date | null
}

export interface PengumumanSetter {
    setCategory: () => void;
    setTitle: () => void;
    setInformation: () => void;
    setPublicationDate: () => void;
}

export type PengumumanHookRet = [PengumumanState, PengumumanSetter];

function usePengumuman ({initialCategory = undefined, initialTitle = "", initialInformation = "", initialPublicationDate = null}: IPengumumanInitial) {
    const [category, setCategory] = useState(initialCategory);
    const [title, setTitle] = useState(initialTitle)
    const [information, setInformation] = useState(initialInformation)    
    const [publicationDate, setPublicationDate] = useState(initialPublicationDate)

    return [
        {category, title, information, publicationDate},
        {setCategory, setTitle, setInformation, setPublicationDate}
    ] as PengumumanHookRet
}

export default usePengumuman;