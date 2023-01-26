import { IncreaseCount } from '@/components/increaseCount'
import StoreInitializer from '@/components/storeInitializer'
import { useStore } from '@/store/store'

export default function Home() {
  useStore.setState({ count: 2 })

  return (
    <div>
      <h1>Server: {useStore.getState().count}</h1>
      <StoreInitializer count={useStore.getState().count} />
      <IncreaseCount />
    </div>
  )
}
