import { produce } from 'immer'
import { type IBearStore } from './types'
import { useBearStore } from './store'

// Actions
const { setState } = useBearStore

const incrementBear = () => {
  setState(
    produce((state: IBearStore) => {
      ++state.bear.count
    }),
    false,
    'INCREMENT_BEAR',
  )
}

export const bearActionStore = {
  incrementBear,
}
