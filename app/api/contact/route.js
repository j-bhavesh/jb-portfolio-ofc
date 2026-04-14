import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(req) {
    const { firstname, lastname, email, phone, message } = await req.json();

    if (!firstname || !lastname || !email || !phone || !message) {
        return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await sendContactEmail({ firstname, lastname, email, phone, message });

    return NextResponse.json({ success: true });
}
