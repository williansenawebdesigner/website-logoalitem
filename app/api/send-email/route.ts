import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, email, servico, assunto, mensagem } = await request.json();

    const data = await resend.emails.send({
      from: 'Logo Ali Tem <delivered@resend.dev>',
      to: ['williansena.webdesigner@gmail.com'],
      subject: `Novo contato: ${assunto}`,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
}
