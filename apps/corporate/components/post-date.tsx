export default function PostDate({ dateString }: {
  dateString: string
}) {
  const date = new Date(dateString)
  const formatted = new Intl.DateTimeFormat('es-ES', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
  return <time dateTime={dateString}>{formatted}</time>
}
