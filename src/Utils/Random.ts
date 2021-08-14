export function random_enum<T>(enumeration: T): T[keyof T] {
  const enum_values = Object.keys(enumeration).map(n => Number.parseInt(n)).filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
  const random_index = Math.floor(Math.random() * enum_values.length)
  return enum_values[random_index]
}

export function random_number(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}