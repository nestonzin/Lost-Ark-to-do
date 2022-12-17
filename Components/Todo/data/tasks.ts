export interface ITask {
  title: string;
  icon?: string;
}

const dailies: ITask[] = [
  { title: "Una's Tasks", icon: "/task-icons/una-d.svg" },
  {
    title: "Guardian Raids",
    icon: "/task-icons/guardian-raids.svg",
  },
  { title: "Chaos Dungeon", icon: "/task-icons/chaos-dungeon.svg" },
  { title: "World Boss", icon: "/task-icons/world-boss.svg" },
  { title: "Rapport", icon: "/task-icons/rapport.svg" },
  { title: "Guild Contribution", icon: "/task-icons/guild.svg" },
  { title: "Life Skills", icon: "/task-icons/life-skills.svg" },
  { title: "Stronghold", icon: "/task-icons/stronghold.svg" },
];

const weeklies: ITask[] = [
  { title: "Una's Weekly Tasks", icon: "/task-icons/una-w.svg" },
  { title: "Abyss", icon: "/task-icons/abyss.svg" },
  {
    title: "Bloodstone Exchange",
    icon: "/task-icons/bloodstone-exchange.svg",
  },
  { title: "Raid Challenge", icon: "/task-icons/guardian-raids.svg" },
];

const tasks = { dailies, weeklies };

export default tasks;
