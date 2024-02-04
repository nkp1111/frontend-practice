import Image from 'next/image'
import React from 'react'
import sprinkleImage from "@/public/sprinkle.svg"
import meteorImage from "@/public/meteor.svg"
import colorShapeImage from "@/public/color-shape.svg"
import snowImage from "@/public/snow.svg"
import circuitPrimaryImage from "@/public/circuit-primary.svg"
import curveLineImage from "@/public/curve-line.svg"
import hexagonImage from "@/public/hexagon.svg"

export default function SingleImageBackground({ index }: { index: number }) {
  const bgImages = [sprinkleImage, meteorImage, colorShapeImage, snowImage, circuitPrimaryImage, curveLineImage, hexagonImage]
  return (
    <Image
      src={bgImages[index]}
      alt={"."}
      width={350}
      height={450}
      className='transition-all duration-200 ease-linear'
    />
  )
}
