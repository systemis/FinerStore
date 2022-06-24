export const covertBodyToParams = (
  payload: { [key: any]: string }
): string => {
  let result: string = "";
  Object.keys(payload).map((key) => {
    result += `?${key}=${payload[key]}`;
  })
  return result; 
}