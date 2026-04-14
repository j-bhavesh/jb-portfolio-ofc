import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send contact form email via Resend
 * @param {{ firstname: string, lastname: string, email: string, phone: string, message: string }} data
 */
export async function sendContactEmail({ firstname, lastname, email, phone, message }) {
    const html = buildEmailTemplate({ firstname, lastname, email, phone, message });

    await resend.emails.send({
        from: `${firstname} ${lastname} <onboarding@resend.dev>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `New message from ${firstname} ${lastname} — Portfolio`,
        html,
    });
}

function buildEmailTemplate({ firstname, lastname, email, phone, message }) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background-color:#1c1c22;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1c1c22;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#232329;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#58c4dc 0%,#2a9db8 100%);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#1c1c22;font-size:28px;font-weight:800;letter-spacing:1px;">Bhavesh Jethava</h1>
              <p style="margin:6px 0 0;color:#1c1c22;font-size:14px;opacity:0.75;font-weight:500;">Portfolio — New Contact Message</p>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:32px 40px 0;">
              <p style="margin:0;color:rgba(255,255,255,0.55);font-size:14px;line-height:1.6;">
                You have received a new message from your portfolio contact form. Details are below.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:24px 40px 0;">
              <div style="height:1px;background:rgba(255,255,255,0.08);"></div>
            </td>
          </tr>

          <!-- Sender Info Grid -->
          <tr>
            <td style="padding:28px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0 0 4px;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:1px;">First Name</p>
                    <p style="margin:0;color:#ffffff;font-size:16px;font-weight:600;">${firstname}</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0 0 4px;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:1px;">Last Name</p>
                    <p style="margin:0;color:#ffffff;font-size:16px;font-weight:600;">${lastname}</p>
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0 0 4px;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email Address</p>
                    <p style="margin:0;">
                      <a href="mailto:${email}" style="color:#58c4dc;font-size:15px;font-weight:500;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0 0 4px;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:1px;">Phone Number</p>
                    <p style="margin:0;">
                      <a href="tel:${phone}" style="color:#58c4dc;font-size:15px;font-weight:500;text-decoration:none;">${phone}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:rgba(255,255,255,0.08);"></div>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:28px 40px 0;">
              <p style="margin:0 0 12px;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:1px;">Message</p>
              <div style="background:#1c1c22;border-radius:10px;padding:20px 24px;border-left:3px solid #58c4dc;">
                <p style="margin:0;color:rgba(255,255,255,0.85);font-size:15px;line-height:1.75;white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- CTA Reply -->
          <tr>
            <td style="padding:32px 40px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#58c4dc;border-radius:8px;">
                    <a href="mailto:${email}?subject=Re: Your message on Bhavesh's Portfolio"
                       style="display:inline-block;padding:12px 28px;color:#1c1c22;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.5px;">
                      Reply to ${firstname} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:rgba(255,255,255,0.08);"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 32px;text-align:center;">
              <p style="margin:0;color:rgba(255,255,255,0.3);font-size:12px;line-height:1.6;">
                This email was sent from your portfolio contact form at
                <a href="mailto:${email}" style="color:#58c4dc;text-decoration:none;">${email}</a>
              </p>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.2);font-size:11px;">
                © ${new Date().getFullYear()} Bhavesh Jethava — All rights reserved
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;
}
