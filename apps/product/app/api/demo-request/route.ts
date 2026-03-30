import { NextRequest, NextResponse } from 'next/server'

const CONTACT_EMAIL = 'admin@iceepos.com'

export async function POST(request: NextRequest) {
  const body = await request.json()
  // Log submission — wire up an email service (Resend, SendGrid, etc.) to deliver to CONTACT_EMAIL
  console.log(`[Demo Request → ${CONTACT_EMAIL}]`, JSON.stringify(body, null, 2))
  return NextResponse.json({ success: true, message: 'Solicitud recibida' })
}
