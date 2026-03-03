import { Client, type QueryConfig } from 'pg'

import { ServiceError } from './errors'
import { serverEnv } from './server-env'

async function query(queryObj: QueryConfig) {
  let client
  try {
    client = await getNewClient()
    return await client.query(queryObj)
  } catch (err) {
    const serviceErrorObject = new ServiceError({
      cause: err,
      message: 'Erro na conexão com o Banco ou na Query',
    })

    throw serviceErrorObject
  } finally {
    client?.end()
  }
}

async function getNewClient() {
  const client = new Client({
    connectionString: serverEnv.DATABASE_URL,
    ssl: getSSLValues(),
  })

  await client.connect()

  return client
}

const database = {
  query,
  getNewClient,
}

function getSSLValues() {
  if (process.env.POSTGRES_CA) return { ca: process.env.POSTGRES_CA }

  return process.env.NODE_ENV === 'production'
}

export default database
