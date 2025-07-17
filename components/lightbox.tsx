"use client"

import Lightbox from "yet-another-react-lightbox"
// Styles are now loaded globally via CDN in _layout.tsx
import type { Slide } from "yet-another-react-lightbox"

interface LightboxWrapperProps {
  slides: Slide[]
  index: number
  close: () => void
}

export function LightboxWrapper({ slides, index, close }: LightboxWrapperProps) {
  return <Lightbox open={index >= 0} index={index} close={close} slides={slides} />
}
