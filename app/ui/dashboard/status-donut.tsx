import type { StatusRow } from '@/app/lib/data'

const STATUS_OPTIONS = [
  { status: 'booked', label: 'Booked', color: '#2563eb' },
  { status: 'done', label: 'Done', color: '#16a34a' },
  { status: 'no_show', label: 'No-show', color: '#dc2626' },
] as const

type AppointmentStatus = (typeof STATUS_OPTIONS)[number]['status']

const RADIUS = 42
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function StatusDonut({ rows }: { rows: StatusRow[] }) {
  const totals = rows.reduce<Record<AppointmentStatus, number>>(
    (counts, row) => {
      counts[row.status] += row.total
      return counts
    },
    { booked: 0, done: 0, no_show: 0 },
  )
  const total = Object.values(totals).reduce((sum, count) => sum + count, 0)

  if (total === 0) {
    return <p className="text-sm text-gray-500">No appointments yet. Add one to see the split.</p>
  }

  const noShow = totals.no_show

  return (
    <div>
      <div className="flex justify-center py-4">
        <svg
          viewBox="0 0 100 100"
          className="h-56 w-56"
          role="img"
          aria-label={STATUS_OPTIONS.map(
            (option) => `${option.label}: ${totals[option.status]} appointments`,
          ).join(', ')}
        >
          <g transform="rotate(-90 50 50)">
            {STATUS_OPTIONS.map((option, index) => {
              const count = totals[option.status]
              const sliceLength = (count / total) * CIRCUMFERENCE
              const sliceOffset = STATUS_OPTIONS.slice(0, index).reduce(
                (sum, previous) => sum + (totals[previous.status] / total) * CIRCUMFERENCE,
                0,
              )

              return (
                <circle
                  key={option.status}
                  cx="50"
                  cy="50"
                  r={RADIUS}
                  fill="none"
                  stroke={option.color}
                  strokeWidth="16"
                  strokeDasharray={`${sliceLength} ${CIRCUMFERENCE - sliceLength}`}
                  strokeDashoffset={-sliceOffset}
                >
                  <title>{`${option.label}: ${count} (${Math.round((count / total) * 100)}%)`}</title>
                </circle>
              )
            })}
          </g>
          <text x="50" y="48" textAnchor="middle" className="fill-gray-900 text-[12px] font-semibold">
            {total}
          </text>
          <text x="50" y="59" textAnchor="middle" className="fill-gray-500 text-[5px]">
            appointments
          </text>
        </svg>
      </div>
      <ul className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm sm:grid-cols-3">
        {STATUS_OPTIONS.map((option) => {
          const count = totals[option.status]
          return (
            <li key={option.status} className="flex items-center gap-2">
              <span
                className="h-3 w-3 shrink-0 rounded-sm"
                style={{ backgroundColor: option.color }}
                aria-hidden="true"
              />
              <span>
                {option.label}: {count} ({Math.round((count / total) * 100)}%)
              </span>
            </li>
          )
        })}
      </ul>
      <p className="text-sm">
        {Math.round((noShow / total) * 100)}% of all {total} appointments were no-shows.
        The owner decides whether to send reminder messages.
      </p>
    </div>
  )
}
