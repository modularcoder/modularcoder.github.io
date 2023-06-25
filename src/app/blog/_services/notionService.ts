import { Client } from '@notionhq/client'
export { type PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

if (!process.env.NOTION_TOKEN) {
  throw new Error('NOTION_TOKEN env variable is not set')
}

if (!process.env.NOTION_DATABASE_ID) {
  throw new Error('NOTION_DATABASE_ID env variable is not set')
}

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || ''

// Initializing a client
const client = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const queryPosts = (options: {}) => {
  return client.databases.query({
    database_id: NOTION_DATABASE_ID,
    ...options,
  })
}

export const queryPost = async (pageId: string) => {
  const response = await client.pages.retrieve({ page_id: pageId })
  return response
}

export const queryPostBlocks = async (pageId: string) => {
  const response = await client.blocks.children.list({
    block_id: pageId,
    page_size: 100,
  })
  return response
}

export default client
