import tasks from "./Todo/data/tasks";
import type { ITask } from "./Todo/data/tasks";

const lastVisitTimeKey = "last-visit-time";
const dayInMilliSeconds = 24 * 60 * 60 * 1000;

const lastVisitDate = () => {
  const persistedDate = window.localStorage.getItem(lastVisitTimeKey);
  return new Date(persistedDate ?? 0);
};

const dailyResetDate = (ref: Date) => {
  const date = new Date(ref);
  date.setUTCHours(7, 0, 0, 0);
  return date;
};

const weeklyResetDate = (ref: Date) => {
  const date = new Date();
  const thursday = 4; // quinta feira é o 4º dia da semana;
  const currentDay = date.getUTCDay();
  const turnInMillis = (thursday - currentDay) * dayInMilliSeconds;
  date.setUTCMilliseconds(date.getUTCMilliseconds() + turnInMillis);
  return date;
};

const shouldResetDaily = () => {
  const now = new Date();
  const lastVisit = lastVisitDate();
  return lastVisit < dailyResetDate(now) && now > dailyResetDate(lastVisit);
};

const shouldResetWeekly = () => {
  const now = new Date();
  const lastVisit = lastVisitDate();
  return lastVisit < weeklyResetDate(now) && now > weeklyResetDate(lastVisit);
};

const reset = (tasksToReset: ITask[]) => {
  tasksToReset.forEach(({ title }) => {
    const key = `${title.toLocaleLowerCase().split(" ").join("-")}-checkbox`;
    window.localStorage.removeItem(key);
  });
};

const resetDaily = (force = false) => {
  return force
    ? reset(tasks.dailies)
    : shouldResetDaily() && reset(tasks.dailies);
};

const resetWeekly = (force = false) => {
  return force
    ? reset(tasks.weeklies)
    : shouldResetWeekly() && reset(tasks.weeklies);
};

const updateLastVisit = () => {
  window.localStorage.setItem(lastVisitTimeKey, new Date().toJSON());
};


export { resetDaily, resetWeekly, updateLastVisit}