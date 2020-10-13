import { events } from '@/utils/dummy-data';

export const getEvents = () => new Promise((resolve) => {
  setTimeout(() => resolve(events), 1000);
});

export const getNextEvents = () => new Promise((resolve) => {
  const result = events.filter((event) => event.dateTime.getTime() >= Date.now());
  setTimeout(() => resolve(result), 1000);
});

export const getEvent = (id) => new Promise((resolve) => {
  const result = events.find((event) => event.id === id);
  setTimeout(() => resolve(result), 1000);
});
