import React from "react"
import tw from "twin.macro"

const PageName = ({ pageName, pageNumber }) => {
  return (
    <Name>
      <PageNumber>{pageNumber} </PageNumber>
      {pageName}
    </Name>
  )
}
const Name = tw.div`
text-space-white text-base md:text-xl lg:text-4xl font-space-heading text-center md:text-left
`
const PageNumber = tw.span`text-space-secondary font-bold`
export default PageName
