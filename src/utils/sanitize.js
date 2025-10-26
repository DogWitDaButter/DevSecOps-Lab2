export function sanitizeInput(input) {
  // Remove script tags *and their content*
  const noScript = input.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  // Remove any remaining HTML tags
  const noTags = noScript.replace(/<[^>]*>/g, '');
  // Trim extra spaces
  return noTags.trim();
}
