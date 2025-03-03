import pkg from '@whiskeysockets/baileys'; const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => { const hadiths = [ { text: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى...", narrator: "عمر بن الخطاب" }, { text: "من حسن إسلام المرء تركه ما لا يعنيه.", narrator: "أبو هريرة" }, { text: "الدين النصيحة، قلنا لمن يا رسول الله؟ قال: لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم.", narrator: "تميم الداري" }, { text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.", narrator: "أنس بن مالك" }, { text: "من كان يؤمن بالله واليوم الآخر فليقل خيرًا أو ليصمت.", narrator: "أبو هريرة" }, { text: "الكلمة الطيبة صدقة.", narrator: "أبو هريرة" }, { text: "اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن.", narrator: "أبو ذر الغفاري" }, { text: "إن الله كتب الإحسان على كل شيء...", narrator: "أبو يعلى شداد بن أوس" }, { text: "من لا يَرحم لا يُرحم.", narrator: "جابر بن عبد الله" }, { text: "المسلم من سلم المسلمون من لسانه ويده.", narrator: "عبد الله بن عمرو" }, { text: "يسروا ولا تعسروا، وبشروا ولا تنفروا.", narrator: "أنس بن مالك" }, { text: "إن أحب الكلام إلى الله سبحان الله وبحمده.", narrator: "أبو ذر الغفاري" }, { text: "لا تغضب.", narrator: "أبو هريرة" }, { text: "سددوا وقاربوا وأبشروا.", narrator: "عبد الله بن عباس" }, { text: "اللهم إني أعوذ بك من الهم والحزن.", narrator: "أنس بن مالك" }, { text: "إن الله جميل يحب الجمال.", narrator: "عبد الله بن مسعود" }, { text: "الراحمون يرحمهم الرحمن.", narrator: "عبد الله بن عمرو" }, { text: "خير الناس أنفعهم للناس.", narrator: "جابر بن عبد الله" }, { text: "من تواضع لله رفعه.", narrator: "أبو هريرة" }, { text: "قل آمنت بالله ثم استقم.", narrator: "سفيان بن عبد الله" }, { text: "المؤمن مرآة أخيه.", narrator: "أبو هريرة" }, { text: "الدعاء هو العبادة.", narrator: "النعمان بن بشير" }, { text: "خيركم من تعلم القرآن وعلمه.", narrator: "عثمان بن عفان" }, { text: "الطهور شطر الإيمان.", narrator: "أبو مالك الأشعري" }, { text: "من غشنا فليس منا.", narrator: "أبو هريرة" }, { text: "تبسمك في وجه أخيك صدقة.", narrator: "عبد الله بن الحارث" }, { text: "صنائع المعروف تقي مصارع السوء.", narrator: "أنس بن مالك" }, { text: "من ستر مسلمًا ستره الله في الدنيا والآخرة.", narrator: "أبو هريرة" }, { text: "الرفق لا يكون في شيء إلا زانه.", narrator: "عائشة رضي الله عنها" }, { text: "ازهد في الدنيا يحبك الله.", narrator: "سهل بن سعد" }, { text: "المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف.", narrator: "أبو هريرة" }, { text: "من لا يشكر الناس لا يشكر الله.", narrator: "أبو هريرة" }, { text: "استغفروا ربكم إنه كان غفارا.", narrator: "أنس بن مالك" }, { text: "إذا أحب الله عبدًا نادى جبريل.", narrator: "أبو هريرة" }, { text: "خير الأعمال أدومها وإن قل.", narrator: "عائشة رضي الله عنها" }, { text: "من سلك طريقًا يلتمس فيه علمًا سهل الله له طريقًا إلى الجنة.", narrator: "أبو هريرة" } ];

const randomHadith = hadiths[Math.floor(Math.random() * hadiths.length)];
const imageUrl = 'https://files.catbox.moe/a9eayg.jpg';

let z4ck = 'https://whatsapp.com/channel/0029Vb0WYOu2f3EAb74gf02h';

let media = await prepareWAMessageMedia({ image: { url: imageUrl } }, { upload: conn.waUploadToServer });

let Mori = '📖';
m.react(Mori);

conn.relayMessage(m.chat, {
    viewOnceMessage: {
        message: {
            interactiveMessage: {
                body: { text: `📖 *حــديــث نـبـوي شــريــف* 📖\n\n➤ *الــحــديــث:* "${randomHadith.text}"\n➤ *الــراوي:* ${randomHadith.narrator}` },
                footer: { text: '💡 اضغط الزر للحصول على حديث آخر' },
                header: { hasMediaAttachment: true, ...media },
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: "quick_reply",
                            buttonParamsJson: JSON.stringify({
                                display_text: "حــديــث اخــر 🔰",
                                id: ".حديث"
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

handler.command = /^حديث$/i;

export default handler;