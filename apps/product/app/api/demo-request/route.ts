import { NextRequest, NextResponse } from 'next/server'

const CONTACT_EMAIL = 'admin@iceepos.com'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, business, phone, businessType } = body

  console.log('[Demo Request]', body)

  // Send email via Resend if API key is configured
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Icee POS <noreply@iceepos.com>',
          to: [CONTACT_EMAIL],
          subject: `Nueva solicitud de demo — ${business}`,
          html: `
            <h2>Nueva solicitud de demo de Icee POS</h2>
            <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
              <tr><td><strong>Nombre:</strong></td><td>${name}</td></tr>
              <tr><td><strong>Negocio:</strong></td><td>${business}</td></tr>
              <tr><td><strong>Teléfono:</strong></td><td>${phone}</td></tr>
              <tr><td><strong>Tipo:</strong></td><td>${businessType}</td></tr>
            </table>
            <p style="margin-top:16px;color:#666">
              Contactar por WhatsApp: <a href="https://wa.me/${phone.replace(/\D/g,'')}">${phone}</a>
            </p>
          `,
        }),
      })
    } catch (err) {
      console.error('[Demo Request] Email error:', err)
    }
  }

  return NextResponse.json({ success: true, message: 'Solicitud recibida' })
}
