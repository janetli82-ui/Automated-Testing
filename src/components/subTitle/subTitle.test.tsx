import { render, screen } from '@testing-library/react'
import SubTitle from '.'

describe('subTitle', () => {
  it("<it shows the SubTitle component", () => {
    render(<SubTitle />)
    expect(screen.getByTestId('subtitle')).toBeInTheDocument()
  })
})