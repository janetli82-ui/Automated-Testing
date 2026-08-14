import {render, screen, fireEvent} from "@testing-library/react"
import Home from ""


describe("Home component", () => {
  test("user can select city, then select importList and see result", () => {
    const mockCity = "London"
    render(<Home />)
    const selectedCity = screen.getByTestId("city")
    fireEvent.change(selectedCity, { target: { value: mockCity } })
   
    const checkbox = screen.getByLabelText(mockCity) 
    fireEvent.click(checkbox)
    
    const button = screen.getByText("Submit")
    fireEvent.click(button)

    const result = screen.queryByTestId("result")
    expect(result).toBeInTheDocument()
  })
  
  test("state change - displays correct packing list when city selected", () => {
    const mockCity = {name:"London", allPackLists: [
      "Light cotton T-shirts (2 for weekend / 5 for week)",
      "Sneakers (1 pair)",
      "Sandals (1 pair)",
      "Sunscreen SPF 50+",
      "Sunglasses"]}
    render(<Home />)
    const selectedCity = screen.getByTestId("city")  
    fireEvent.change(selectedCity, { target: { value: mockCity.name } })
    expect((selectedCity as HTMLSelectElement).value).toBe(mockCity.name)

    mockCity.allPackLists.forEach(list => {
      const item = screen.getAllByText(list)
      expect(item).toBeInTheDocument()
    })

    const listItems = screen.getAllByRole("list-item") 
    expect(listItems).toHaveLength(mockCity.allPackLists.length)
  })

  test("scoring", () => {
    render(<Home />)

    const selectedCity = screen.getByTestId("city") as HTMLSelectElement
    fireEvent.change(selectedCity, {target: {value: "Paris"}})

    const checkboxes = screen.getAllByRole("checkbox")

    fireEvent.click(checkboxes[0])
    fireEvent.click(checkboxes[1])
    fireEvent.click(checkboxes[2])
    fireEvent.click(checkboxes[3])
    fireEvent.click(checkboxes[4])

    const updatedCheckboxes = screen.getAllByRole("checkbox") as HTMLInputElement[]
    const checkedCount = updatedCheckboxes.filter(cb => cb.checked).length 
    
    expect(checkedCount).toBe(5)
  })

})