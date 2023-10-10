'use client'

import { bearActionStore } from '@/store/bear/actions'
import { useBearStore } from '@/store/bear/store'

const page = () => {
  const bear = useBearStore(state => state.bear)
  const bearActions = bearActionStore
  return (
    <div>
      <p>
        {bear.title} - {bear.count}
      </p>
      <button onClick={bearActions.incrementBear} className="p-2 bg-black text-white">
        Increment
      </button>
    </div>
  )
}

export default page
