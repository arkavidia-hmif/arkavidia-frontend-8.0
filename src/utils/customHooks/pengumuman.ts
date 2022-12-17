import { useState } from "react";

interface IPengumumanInitial {
    initialCategory?: string | undefined
    initialTitle?: string
    initialInformation?: string
    initialTime?: string
}

export interface PengumumanState {
    category?: string | undefined
    title?: string
    information?: string
    // time?: string
}

export interface PengumumanSetter {
    setCategory: () => void;
    setTitle: () => void;
    setInformation: () => void;
}

export type PengumumanHookRet = [PengumumanState, PengumumanSetter];

function usePengumuman ({initialCategory = undefined, initialTitle = "", initialInformation = "", initialTime}: IPengumumanInitial) {
    const [category, setCategory] = useState(initialCategory);
    const [title, setTitle] = useState(initialTitle)
    const [information, setInformation] = useState(initialInformation)    

    return [
        {category, title, information},
        {setCategory, setTitle, setInformation}
    ] as PengumumanHookRet
}

export default usePengumuman;