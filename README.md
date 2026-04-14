# Bhavesh Jethava — Portfolio

A personal developer portfolio built with **Next.js 15**, showcasing projects, skills, and a fully functional contact form with email delivery via [Resend](https://resend.com).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS, Framer Motion |
| UI Components | shadcn/ui (Radix UI) |
| Icons | React Icons |
| Email | Resend |
| Font | JetBrains Mono |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — intro, photo, stats |
| `/about` | Skills, experience & education |
| `/projects` | Paginated project grid with stack tags |
| `/contact` | Contact form with validation & email |

---

## Features

- Animated page transitions with Framer Motion
- Projects grid with pagination (6 per page) and collapsible stack tags (`+N more` / `Less`)
- Contact form with client-side field validation (required, email format, phone format)
- Email delivery via Resend — styled dark-themed HTML email template matching the site
- API route (`/api/contact`) handles server-side validation and email sending
- Responsive layout across mobile, tablet and desktop

---

## Project Structure

```
app/
├── page.jsx              # Home
├── about/                # About page
├── projects/             # Projects grid
├── contact/              # Contact form
└── api/contact/          # Email API route

components/               # Shared UI components
lib/
├── utils.js              # cn() utility
└── mailer.js             # Resend email config & template (git-ignored)
public/assets/            # Project screenshots & images
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
EMAIL_TO=your@email.com
```

- Get a free API key at [resend.com](https://resend.com)
- `EMAIL_TO` is the address that receives contact form submissions

> `.env.local` and `lib/mailer.js` are git-ignored to keep credentials out of version control.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

Deploy on [Vercel](https://vercel.com) with zero config — just add the environment variables (`RESEND_API_KEY`, `EMAIL_TO`) in the Vercel project settings.

```bash
npm run build
```
