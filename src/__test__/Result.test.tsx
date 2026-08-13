import {render, screen} from "@testing-library/react"
import Result from ""

describe("test the three possible outcomes of the result component", () => {
  test("displays correct score", () => {
    render(<Result travel={} checkedItems={} />)
    const showScore = screen.getByTestId("result")
    expect(showScore).toBeInTheDocument()
    expect(showScore).toHaveTextContent(/congratulation! You answered all of them correctly./i)
  })
  
  test("shows warning when user selects more than correct items", () => {
    render(<Result travel={} checkedItems={} />)
    const showWarning = screen.getByTestId("result")
    expect(showWarning).toBeInTheDocument()
    expect(showWarning).toHaveTextContent(/Warning! You got all the correct answers, but you also selected extra ones. Challenge failed/i)
  })

  test("the user hasn't played yet", () => {
    render(<Result travel={} checkedItems={} />)
    const noResult = screen.queryByTestId("result")
    expect(noResult).not.toBeInTheDocument()
   })

})