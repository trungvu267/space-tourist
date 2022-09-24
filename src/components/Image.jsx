import React from "react"
import { UserContext } from "./Layout"
import { useContext } from "react"
import tw from "twin.macro"

const Image = () => {
  const { tabSelected } = useContext(UserContext)
  return (
    <ImageStyle
      src={
        tabSelected.images.web ||
        tabSelected.images.png ||
        tabSelected.images.portrait
      }
    />
  )
}

export default Image
const ImageStyle = tw.img`object-contain h-[80vh] bg-yellow-400 px-10`
// const Test  =tw.img.attrs(props =>{
//   src:`${props.res ? tabSelected.images.portrait : tabSelected.images.landscape}`
// })
