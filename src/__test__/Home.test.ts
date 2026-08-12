import {render, screen, fireEvent} from "@testing-library/react"
//import Home from ""


describe("Home component", () => {
  test("user can select importList and see result", () => {
    const mockCity = "London"
    //render(<Home />)
    const selectedCity = screen.getByTestId("city")
    fireEvent.change(selectedCity, { target: { value: mockCity } })
   
    const checkbox = screen.getByLabelText(mockCity) 
    fireEvent.click(checkbox)
    
    const button = screen.getByText("Submit")
    fireEvent.click(button)

    const result = screen.queryByTestId("result")
    expect(result).toBeInTheDocument()
  })
  
  test("state change", () => {

  })

  test("scoring", () => {

  })

})