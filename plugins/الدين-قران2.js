import fetch from 'node-fetch';

const handler = async (m, { conn, args, usedPrefix }) => {
  try {
    if (!args[0]) {
      return m.reply(`❌ *يرجى تحديد رقم السورة للاستماع إليها*\n\n📌 مثال: *${usedPrefix}audio* 1`);
    }

    let surahNumber = Number(args[0]);

    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahNumber}`);
    let json = await res.json();

    if (!json || !json.data || !json.data.recitation || !json.data.recitation.full) {
      return m.reply(`❌ *تعذر العثور على التلاوة لهذه السورة.*`);
    }

    let audioUrl = json.data.recitation.full;

    await conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4', ptt: true }, { quoted: m });

  } catch (error) {
    console.error(error);
    m.reply(`❌ *حدث خطأ أثناء محاولة جلب التلاوة.*`);
  }
};

handler.help = ['audio [رقم_السورة]'];
handler.tags = ['quran', 'اسلام'];
handler.command = ['audio'];
export default handler;