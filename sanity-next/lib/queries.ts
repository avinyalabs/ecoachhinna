import { createClient, groq } from 'next-sanity'

const client = createClient({
  projectId: 'qzrjpsx5',
  dataset: 'production',
  apiVersion: '2024-01-12',
})

export default async function addContactData() {
  // const result = await client.create()
}
