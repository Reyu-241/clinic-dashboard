# Clinic Operations Dashboard

Production: https://nextjs-dashboard-topaz-seven-22.vercel.app/

## What it is

Clinic Operations Dashboard is a web app for a small clinic owner to manage patient records, appointments, and treatments. Its dashboard summarizes patient growth and appointment status to help the owner plan clinic capacity and follow-up.

## DEMO LOGIN

- Email: `demo@clinic.example`
- Password: Ask the project maintainer for the current throwaway demo password. Passwords and environment-variable values are not published in this repository.
- Use a dedicated demo account and non-real sample records; do not enter real patient information.

## Entities and the two questions the charts answer

- **Patients** — contact and date-of-birth details for clinic patients.
- **Appointments** — scheduled visits linked to a patient, with booked, done, or no-show status.
- **Treatments** — procedures and fees linked to an appointment.

1. **Is the practice growing?** A bar chart shows new patients per month over the last six months. The clinic owner can use the trend when considering capacity.
2. **What is the status of this month's appointments?** A donut chart shows booked, done, and no-show appointments for the current month. The clinic owner can use the split to decide whether follow-up is needed.

## How to run locally

1. Clone the repository and install dependencies:

   ```bash
   pnpm install
   ```

2. Create `.env.local` with the variable names below. Add values from your own Supabase and Postgres projects; never commit the file.

   ```text
   POSTGRES_URL
   SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
   SUPABASE_SECRET_KEY
   ```

   `SUPABASE_SECRET_KEY` may instead be named `SUPABASE_SERVICE_ROLE_KEY`. These are variable names only; do not use a secret key in a `NEXT_PUBLIC_` variable.

3. Apply the SQL migration files in `supabase/migrations/` to your Supabase project, in filename order.
4. Start the development server and open [http://localhost:3000](http://localhost:3000):

   ```bash
   pnpm dev
   ```

## Demo walkthrough

See [DEMO.md](./DEMO.md) for the five-line presentation script.

## Smoke test

The repository records a production smoke test dated 8 Oct 2026, covering login, patient and appointment CRUD, charts, user data isolation, validation, and sign-out. The current production deployment does not match this working tree, so repeat these checks after redeploying:

- [ ] Signed-out users are redirected from `/dashboard` to login; signing in opens the dashboard.
- [ ] Patients and appointments can be created, edited, and deleted; lists update.
- [ ] Both charts show real rows, the stated questions, and labeled axes or a legend.
- [ ] A second user cannot see the first user's patient or appointment records or open their edit URL.
- [ ] Invalid forms save nothing; unknown URLs show not-found.
- [ ] Signing out returns to login and browser Back does not reveal the dashboard.

## Known limitations and next steps

- The production URL responds, but its landing page does not match this repository's clinic booking page. Redeploy and rerun the production smoke test before presenting the current build.
- Appointment-time conflicts are not prevented, and appointment reminders are not sent automatically.
- Planned next steps: prevent conflicting bookings, add reminder delivery, and add staff roles.

## Security and privacy

Use only fictional demo records. Keep `.env.local` and all secret keys out of source control. The publishable Supabase key is the only Supabase key intended for a `NEXT_PUBLIC_` variable.

## Tech Stack

- **Languages:** TypeScript/TSX for the app, SQL for database migrations, CSS for styling, and JavaScript for some configuration files.
- **Framework and UI:** Next.js 16 (App Router) and React.
- **Styling:** Tailwind CSS, with CSS Modules for the landing page.
- **Database and data access:** Supabase-hosted PostgreSQL, accessed with the Supabase JavaScript client and `postgres`.js.
- **Authentication and validation:** NextAuth credentials authentication, `bcryptjs` password comparison, and Zod input validation.
- **Charts and icons:** Recharts and Heroicons; the appointment-status donut is rendered as SVG.
- **Build and deployment:** pnpm, Turbopack for local development, ESLint, and Vercel.
