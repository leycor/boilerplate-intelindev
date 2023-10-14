import tw from 'twin.macro'
import styled from '@emotion/styled'
export const ContainerPage = tw.div`
flex flex-col gap-2
w-full min-h-screen
`

enum GAP_TYPE {
  none = 'none',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}
interface IGapContainer {
  gap?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
}

export const ContainerFlex = styled.div(({ gap }: IGapContainer) => [
  tw`flex flex-wrap gap-2 w-full`,
  gap === GAP_TYPE.none && tw`gap-0`,
  gap === GAP_TYPE.sm && tw`gap-2`,
  gap === GAP_TYPE.md && tw`gap-3`,
  gap === GAP_TYPE.lg && tw`gap-4`,
  gap === GAP_TYPE.xl && tw`gap-5`,
])

export const ContainerRow = tw(ContainerFlex)`
flex-row
`

export const ContainerColumn = tw(ContainerFlex)`
flex-col
`

export const ContainerRowCenter = tw(ContainerRow)`
justify-center
items-center
`

export const ContainerColumnCenter = tw(ContainerColumn)`
justify-center
items-center
`

export const CustomButton = styled.button(({ isSubmit }: { isSubmit: boolean }) => [
  `bg-black`,
  isSubmit && tw`bg-green-500`,
])
