"use client"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Counter from "yet-another-react-lightbox/plugins/counter"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import type { Slide } from "yet-another-react-lightbox"

interface LightboxWrapperProps {
  slides: Slide[]
  index: number
  close: () => void
}

export function LightboxWrapper({ slides, index, close }: LightboxWrapperProps) {
  return (
    <Lightbox
      open={index >= 0}
      index={index}
      close={close}
      slides={slides}
      plugins={[Thumbnails, Zoom, Counter, Fullscreen]}
      thumbnails={{
        position: "bottom",
        width: 120,
        height: 80,
        border: 1,
        borderRadius: 4,
        padding: 4,
        gap: 16,
        showToggle: true
      }}
      zoom={{
        maxZoomPixelRatio: 3,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        doubleClickMaxStops: 2,
        keyboardMoveDistance: 50,
        wheelZoomDistanceFactor: 100,
        pinchZoomDistanceFactor: 100,
        scrollToZoom: true
      }}
      counter={{
        container: { style: { top: "unset", bottom: 0 } }
      }}
      carousel={{
        finite: false,
        preload: 10,
        padding: "16px",
        spacing: "30%",
        imageFit: "contain"
      }}
      animation={{
        fade: 300,
        swipe: 300
      }}
      controller={{
        closeOnPullDown: true,
        closeOnBackdropClick: true
      }}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        thumbnail: { borderRadius: 8 }
      }}
    />
  )
}
