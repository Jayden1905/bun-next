'use client'
import { useStore } from '@/store/store'

export const IncreaseCount = () => {
  const { count } = useStore()
  const increaseCount = useStore((state) => state.increment)

  return (
    <>
      <h1>Client: {count}</h1>
      <button onClick={() => increaseCount(2)}>Increase Count</button>
    </>
  )
}
