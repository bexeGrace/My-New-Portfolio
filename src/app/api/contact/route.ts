import { NextRequest, NextResponse } from 'next/server';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? 'betsemese@gmail.com';

    if (!apiKey) {
      console.warn('RESEND_API_KEY not set — skipping email send in development.');
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: toEmail,
      subject: `Portfolio contact from ${name.trim()}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${message.trim()}</p>
      `,
      replyTo: email.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
