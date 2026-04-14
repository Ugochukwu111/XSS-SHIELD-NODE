import sanitizeHtml from "sanitize-html"

const data = "<p>Hello <button>Click me</button><script>alert('XSS');</script></p>";

export function sanitizeData(input) {
  const clean = sanitizeHtml(input, {
    allowedTags: ['button', 'p', 'br'], 
  });
  return clean;
}
const clean = sanitizeData(data);
console.log(clean); 