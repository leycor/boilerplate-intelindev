'use client'

import { CircularProgress } from '@nextui-org/react'

const MainLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CircularProgress
        color="primary"
        size="md"
        label="Loading..."
        aria-label="Loading..."
        classNames={{
          indicator: 'stroke-black',
        }}
      />
    </div>
  )
}

export default MainLoader
