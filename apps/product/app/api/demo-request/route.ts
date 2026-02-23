import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log('[Demo Request]', body)
  return NextResponse.json({ success: true, message: 'Solicitud recibida' })
}
