import { URL } from 'url'

/** Represents MySQL connection parameters */
interface MySQLConnectionConfig {
  /** The default database for the connection */
  schema: string
  /** The user account to use for authentication */
  username: string
  /** The password to use for authentication */
  password: string
  /** The connection protocol to use */
  scheme: string
  /** The host on which the server instance is running */
  host: string
  /** The TCP/IP network port on which the target MySQL server is listening */
  port: string
}

/**
 * Parses a MySQL uri of the format: [scheme://][user[:[password]]@]host[:port][/schema]
 *
 * https://dev.mysql.com/doc/refman/8.0/en/connecting-using-uri-or-key-value-pairs.html
 *
 * @param uri
 */
export function parse(uri: string): MySQLConnectionConfig {
  const url = new URL(uri)

  return {
    schema: url.pathname.replace('/', ''),
    scheme: url.protocol.replace(':', ''),
    username: url.username,
    password: url.password,
    host: url.hostname,
    port: url.port
  }
}
