import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    const azkar = [
        { text: "سبحان الله وبحمده، سبحان الله العظيم." },
        { text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير." },
        { text: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت..." },
        { text: "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه." },
        { text: "اللهم صل وسلم وبارك على نبينا محمد." },
        { text: "اللهم إنك عفو تحب العفو فاعفُ عني." },
        { text: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة." },
        { text: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم." },
        { text: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم." },
        { text: "رضيت بالله ربًا، وبالإسلام دينًا، وبمحمد صلى الله عليه وسلم نبيًا." },
        { text: "اللهم اجعلني لك شاكرًا، لك ذاكرًا، لك راهبًا، لك مطواعًا، إليك مخبتًا، لك أواها منيبًا." },
        { text: "لا حول ولا قوة إلا بالله العلي العظيم." },
        { text: "اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين وقهر الرجال." }
    ];

    const randomZikr = azkar[Math.floor(Math.random() * azkar.length)];
    const imageUrl = 'https://files.catbox.moe/a9eayg.jpg';
    let z4ck = 'https://whatsapp.com/channel/0029Vb0WYOu2f3EAb74gf02h';

    let media = await prepareWAMessageMedia({ image: { url: imageUrl } }, { upload: conn.waUploadToServer });

    let Mori = '📿';
    m.react(Mori);

    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: { text: `📿 *ذِكــر اليـــوم* 📿\n\n➤ *الــذِكــر: "${randomZikr.text}"*` },
                    footer: { text: '💡 اضغط الزر للحصول على ذكر آخر' },
                    header: { hasMediaAttachment: true, ...media },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "ذِكــر آخــر 🔁",
                                    id: ".اذكار"
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "قــنــاتــنــا 📍",
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

handler.command = /^اذكار$/i;

export default handler;