import React from "react"
import tw from "twin.macro"

const MainConcept = ({ page }) => {
  return (
    <Container>
      <Col>Image</Col>
      <Col1>
        <div>dot attend</div>
        <h2>Role</h2>
        <h1>title</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          aliquid ut dicta esse reiciendis tempora amet. Architecto iure
          deleniti porro tempore tenetur consequuntur molestiae laborum quas!
          Doloribus incidunt amet explicabo.
        </p>
        <div>divider</div>
        <div>distance</div>
        <div>travel time</div>
      </Col1>
    </Container>
  )
}
const Container = tw.div`max-w-6xl min-h-screen bg-red-500 grid grid-rows-2`
const Col = tw.div`bg-blue-400`
const Col1 = tw(Col)`bg-purple-400`
export default MainConcept
