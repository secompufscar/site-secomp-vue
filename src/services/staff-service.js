import { staff } from '@/utils/dummy-data';

// eslint-disable-next-line import/prefer-default-export
export const getStaff = () => new Promise((resolve) => {
  resolve(staff);
});
