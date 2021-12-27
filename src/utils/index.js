export function isNumeric(n) {
  return (
    !isNaN(typeof n === "string" ? parseFloat(n) : n) &&
    isFinite(typeof n === "string" ? parseFloat(n) : n)
  );
}
