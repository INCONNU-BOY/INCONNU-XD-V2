
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "INCONNU~XD~tNBhEDIa#0_dtpR15ApbDvZkIKJul8yu_P48fVaiiuqez7FIrslU",
  PREFIX: process.env.PREFIX || '.',
   BOT_NAME: process.env.BOT_NAME || "ŁØÑĒ♟️ŴØŁF🐺🧛🏾",
   BOT: process.env.BOT || "hello 👋",
  NEW_CMD: process.env.NEW_CMD || "ᴀᴅᴅᴠᴀʀ\n│ sᴜᴅᴏ\n| inconnu",
  CAPTION: process.env.CAPTION|| "ᴘᴏᴡᴇʀᴇᴅ ʙʏ inconnu boy",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true,
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true,
  ANTI_LEFT: process.env.ANTI_LEFT !== undefined ? process.env.ANTI_LEFT === 'true' : true,
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '💚', // For liking status updates(stories)
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS !== undefined ? process.env.AUTO_REPLY_STATUS === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status Viewed by joel-Md',
  VOICE_CHAT_BOT: process.env.VOICE_CHAT_BOT !== undefined ? process.env.VOICE_CHAT_BOT === 'true' : false,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true,
  ANTILINK: process.env.ANTILINK !== undefined ? process.env.ANTILINK === 'true' : true,
  ANTI_LEFT: process.env.ANTI_LEFT !== undefined ? process.env.ANTI_LEFT === 'true' : true,
  AUTO_STICKER: process.env.AUTO_STICKER !== undefined ? process.env.AUTO_STICKER === 'true' : true,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  /*joel james tech added anti delete cmd*/
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  /*lets add auto bot respond*/
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  /*lets add chat bot mode*/
  CHAT_BOT_MODE: process.env.CHAT_BOT_MODE || "public",
  /*how about Lydia chat bot*/
  LYDEA: process.env.LYDEA !== undefined ? process.env.LYDEA === 'true' : false,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "ŁØÑĒ♟️ŴØŁF🐺🧛🏾",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "17176446093",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "17176446093",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
STICKER_NAME: process.env.STICKER_NAME || "ŁØÑĒ♟️ŴØŁF🐺🧛🏾",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
  case 'menu':
  let menu = `
*📌 Bot Commands Menu*
• *Admin*
  » .ban [number] — Ban a number
  » .kick @user — Remove member from group
  » .tagall — Mention all members
• *Music*
  » .music [song name] — Search track details
  » .play [song or link] — Send audio file
• *Utility*
  » .menu — Show this menu
`;
  m.reply(menu);
  break;
case 'tagall':
  if (!isAdmin) return m.reply("Admins only.");
  let participants = await conn.groupMetadata(m.chat).then(metadata => metadata.participants);
  let mentionText = "🐺 Tagging everyone:\n";
  let mentions = participants.map(u => u.id);
  participants.forEach(u => mentionText += `@${u.id.split('@')[0]}\n`);
  conn.sendMessage(m.chat, { text: mentionText, mentions });
  break;
case 'music':
  if (!text) return m.reply("Please specify a song to search.");
  m.reply("Searching for music...");
  let yts = require('yt-search');
  let result = await yts(text);
  let song = result.videos[0];
  if (!song) return m.reply("No song found.");
  let msg = `🎶 *Title:* ${song.title}\n⏱ *Duration:* ${song.timestamp}\n👀 *Views:* ${song.views}\n📎 *Link:* ${song.url}`;
  conn.sendMessage(m.chat, { text: msg });
  break;
case 'kick':
  if (!isAdmin) return m.reply("Admins only – you must be an admin.");
  if (!isBotAdmin) return m.reply("I need admin rights to kick.");
  if (!m.mentionedJid[0]) return m.reply("Tag someone to kick.");
  await conn.groupParticipantsUpdate(m.chat, [m.mentionedJid[0]], 'remove');
  m.reply("Member has been kicked.");
  break;
case 'ban':
  if (!isOwner) return m.reply("You don't have permission to ban.");
  if (!text) return m.reply("Please provide a number to ban.");
  global.bannedNumbers = global.bannedNumbers || [];
  global.bannedNumbers.push(text.trim());
  m.reply(`Number ${text.trim()} has been banned.`);
  break;


