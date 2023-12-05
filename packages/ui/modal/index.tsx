"use client"

import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import SearchModalOverlay from './overlay'

const PortalModal = ({ children }: React.PropsWithChildren) => {
    const [domReady, setDomReady] = useState<any>(null)
    useEffect(() => {
        setDomReady(document.getElementById("modal-root"))
    }, [])
    return (
        domReady && createPortal(
            <>
                <SearchModalOverlay />
                {children}
            </>,
            domReady
        )
    )
}

export default PortalModal
