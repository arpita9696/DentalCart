// utils/validators.ts

export const isEmpty = (value: string): string | null => {
  return value.trim() === '' ? 'This field is required.' : null;
};

export const isEmail = (value: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value.trim()) return 'Email is required.';
  return emailRegex.test(value) ? null : 'Invalid email address.';
};

export const isPhoneNumber = (value: string): string | null => {
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!value.trim()) return 'Mobile number is required.';
  return phoneRegex.test(value) ? null : 'Invalid mobile number.';
};

export const isPassword = (value: string): string | null => {
  if (!value.trim()) return 'Password is required.';
  if (value.length < 6) return 'Password must be at least 6 characters.';
  return null;
};

export const isMatching = (value: string, matchWith: string): string | null => {
  return value === matchWith ? null : 'Passwords do not match.';
};
