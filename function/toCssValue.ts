export default function toCssValue(v: number | string) {
  return typeof v === "number" ? v + "px" : v ?? undefined
}
