import pkg from '@whiskeysockets/baileys'; const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => { const ayat = [ { text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", surah: "البقرة - 153" }, { text: "وَقُولُوا لِلنَّاسِ حُسْنًا", surah: "البقرة - 83" }, { text: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ", surah: "الحجرات - 10" }, { text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", surah: "البقرة - 286" }, { text: "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ", surah: "هود - 115" }, { text: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ", surah: "آل عمران - 159" }, { text: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", surah: "البقرة - 45" }, { text: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِنَ الْمُحْسِنِينَ", surah: "الأعراف - 56" }, { text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", surah: "الشرح - 5" }, { text: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا", surah: "الطلاق - 2" }, { text: "وَعَجِلْتُ إِلَيْكَ رَبِّ لِتَرْضَىٰ", surah: "طه - 84" }, { text: "وَاذْكُرْ رَبَّكَ كَثِيرًا وَسَبِّحْ بِالْعَشِيِّ وَالْإِبْكَارِ", surah: "آل عمران - 41" }, { text: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ", surah: "الأعراف - 156" }, { text: "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ", surah: "البقرة - 182" }, { text: "إِنَّ اللَّهَ يُدَافِعُ عَنِ الَّذِينَ آمَنُوا", surah: "الحج - 38" }, { text: "إِنَّ اللَّهَ لَا يَظْلِمُ النَّاسَ شَيْئًا", surah: "يونس - 44" }, { text: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ", surah: "هود - 88" }, { text: "وَمَا اللَّهُ بِغَافِلٍ عَمَّا تَعْمَلُونَ", surah: "البقرة - 85" }, { text: "وَبَشِّرِ الْمُحْسِنِينَ", surah: "الحج - 37" }, { text: "فَاذْكُرُونِي أَذْكُرْكُمْ", surah: "البقرة - 152" }, { text: "يُحِبُّهُمْ وَيُحِبُّونَهُ", surah: "المائدة - 54" }, { text: "وَتَوَكَّلْ عَلَى اللَّهِ وَكَفَىٰ بِاللَّهِ وَكِيلًا", surah: "الأحزاب - 3" }, { text: "لِلَّهِ الْأَمْرُ مِنْ قَبْلُ وَمِنْ بَعْدُ", surah: "الروم - 4" }, { text: "وَرَفَعْنَا لَكَ ذِكْرَكَ", surah: "الشرح - 4" }, { text: "إِنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", surah: "البقرة - 20" }, { text: "وَمَا أَنْفَقْتُمْ مِنْ شَيْءٍ فَهُوَ يُخْلِفُهُ", surah: "سبأ - 39" } ];

const randomAyah = ayat[Math.floor(Math.random() * ayat.length)];
const imageUrl = 'https://files.catbox.moe/a9eayg.jpg';

let media = await prepareWAMessageMedia({ image: { url: imageUrl } }, { upload: conn.waUploadToServer });

let z4ck = 'https://whatsapp.com/channel/0029Vb0WYOu2f3EAb74gf02h';

let Mori = '📖';
m.react(Mori);

conn.relayMessage(m.chat, {
    viewOnceMessage: {
        message: {
            interactiveMessage: {
                body: { text: `📖 *آيــة قــرآنــيــة* 📖\n\n➤ *الآية:* "${randomAyah.text}"\n➤ *السورة:* ${randomAyah.surah}` },
                footer: { text: '💡 اضغط الزر للحصول على آية أخرى' },
                header: { hasMediaAttachment: true, ...media },
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: "quick_reply",
                            buttonParamsJson: JSON.stringify({
                                display_text: "آيــة أخــرى 📍",
                                id: ".ايات"
                            })
                        },
                        {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "قــنــاتــنــا 🎖️",
                                url: z4ck
                            })
                        }
                    ]
                }
            }
        }
    }
}, {});

};

handler.command = /^ايات$/i;

export default handler;