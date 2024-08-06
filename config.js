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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBRRzFqMHhTcUNkK1dBV2YwRkNMWFpXWFBCUUQ3U1dGWUZzT0NoRXdHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXZndjRJMzlQVG1Ea1c1VE01SVI4V0xjaG5GTTBKWGJvWTVoeGtFQmNuOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRS91b2N0M1RWT0tVNW1ZQkpNTjhJeHdMMDlCcCtRYUdWUmpXWGVoQkZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRVG14L1J1MjNjc05zWnRabHVURU1FOTVuL1hSVjBicU5KVFZnZ05iUXljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFWHplelJ1Rm5Ic1hVdUt2MXVndUZ6K2VxWkJwTytkNEZIZ0ZRc201MUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjloWWh2Z0plUmd4L0xYWFNOM2NsMS96YVpXV1lZTTJJOWZqOUtqbTAyenc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkp0dGpPWVIrL002Y3IyZmhaUUZvWlZHMGdUV0tGdUVQc2VYRU5QN0wzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEdLQkV4RHp1UStDaytySUhUbUwvaEZXK3RGd1l4YVZKa0svcDU3MEtEOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVra2E5MTJPRS9Qd2Y3VTFna3NRd0owNXlTWVVDY05TR244bnNhYlNzdm4vZTRacHJZYVJqOEYySDlGbTlWZm05SVFnOGNuOHJJcWM5cUQ4V1diSmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDcsImFkdlNlY3JldEtleSI6IkVOSEd3aDhuRGtpcVEwZUlrSVE4K21HQWJBOUFYUkRQaHhtUVlUVm0xbGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZSVE1jcUlNUjY2LVBrYVFmaTV1NVEiLCJwaG9uZUlkIjoiZjU4Njc5NDctYTQ0Yi00MmM3LWIwMzAtYTIzMjI3OWY0ZjY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZWQ0JialE0QUJUOU5yeU5QYlVGSS9BZUlPYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqZnRwWC8wOTd4RVFJa3pFVVorZGVSYjY5a0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1lTUlEzSDkiLCJtZSI6eyJpZCI6Ijk0NzY0MTEzNzc2OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTm8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvZzBjWUZFTDJDeUxVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNWS1oxd1ZKRHUyV0pDcHZZemhta3RDOTh5SXZFNTZ1Mlp0WkRpbnovRlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlI4TEpjdkZJQ1I0M2hCU0QyVGFFZjRRMDB4N0JabFFUUEUvM3U3R3VEN2pyc3lnVTMyc1gxL0c0RjRTblc5d1BCSnBUcnFXejBIcmZLaEduMk16cERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzRXlVREoyOVRoRnJXa3RDWG9RWTlVZ0hvRmFYRzJ3VjFHcjJvbTh4R1JNcXczSTV2dEhzQkduK2creW85ZWM5RW5IejJtVlhPSTB3azM5NVMwYU5pZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY0MTEzNzc2OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWxTbWRjRlNRN3RsaVFxYjJNNFpwTFF2Zk1pTHhPZXJ0bWJXUTRwOC94ViJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjk0MTc3MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJMVQifQ=="
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
