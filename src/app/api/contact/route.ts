import { NextResponse } from 'next/server'
import { createClient, groq } from 'next-sanity'

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, contact, message } = await req.json()
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion: '2024-01-12',
      token:
        'skCIWopJnCSXRHaPOhiKRSOKiOBYM2wgn0v67DFo6SpdTpalYwfTcb4iIAakaCO6VYa65qPP3X9hM5Y7l4fOpWBjElVrSILxcwUY1wGH7CMxodW0RIZEMvZbwMBtqeHlIfMASVhfZ0KVkrazAHcNQYzeTEYRpWY4dTmNbEHGK56oHGcTpdUD',
      useCdn: true,
    })

    const result = await client.create({
      _type: 'contact-data',
      firstname: firstname,
      lastname: lastname,
      email,
      phonenumber: contact,
      message,
    })
    return NextResponse.json(
      {
        message: 'Success',
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          contact: contact,
          message: message,
        },
      },
      { status: 201 }
    )
  } catch (err) {
    console.log('error in creating ', err)
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 })
  }
}
