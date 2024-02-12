export function cc(...classes) {
  return classes.filter((c) => typeof c === "string").join(" ");
}
