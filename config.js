//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94764038114";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "ture";
global.wlcm = process.env.WELCOME || "ture";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lmRXZjdjBTV0x0T2Z2dUU3MXV3OE9laXFteTZUZ0RPVGlKQnVQdlExdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3o4dGtlN2NnT094NnRkTEZoWFloNWwxQWpYSWVtekZrai9sRFhhaHlpWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLT3Vic2ltMzhEeDJyLzE5UWdrMVUzZzYzKzZkOEJtMUtZUkNtMHhiemxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGbEFQL3BaU0s4eGRNbFUvbnNieXFqT3RjTjBmZk9rL0NtS1ordm5wRkZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVHOFR3WDg5NUl1NTNlR0tMN0pHaEk5QlhtSWNIUG1keWcrMWkwbHg1VnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVIQVA1bTZOY1k3WnZoY0g2bExJUlpNM0ZNdk5YMk5yK1RUZDBuK1FDblk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RudXU3WEppSFVlRm5YWXpwYVFkNkNpbXQ1NERmU2xUUHh5eVg0Wm5XTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFN2d3U1akhkc3YvcERMTDZjemJpYzdqM3JMTHQyQXh0YU5rVWpsSmtCRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ1MlZyeG9zUlhBSFNOVlhwY042TG10RlhiU09iczJKcVVvVUpSTnJ6NFNLeitiZEVuMUp0OWFBVmVHa0E5SGJnUlZQOWtVS1VwMnkzc2p5N0h2dWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJxa3hUU2xFb3p6bjZ3T2N1Wks0Qk1SbW9yK2g2dG5xZEErdXI0UjEvYkRNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1aWxXYXdOaVRlMlZOUDJ0R0l4N3F3IiwicGhvbmVJZCI6Ijc2ODk5NDhhLTA1YmItNGFiOC1hMmRiLTYyZjUyNmYwNzA1ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJycDg1NXFyV1paSkcxMWNidzlwYlN6VGVQT2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSy94cU9Xa29HZUQwL2srRlJ4U1pPZUp4SGlnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE1UVM0NlREIiwibWUiOnsiaWQiOiI5NDc2NDAzODExNDo4OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtL/htKzhtLbhtKzhtL7htKzhtLfLouG0tOG0rFxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxuKPCdkIDwnZCD8J2QjPCdkIjwnZCNKSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUdkNEx3Q0VOTFF4YlVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoialAyZ25nRGdnWTFua01nNUdwY1krN0hhRXM4VWZnb0gwL0VQbi84NnVuQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRlBzQmI5YVJTV25FMm8xNVFCZThFbzFNbHJMdzcxaitnVHZONFlia2NNVTlKUmtGQ1RSeVlDVnJaZTkzcXV3VDJPN3NmWlNJVnZJc1pOVlhOcUxkQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjVMTFRza2I5Ni9JN2RmMjMwZ0V1VE00R2FXL21WYVB3Y21DNGVRd2VWeVBJYUorT0p0TGhLUzl5VjNubzd5ZDc5ZSsxamU2aFJ3c3FMdTNjMHFDbWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjQwMzgxMTQ6ODhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXo5b0o0QTRJR05aNURJT1JxWEdQdXgyaExQRkg0S0I5UHhENS8vT3JwdyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjkwMjYyNH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ADEEHACKE`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
