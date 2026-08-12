import {render, screen, fireEvent} from "@testing-library/react"
//import PackingList from ""
import { travelList } from "@/data/city"


describe("the packingList renders correctly", () => {
  test("renders correct city name", () => {
    //render(<PackingList />)
    const mockCity = travelList[0]
    const citiesName = screen.getByText(mockCity.name)
    expect(citiesName).toBeInTheDocument()
  })

  test("renders image with correct src and alt", () => {
    const mockCity = travelList[0]
     //render(<PackingList />)
    const cityImg = screen.getByRole("img")
    expect(cityImg.getAttribute("src")).toBe(mockCity.img)
    expect(cityImg.getAttribute("alt")).toBe(mockCity.name)
  })

  test("passes correct props to ListItems", () => {
    const mockCity = travelList[0]
    //render(<PackingList   />)
    const listItems = screen.getByTestId('list-items')
    expect(listItems).toBeInTheDocument()
    mockCity.allPackLists.forEach(list => {
      const packs = screen.getByText(list)
      expect(packs).toBeInTheDocument()
    })
  })

  test("the click function works", () => {
    const mockFunction = jest.fn()
    //render(<PackingList />)
    const button = screen.getByText('Submit')
    fireEvent.click(button)
    expect(mockFunction).toHaveBeenCalled()
  })

})