import 'whatwg-fetch'
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(rest.get("*", (req, res, ctx) => res(
  ctx.status(500),
  ctx.json({error: 'Please add request handler'})
)))

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

export {server, rest}