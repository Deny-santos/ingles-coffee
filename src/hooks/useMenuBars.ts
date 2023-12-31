'use client'

import { useContext } from 'react'
import { BarContext } from "../context/bars"


const useMenuBars = () => {

    const barContext = useContext(BarContext)

    if (!barContext) {
        throw new Error('Error: Missing context value');
    }

    const { showBars, setShowBars } = barContext

    const handleShowMenu = () => {
        setShowBars(!showBars)
        console.log()
    }
    return {
        showBars, setShowBars, handleShowMenu
    }
}

export default useMenuBars