import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from '../../components/Home'

describe('Home page', () => {
  it('shows the portfolio welcome heading', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /welcome to my creative workspace/i }),
    ).toBeInTheDocument()
  })

  it('shows the mission statement', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /mission statement/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/accessible single page applications/i),
    ).toBeVisible()
  })
})
