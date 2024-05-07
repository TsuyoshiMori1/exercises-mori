export function parseJSON(input: string): {
  success: boolean;
  data?: any;
  error?: string;
} {
  try {
    const data = JSON.parse(input);
    return { success: true, data };
  } catch (ex) {
    return { success: false, error: String(ex) };
  }
}
