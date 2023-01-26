import { create } from 'zustand'

type StateProps = {
  count: number
  increment: (amount: number) => void
}

export const useStore = create<StateProps>((set) => ({
  count: 0,
  increment: (amount: number) =>
    set((state) => ({ count: state.count + amount })),
}))
