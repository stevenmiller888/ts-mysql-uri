# ts-mysql-uri

![Alt Text](https://github.com/stevenmiller888/ts-mysql-uri/workflows/CI/badge.svg)

> Parse a MySQL connection URI.

![Alt Text](https://github.com/stevenmiller888/ts-mysql-uri/raw/master/.github/code.png)

## Installation

```shell
yarn add ts-mysql-uri
# or
npm install ts-mysql-uri
```

## Usage

```typescript
import { parse } from 'ts-mysql-uri'

const config = parse('mysql://root@127.0.0.1:3306/foo')
console.log(config) // { scheme: 'mysql', username: 'root', host: '127.0.0.1', port: '3306', schema: 'foo' }
```

## Related

- [ts-mysql-parser](https://github.com/stevenmiller888/ts-mysql-parser) - A standalone, grammar-complete MySQL parser
- [ts-antlr4-scanner](https://github.com/stevenmiller888/ts-antlr4-scanner) - A scanner for antlr4-based lexers

## License

[MIT](https://tldrlegal.com/license/mit-license)

---

> [stevenmiller888.github.io](https://stevenmiller888.github.io) &nbsp;&middot;&nbsp;
> GitHub [@stevenmiller888](https://github.com/stevenmiller888) &nbsp;&middot;&nbsp;
> Twitter [@stevenmiller888](https://twitter.com/stevenmiller888)
