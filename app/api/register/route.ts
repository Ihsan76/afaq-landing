import { google } from "googleapis";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();

    // ① حفظ في Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "ورقة1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, phone ? `'${phone}` : "—", new Date().toLocaleString("ar-JO")]],
      },
    });

    // ② إرسال إشعار بالبريد
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `🎉 تسجيل جديد في أكاديمية آفاق — ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #2563eb;">تسجيل جديد! 🎉</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #666;">الاسم</td>
              <td style="padding: 10px; font-weight: bold;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #666;">البريد</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #666;">الواتساب</td>
              <td style="padding: 10px;">${phone || "لم يُذكر"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; color: #666;">التاريخ</td>
              <td style="padding: 10px;">${new Date().toLocaleString("ar-JO")}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}