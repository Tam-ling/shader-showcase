"use client"

import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const videos = [
  { title: "Campus Tour", poster: "/campus-tour-poster.jpg" },
  { title: "Makerspace Demo", poster: "/makerspace-demo-poster.jpg" },
  { title: "Global Classroom", poster: "/global-classroom-poster.jpg" },
]

export default function VideoCarouselSection() {
  return (
    <section id="videos" className="relative z-10 px-6 py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Video Carousel</h3>
        <Carousel className="w-full">
          <CarouselContent>
            {videos.map((v, idx) => (
              <CarouselItem key={v.title} className="p-2">
                <VideoCard title={v.title} poster={v.poster} idx={idx} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between mt-4">
            <CarouselPrevious className="border border-border text-foreground hover:bg-muted" />
            <CarouselNext className="border border-border text-foreground hover:bg-muted" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

function VideoCard({ title, poster, idx }: { title: string; poster: string; idx: number }) {
  const ref = React.useRef<HTMLVideoElement | null>(null)

  const onPlay = () => ref.current?.play()
  const onPause = () => ref.current?.pause()
  const onMuteToggle = () => {
    if (!ref.current) return
    ref.current.muted = !ref.current.muted
  }
  const onPip = async () => {
    try {
      // @ts-ignore
      if (document.pictureInPictureElement) {
        // @ts-ignore
        await document.exitPictureInPicture()
      } else if (ref.current && "requestPictureInPicture" in ref.current) {
        // @ts-ignore
        await ref.current.requestPictureInPicture()
      }
    } catch {}
  }
  const onFullscreen = async () => {
    try {
      if (!ref.current) return
      if (!document.fullscreenElement) {
        await ref.current.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch {}
  }

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="aspect-video w-full overflow-hidden rounded-md border border-border bg-muted">
        <video
          ref={ref}
          controls
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full h-full"
          aria-label={title}
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>
          <h4 className="text-foreground font-medium text-sm">{title}</h4>
          <p className="text-muted-foreground text-xs">Play, pause, toggle mute, Picture-in-Picture, or fullscreen.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 px-3 text-xs bg-transparent">
            Play
          </Button>
          <Button size="sm" variant="outline" className="h-8 px-3 text-xs bg-transparent" onClick={onPause}>
            Pause
          </Button>
          <Button size="sm" variant="outline" className="h-8 px-3 text-xs bg-transparent" onClick={onMuteToggle}>
            Mute
          </Button>
          <Button size="sm" variant="outline" className="h-8 px-3 text-xs bg-transparent" onClick={onPip}>
            PiP
          </Button>
          <Button size="sm" variant="outline" className="h-8 px-3 text-xs bg-transparent" onClick={onFullscreen}>
            Full
          </Button>
        </div>
      </div>
    </div>
  )
}
