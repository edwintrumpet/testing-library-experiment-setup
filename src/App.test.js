import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {server, rest} from './utils/testServer'

describe('hola', () => {
  let button
  beforeAll(() => {
    server.use(rest.get("https://rickandmortyapi.com/api/character/2", (req, res, ctx) => res(
      ctx.status(200),
      ctx.json({name: 'Pedro Perez'})
    )))
  })
  beforeEach(() => {
    render(<App />);
    button = screen.getByTestId('get-rick');
  })

  test('renders learn react link', async () => {
    expect(button).toBeEnabled()
    fireEvent.click(button)
    expect(button).toBeDisabled()
    const response = await screen.findByText('Pedro Perez')
    expect(response).toBeInTheDocument()
  });
  
  test('error', async () => {
    server.use(rest.get("https://rickandmortyapi.com/api/character/2", (req, res, ctx) => res(
      ctx.status(401),
      ctx.json({name: 'Pedro Perez'})
    )))
    expect(button).toBeEnabled()
    fireEvent.click(button)
    expect(button).toBeDisabled()
    const response = await screen.findByText('Hubo un error')
    expect(response).toBeInTheDocument()
})
});
