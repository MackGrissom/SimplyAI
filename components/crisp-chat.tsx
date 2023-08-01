'use client'

import { useEffect } from "react"
import { Crisp} from 'crisp-sdk-web'

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("8ecdf16a-fec1-4980-853d-b84def5cb720")
    }, [])

return null
}