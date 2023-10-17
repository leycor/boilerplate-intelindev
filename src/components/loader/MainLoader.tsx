'use client'

import { CircularProgress } from '@nextui-org/react'

const MainLoader = ({ label = 'Loading' }: { label?: string }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CircularProgress
        color="primary"
        size="md"
        label={label}
        aria-label={label}
        classNames={{
          indicator: 'stroke-black',
        }}
      />
    </div>
  )
}

export default MainLoader
