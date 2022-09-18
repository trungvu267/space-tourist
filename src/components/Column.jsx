import React from "react"
import tw from "twin.macro"
const Column = props => {
  return <Col>{props.children}</Col>
}
const Column1 = props => {
  return <Col1>{props.children}</Col1>
}
const Col = tw.div`bg-blue-400`
const Col1 = tw(Col)`bg-purple-400`

export { Column, Column1 }
