'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView, useReducedMotion } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  className?: string
}

function parseValue(val: string): { num: number; suffix: string } | null {
  const m = val.match(/^(\d+)(.*)$/)
  if (!m) return null
  return { num: parseInt(m[1], 10), suffix: m[2] }
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const parsed = parseValue(value)
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const targetNum = parsed?.num ?? 0
  const suffix = parsed?.suffix ?? ''
  const count = useMotionValue(prefersReduced ? targetNum : 0)
  const display = useTransform(count, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (!inView || prefersReduced || !parsed) return
    const controls = animate(count, targetNum, {
      duration: 1.5,
      ease: [0.23, 1, 0.32, 1],
    })
    return controls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  if (!parsed) return <span className={className}>{value}</span>

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
