import {render, screen} from "@testing-library/react"
//import Result from ""

describe("test the three possible outcomes of the result component", () => {
  test("displays correct score", () => {
    //render(<Result />)
    const showScore = screen.getByTestId("result")
    expect(showScore).toBeInTheDocument()
    expect(showScore).toHaveTextContent(/congratulation/i)
  })
  
  test("shows warning when user selects more than correct items", () => {
    //render(<Result />)
    const showWarning = screen.getByTestId("result")
    expect(showWarning).toBeInTheDocument()
    expect(showWarning).toHaveTextContent(/you selects more than correct items/i)
  })

  test("the user hasn't played yet", () => {
    //render(<Result  />)
    const noResult = screen.queryByTestId("result")
    expect(noResult).not.toBeInTheDocument()
   })

})