import { events } from '@/utils/dummy-data';

export const getEvents = (page = 0, limit = 3) => new Promise((resolve) => {
  const start = page * limit;
  const end = start + limit;
  const result = events.slice(start, end);
  setTimeout(() => resolve(result), 2000);
});

export const getNextEvents = (limit = 4) => new Promise((resolve) => {
  const result = events
    .filter((event) => event.dateTime.getTime() >= Date.now())
    .slice(0, limit);
  setTimeout(() => resolve(result), 1000);
});

export const getEvent = (id) => new Promise((resolve) => {
  const result = events.find((event) => event.id === id);
  setTimeout(() => resolve(result), 1000);
});

export const getCount = () => new Promise((resolve) => {
  resolve(events.length);
});
