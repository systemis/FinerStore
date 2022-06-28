export const covertBodyToParams = (
  payload: { [key: string]: string }
): string => {
  let result: string = "";
  Object.keys(payload).map((key) => {
    result += `?${key}=${payload[key]}`;
  })
  return result; 
}