"use client"

import { useEffect, useState } from "react"
import SettingsModal from "@/components/modals/settingsModal";
import CoverImageModal from "../modals/coverImageModal";

const ModalProvider = () => {

    const [ismounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!ismounted)  return null;

    return (
        <>
            <SettingsModal />
            <CoverImageModal />
        </>
    );
}
 
export default ModalProvider;