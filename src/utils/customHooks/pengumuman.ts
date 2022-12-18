import { useEffect, useState } from "react";

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
    setDates: PengumumanDatesSetter;
    setTime: PengumumanTimeSetter;
}

export type PengumumanTimeSetter = (hour: number, minute: number) => void;

export type PengumumanDatesSetter = (year: number, month: number, date: number) => void;

export type PengumumanHookRet = [PengumumanState, PengumumanSetter];

function usePengumuman ({initialCategory = undefined, initialTitle = "", initialInformation = "", initialPublicationDate = null}: IPengumumanInitial) {
    const [category, setCategory] = useState(initialCategory);
    const [title, setTitle] = useState(initialTitle)
    const [information, setInformation] = useState(initialInformation)    
    const [publicationDate, setPublicationDate] = useState(initialPublicationDate)    

    useEffect(() => {
    //   console.log(publicationDate, "Actual Pub After Change")
    }, [publicationDate])

    function setDates (year: number, month: number, date: number) {
        const newDate = publicationDate ? new Date(publicationDate) : new Date();
        // console.log(date, month, year, "Supposedly new date")
        newDate.setFullYear(year)
        newDate.setMonth(month)
        newDate.setDate(date)
        setPublicationDate(newDate)
    }

    function setTime (hour: number, minute: number) {
        const newDate = publicationDate ? new Date(publicationDate) : new Date();
        newDate.setHours(hour, minute)
        setPublicationDate(newDate)
    }

    return [
        {category, title, information, publicationDate},
        {setCategory, setTitle, setInformation, setDates, setTime}
    ] as PengumumanHookRet
}

export default usePengumuman;