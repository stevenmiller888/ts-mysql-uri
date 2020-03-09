import { parse } from '../'

describe('parse', () => {
  it('parses a MySQL connection uri', () => {
    const config = parse('mysql://root@127.0.0.1:3306/foo')

    expect(config).toMatchObject({
      schema: 'foo',
      scheme: 'mysql',
      username: 'root',
      password: '',
      host: '127.0.0.1',
      port: '3306'
    })
  })
})
