export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, contact, event } = await req.json()
  } catch (err) {
    console.log(err)
  }
}
