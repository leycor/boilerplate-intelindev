import tw from 'twin.macro'
import styled from '@emotion/styled'

export const MainTitle = tw.p`text-red-600`

export const CustomButton = styled.button( ({isSubmit}:{isSubmit: boolean}) => [
    `bg-black`,
    isSubmit && tw`bg-green-500`,
])

// export const MainTitle = styled.input(({ isRed }) => [
//   `color: black;`,
//   isRed && tw`border-purple-500`,
// ])
