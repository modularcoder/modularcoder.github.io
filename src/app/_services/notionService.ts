import { Client } from '@notionhq/client'
export { type PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

if (!process.env.NOTION_TOKEN) {
  throw new Error('NOTION_TOKEN env variable is not set')
}

// Initializing a client
const client = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const query = (options: {}) => {
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID env variable is not set')
  }

  return client.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    ...options,
  })
}

export default client
