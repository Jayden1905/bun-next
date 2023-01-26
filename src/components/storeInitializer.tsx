'use client'
import { useStore } from '@/store/store'
import { useRef } from 'react'

type StoreInitializerProps = {
  count: number
}

export default function StoreInitializer({ count }: StoreInitializerProps) {
  const initialized = useRef(false)
  if (!initialized.current) {
    useStore.setState({ count })
    initialized.current = true
  }

  return null
}
