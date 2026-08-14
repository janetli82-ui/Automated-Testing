import {render, screen} from "@testing-library/react"
import Result from "../components/Result"
import { travelList } from "@/data/city"


describe("test the three possible outcomes of the result component", () => {
  const mockCity = travelList[2]
  const mockSelectedItems = ["Stylish summer tops (2 for weekend / 5 for week)",
    "Linen trousers (1 for weekend / 2 for week)",
    "Evening outfit (1 for weekend / 2 for week)",
    "Comfortable heels/flats","Sun hat"]


  test("you select all correct items, displays the result", () => {
    render(<Result travel={mockCity} checkedItems={mockSelectedItems} />)
    mockSelectedItems.forEach(item => {
      if(mockCity.importantList.includes(item)){
        const showResult = screen.getByTestId("result")
        expect(showResult).toBeInTheDocument()
        expect(showResult).toHaveTextContent(/congratulation! You answered all of them correctly/i)
      }
    })
  })
  
  test("you select wrong, displays the result", () => {
    render(<Result travel={mockCity} checkedItems={mockSelectedItems} />)
    mockSelectedItems.forEach(item => {
      if(!mockCity.importantList.includes(item)){
        const showResult = screen.getByTestId("result")
        expect(showResult).toBeInTheDocument()
        expect(showResult).toHaveTextContent(/challenge failed/i)
      }
    })
  })

  test("does not show result when user hasn't played yet", () => {
    render(<Result travel={mockCity} checkedItems={[]} />)
    const noResult = screen.queryByTestId("result")
    expect(noResult).not.toBeInTheDocument()
   })

})