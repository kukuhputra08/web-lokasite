export const generateOrderCode = () => {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replaceAll("-", "");
  const randomCode = Math.random().toString(36).substring(2, 6).toUpperCase();

  return `LS-${date}-${randomCode}`;
};