import {render, screen} from "@testing-library/react"
import Result from "../components/Result"
import { travelList } from "@/data/city"

describe("test the three possible outcomes of the result component", () => {
  const mockCity = travelList[2]
  const mockSelectedItems = ["Light jacket for cool evenings",
      "Breathable blouses (2 for weekend / 5 for week)",
      "Light trousers (1 for weekend / 2 for week)",
      "Shorts (1 for weekend / 2 for week)",
      "Underwear (3 for weekend / 7 for week)"]

  test("you select all correct items, displays the result", () => {
    render(<Result travel={mockCity} checkedItems={mockSelectedItems} />)
    const showResult = screen.getByLabelText("correct")
    expect(showResult).toBeInTheDocument()
    expect(showResult).toHaveTextContent(/congratulation! You answered all of them correctly./i)
  })
  
  test("shows warning when user selects more than correct items", () => {
    render(<Result travel={mockCity} checkedItems={mockSelectedItems} />)
    const showWarning = screen.getByLabelText("warning")
    expect(showWarning).toBeInTheDocument()
    expect(showWarning).toHaveTextContent(/Warning! You got all the correct answers, but you also selected extra ones. Challenge failed/i)
  })

  test("the user hasn't played yet", () => {
    render(<Result travel={mockCity} checkedItems={null} />)
    const noResult = screen.queryByTestId("result")
    expect(noResult).not.toBeInTheDocument()
   })

})