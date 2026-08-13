import {render, screen, fireEvent} from "@testing-library/react"
import PackingList from "../components/PackingList"

describe("the packingList renders correctly", () => {
  const mockCity = {id:6, name:"Tokyo", img:"Tokyo.jpg", allPackLists:["Hat/cap",
    "Shorts (1 for weekend / 3 for week)",
    "Jeans/light pants (1 for weekend / 2 for week)",
    "Underwear (3 for weekend / 7 for week)",
    "Socks (2 for weekend / 5 for week)",] }
  const mockFunction = jest.fn()
  const mockClick = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("renders correct city name", () => {
    render(<PackingList name={mockCity.name} img={mockCity.img} selectedId={mockCity.id} selectedLists={["Hat/cap", "Shorts (1 for weekend / 3 for week)"]} updateFunction={mockFunction} updateClick={mockClick}/>)
    const citiesName = screen.getByText(mockCity.name)
    expect(citiesName).toBeInTheDocument()
  })

  test("renders image with correct src and alt", () => {
    render(<PackingList name={mockCity.name} img={mockCity.img} selectedId={mockCity.id} selectedLists={["Hat/cap", "Shorts (1 for weekend / 3 for week)"]} updateFunction={mockFunction} updateClick={mockClick}/>)
    const cityImg = screen.getByRole("img")
    expect(cityImg.getAttribute("src")).toBe(mockCity.img)
    expect(cityImg.getAttribute("alt")).toBe(mockCity.name)
  })

  test("renders all packing list items", () => {
    render(<PackingList name={mockCity.name} img={mockCity.img} selectedId={mockCity.id} selectedLists={["Hat/cap", "Shorts (1 for weekend / 3 for week)"]} updateFunction={mockFunction} updateClick={mockClick}/>)
    const listItem = screen.getByTestId('list-item')
    expect(listItem).toBeInTheDocument()
    mockCity.allPackLists.forEach(list => {
      const packs = screen.getByText(list)
      expect(packs).toBeInTheDocument()
    })
  })

  test("calls updateClick when submit button is clicked", () => {
    render(<PackingList name={mockCity.name} img={mockCity.img} selectedId={mockCity.id} selectedLists={["Hat/cap", "Shorts (1 for weekend / 3 for week)"]} updateFunction={mockFunction} updateClick={mockClick}/>)
    const button = screen.getByText('Submit')
    fireEvent.click(button)
    expect(mockClick).toHaveBeenCalled()
  })

})