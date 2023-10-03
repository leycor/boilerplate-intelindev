import { produce } from 'immer'
import { type IDogStore } from './types'
import { useDogStore } from './store'

// Actions
const { setState } = useDogStore

const incrementDog = () => {
  setState(
    produce((state: IDogStore) => {
      ++state.dog.count
    }),
    false,
    'INCREMENT_DOG',
  )
}

export const dogActionStore = {
  incrementDog,
}
