import fs from 'fs';
import fetch from 'node-fetch';
import PhoneNumber from 'awesome-phonenumber';
import { promises } from 'fs';
import { join } from 'path';

let handler = async (m, { conn, taguser, participants, args }) => {
  try {
    //let vn = './Menu2.jpg';
 //غير رابط الصورة لو تبي تغير الصورة
    let Z4ck = 'https://files.catbox.moe/fce2u6.jpg';

//وتغيرها هنا كمان
    let telegraphUrl = 'https://files.catbox.moe/fce2u6.jpg'; 


    let response = await fetch(telegraphUrl);
    if (!response.ok) throw new Error('فشل تحميل صورة من Telegraph');
    let img = await response.buffer();

let taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
conn.sendMessage(m.chat, { react: { text: '🌙', key: m.key } });

let Mori = `
الـسـلام عـلـيـكـم يـا ↞『 @${m.sender.split('@')[0]} 』
*╮┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅*
*┇↞ مـنـور يـا قـلـب مـوري『📍』*
*╯┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅*
*┇↞ رمــضـان كــريــم『🌙』*
*╮┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅*
*┇↞ الـبـوت صـدقـه رمـضـانـيـه『🕋』*
*╯┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅*
*┇↞ اوامــر الــبــوت『📍』╿↶*
*╮┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅*
*┇❐『.اذان』*
*┇❐『.قران』*
*┇❐『.تفسير』*
*┇❐『.حديث』*
*┇❐『.الله』*
*┇❐『.ايات』*
*┇❐『.اذكار』*
*╯┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅*
> © BY MORI-DEV 2025`.trim();
let Moreno = {
    image: { url: Z4ck },
      caption: Mori,
      mentions: [m.sender],
      footer: '' + wm,
      headerType: 4,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution:true,
          mediaType: 1,
          mediaUrl: null,
          title: '𒆜 𝐌𝐨𝐫𝐢 𝐁𝐨𝐭 𒆜',
          body: null,
          thumbnail: img,
          sourceUrl: 'https://whatsapp.com/channel/0029Vb3Hr3tHrDZWUHACwG0W',
        },
      },
    };
conn.sendMessage(m.chat, Moreno, { quoted:m});
} catch (error) {
    console.error(error);
    conn.reply(m.chat, '*خــطــاء فــي إرســال الــقــائــمــة『📍』*', m);
  }
};

handler.help = ['M O R I']
handler.command = /^(اوامر|menu|مهام|الاوامر)$/i;
handler.fail = null;
export default handler;
