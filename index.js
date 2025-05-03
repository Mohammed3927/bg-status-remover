const {
  ActivityType,
} = require("discord.js");

client.once("ready", () => {
  console.log(`bot is ready! ${client.user.tag}!`);
  console.log(`Code by 505_qhtt`);
  console.log(`@discord.gg/aswayz`);

  const statusType = "dnd"; // online = الاخضر | dnd = الاحمر | idle = الاصفر | invisible = غير متصل
  client.user.setPresence({
    status: statusType,
    activities: [
      {
        name: "ASWAYZ Community", // الاسم
        type: ActivityType.Streaming, // streaming | playing | listening
        url: "https:/www.kick.com/mtnews_", // stream link
      },
    ],
  });
});
