export default function Emoji({
  label,
  symbol,
}: {
  label: string
  symbol: string
}) {
  return (
    <span
      role="img"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}
