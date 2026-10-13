# Clinic Operations Dashboard — Capstone Proposal

## 1. Who it is for

This project is for the owner or administrator of a small clinic who needs one place to manage patient records, appointments, and treatments. Patients can also submit an appointment request from the public booking page without creating an account.

The owner's goal is to keep daily clinic records organized and use simple operational trends to make capacity and follow-up decisions. This is an administrative tool, not a clinical record or diagnostic system.

## 2. Entities and relationships

| Entity | Purpose | Relationship |
|---|---|---|
| Patients | Patient name, contact details, and date of birth | A patient can have multiple appointments |
| Appointments | Scheduled visit time and status (`booked`, `done`, or `no_show`) | Each appointment belongs to a patient |
| Treatments | Procedure and fee recorded for a visit | Each treatment belongs to an appointment |

The dashboard and management pages are intended for the authenticated clinic user and limit clinic records to that user's clinic data. Public visitors can submit an appointment request; they do not get access to the management dashboard.

## 3. The two chart questions

| # | Question | Data and visualization | Who acts on the answer |
|---|---|---|---|
| 1 | Is the practice growing? How many new patients joined each month? | Bar chart of patient registrations by month for the last six months | The clinic owner considers whether the practice needs more capacity |
| 2 | What is the status of this month's appointments? | Donut chart of current-month appointments split into booked, done, and no-show | The clinic owner reviews the no-show share and decides whether follow-up is needed |

Both charts should use live clinic records, show an honest empty state when there is no data, and label their axes or legend.

## 4. Scope

### Included

- Create, view, edit, and delete patient, appointment, and treatment records.
- Link appointments to patients and treatments to appointments.
- Review the dashboard summaries, both charts, upcoming visits, and the tomorrow view.
- Allow a patient to submit an appointment request through the public booking page.
- Require authentication for clinic management and keep one clinic user's records separate from another's.

### Not included in this capstone

- Medical advice, diagnosis, or a full electronic health record.
- Automated appointment confirmations or reminders.
- Prevention of overlapping appointment requests.
- Multiple staff permission levels or support for multiple clinics in one account.

## 5. Current build and changes from the initial dashboard concept

The project has been adapted from the generic Next.js dashboard starter into a clinic workflow. In addition to the patient and appointment lists, the current build includes treatment tracking, a tomorrow view, public appointment requests, and the two clinic-specific charts. The production URL is live, but its current landing page does not yet match this repository's clinic version; that deployment needs to be updated and retested before the demo.
