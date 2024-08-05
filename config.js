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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU03UEpuZ1g0TGlhWnhhV20wS3YvQ3Y2eGkwanRmSUlUMStrdDBOWEZIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGREMHVVZGtqeE80ei9Rdy9UdDM5VkRPaDZLRGpmeG1nTm95NnM2a1hpbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSGdxWVdjaHFSb08zNnNPSkpseldjaUZXd0RPaVBlczBvcnV1RHhHdldvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBbG0wWmZKTlduMG1oWnhMaUpYZU02amlSUFhPU0JpcHJDUXV6Vm5GcjJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJakxQYnVSbTAycVJtSHo5TlVSaDZUdDJ1RDdtamFRUWhXeEp4dWh5a0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKVHNjWXFxV2FPd3JnbW00YmN5ZllCU1NyUXNob3RtaEpIWFp0ZXY1Vms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0x6bC80MHNqUS9TWUdoU3pxSHhwVVVlNytwMVdiNzQ3eHJDZDdkY2owZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWhhKzgyQkVCUVV2UVMvVFZKbmJMcENqRGpaSVBZajcvbUxSd3pNZ01rMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV1cmtGQmF5UWQyVjErSU14cFlwMURaL3h3MVk0bXBTNDgzLytYa1B4cmxqWllDa0MwalFMNVRqQVVvQUdpcms2TDY1UEdCSlJSU2NxQmZqRzFWNUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiYXNiMG9oVmkzUDlkS0N0bGk5N28yc1huOHN6K0ZJTVdZUzNIRSs2M01wRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLTZPM0JyQTlUWTZwNXUtWF9fX3RBUSIsInBob25lSWQiOiI4MGE4NWNlMy02NzIxLTQzZDEtOTRhNC04MDBkMjQ0Y2NhNGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGdnYWV5NU9SS1lTOHh5V1hQRk9YajA5ckRrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBjTVJoQlVZR1M0UHhjSU82MXFtdjFSVGJFYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJLQldUNVBTTCIsIm1lIjp7ImlkIjoiOTQ3NjQwMzgxMTQ6ODVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bS/4bSs4bS24bSs4bS+4bSs4bS3y6LhtLThtKxcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbijwnZCA8J2Qg/CdkIzwnZCI8J2QjSkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lDZDRMd0NFS09vdzdVR0dCSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpQMmduZ0RnZ1kxbmtNZzVHcGNZKzdIYUVzOFVmZ29IMC9FUG4vODZ1bkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJDdDF2R3JUWlBBYjhtNmxBNndwL0thL00wNGpXVEcwWkMyOEl2VkF0RjZXTzVYMnA2RnlQL1dML2Z1TmdVS0Vhem5BbURKbUFaY01hU3oxKzROaUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIWTNnTk5xdVBDK1o3L0lsUXBkem1IWVI0ZlJ0NnA1M2dxUUFxR1o5Qmd1ZnRCd2JKQkt2SlJvczdaVzNvWFgvUGswZCszYkluWVd0OWFEUVBlZFFBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY0MDM4MTE0Ojg1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQll6OW9KNEE0SUdOWjVESU9ScVhHUHV4MmhMUEZINEtCOVB4RDUvL09ycHcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4NjQ2ODgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSldOIn0="
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
