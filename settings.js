/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5haExsL1pOR0FVbFY1V3Q5QVhoWUs4TkVGK0tqM3ZpaHVwcmhXaExWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzM3OE9sQnZ6ZytkanZzK3djVG9ielpCZ3RUazhPUHd2bU9Qck9VRlR6dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTktVeGRSOHBUVzhYQWZ6czdFOVZTWVZ2em1WVm1Lajc0NXllcjJOK1ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3b0RxcWRKNjBDaTRRWG1QZ2lqTTRINEc2NlltdUgyRjJxNG1IZEVYd0Y4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNMFlTR0ZoNTAvZExFSVBiNHpCUG1RMHl6UDlJZHdQaklzUEVDQ2NjbkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im50ZWxEd25oU0IyclRkVHVRVkkzWFNsTlpzaWtZZlZxcCthbHREcHR6VHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxIMXdJTFUvMGRDalhaZG5Qa1JNd1hOU05SU1ZJVXpCM3ZHTnZ2b1IzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWRrZFpJSDJxRHJIc3h3clIwTlY4MFQrSzlUMTNVeGhNSnlvZkQ0czFXQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjA4YUN4MWxZNFUzUmpzMEN2KzBSbkoya09lTEhtWW41bmk4Y3o1N2hFUzFoc1lPNDFuV0pOQko4NWgzQjBmL0IwanUzZGY3QnMwcExSTFRLTm5PMWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6IjBaZ3hjNzJITXRJcXBicEFqNW80Z2QvQWh5U2xwRWFLbU45N0hobGw0bGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im84a201TE5lUk5HT1BxWE5FNnRfd3ciLCJwaG9uZUlkIjoiOTM1NzBjZGUtNjZiMC00MjI1LWIxNWQtMDY0OWMzNWRiMGFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpzZDc2bmd5blJocERDa1EyUytXamdTRHVnOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOQmNTbUltNm9mY2pZZXFxYnVYYXlpRmNJT2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRE5LOUdGVFIiLCJtZSI6eyJpZCI6IjI1NDc5NzY2Njc1MDozM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVBTdkxnSEVMSzB6N29HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUFpRK29YVnQ1eXh6bzNqY0FjL2JVQkFadFp0UGw3ZFhsMTg5cm9SeHpWdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTWhXTmk4K2dlWmJnNWdzcVdueHNSMkR3ckUrL0M2Qk5NV2hGcnJEbEpxdTM4Qlg1YWVwdmh2TTh2Ni8wcGxkQU9OaFl0RFUvaGxUUyswTCtRSkdQQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IlRNRHJmS0J0N0hmeG43M3lYLzFYc1krUFdJK3ZTM2I3ODI2cjN5U2k0NnE0M0pZNk9uc3gySXJJTEhrck9vQzRLdlloTkt5aUc3WFUzMDVvbEJsTml3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk3NjY2NzUwOjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQyVVBxRjFiZWNzYzZONDNBSFAyMUFRR2JXYlQ1ZTNWNWRmUGE2RWNjMWMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM1NDg2MDl9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254797666750";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'Alecky';
const dev = process.env.DEV || '254797666750';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  anticall,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
