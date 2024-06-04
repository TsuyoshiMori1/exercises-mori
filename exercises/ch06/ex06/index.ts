export function getAllPropertyNames(obj: any): (string | symbol)[] {
  return Reflect.ownKeys(obj);
}
