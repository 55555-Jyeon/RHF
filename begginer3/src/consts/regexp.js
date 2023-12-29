export const REGEXP = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&^#~])[A-Za-z\d@$!%*?&^#~]{8,}$/,
  phone: /^010-\d{4}-\d{4}$/,
};
