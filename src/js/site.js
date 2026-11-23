/* HUMI site script: EN/FR switch on the home page, and the pilot request form */
const T = {
en:{nav_product:"Product",nav_how:"How it works",nav_research:"Research",nav_blog:"Blog",nav_contact:"Contact",nav_cta:"Request a pilot",
hero_eyebrow:"HUMI Inspect",
hero_h1:"Know which robot training clips are worth keeping.",
hero_p:"HUMI Inspect checks first-person and robot-camera video for the problems that quietly ruin training data: darkness, blur, camera shake, hands out of frame, faces. You get a verdict for every clip, the exact moments that fail, and the sections you can still use.",
hero_cta:"Request a pilot",hero_cta2:"See how it works",hero_note:"Runs on your own servers. Your video never leaves your building.",
mk_title:"Batch report",mk_clips:"clips",mk_usable:"usable",mk_partial:"partly usable",mk_rejected:"rejected",
mk_v_ok:"Usable",mk_v_part:"Partly usable",mk_v_rej:"Rejected",mk_why_hand:"Hands out of frame 0:41–0:52",mk_why_dark:"Too dark 100% of the time",mk_why_shake:"Camera shake 0:07–0:13",
mk_cap:"Illustration of a report. Figures are examples.",
pb_h2:"Bad clips are expensive twice",
pb1_t:"You pay to collect them",pb1_d:"Operators, contributors and robot time are paid for every hour recorded, usable or not.",
pb2_t:"Then they hurt the model",pb2_d:"A dark, shaky or incomplete demonstration teaches the robot the wrong thing. Teams that filter their data get better results from fewer hours.",
pb3_t:"Watching it all doesn't scale",pb3_d:"Reviewing hours of footage by eye is slow and inconsistent. Quality control becomes the bottleneck of the whole data pipeline.",
ck_h2:"What HUMI Inspect checks",
ck1_t:"Light",ck1_d:"Too dark or overexposed, for the whole clip or just a few seconds.",
ck2_t:"Sharpness",ck2_d:"Out-of-focus or smudged footage, ignoring ordinary motion blur from fast hands.",
ck3_t:"Camera shake",ck3_d:"Sustained shaking of a head- or chest-mounted camera.",
ck4_t:"Hands in frame",ck4_d:"How long one or both hands are visible, and when they leave the picture.",
ck5_t:"Faces and privacy",ck5_d:"Flags clips where a face appears, before they reach a customer or a model.",
ck6_t:"File basics",ck6_d:"Length, resolution, frame rate and unreadable files.",
ck_next_t:"In development:",ck_next_d:"task pace, frozen frames, duplicate clips and sensor timing for teleoperation logs.",
how_h2:"How it works",
s1_t:"Install it on your side",s1_d:"HUMI Inspect runs on your own computers or servers. Nothing is uploaded to us.",
s2_t:"Point it at a batch",s2_d:"Drop in a folder of clips. Each one is measured once, a few times per second.",
s3_t:"Set your own limits",s3_d:"Sliders and presets decide what counts as too dark, too blurry or too shaky. Verdicts update instantly.",
s4_t:"Act on the report",s4_d:"Pay for usable clips, send rejects back with the reason, keep the good sections. Export to CSV or JSON.",
why_h2:"Why HUMI Inspect",
w1_t:"Your data stays in Japan",w1_d:"Robot training video is often confidential. HUMI Inspect runs where your data already is, so there is nothing to upload and nothing to approve.",
w2_t:"Your rules, not ours",w2_d:"Every buyer has different standards. You set the limits for each check and save them as your own preset.",
w3_t:"Built from the factory floor",w3_d:"Made by an engineer from manufacturing and machine vision, with support in Japanese, English and French.",
pl_h2:"Request a pilot",pl_p:"We're working with a small number of data-collection teams, robot makers and labs in Japan. Tell us about your data and we'll run HUMI Inspect on a sample batch with you.",
form_alt:"Prefer email? Write to",
f_name:"Name",f_company:"Company or lab",f_email:"Work email",f_type:"Type of data",o_ego:"First-person (egocentric) video",o_teleop:"Teleoperation / robot camera",o_umi:"Handheld gripper (UMI-style)",o_other:"Other or mixed",
f_hours:"Hours collected per month",o_h1:"Under 100",o_h2:"100 to 1,000",o_h3:"More than 1,000",o_h4:"Not sure yet",
f_notes:"How do you check quality today? (optional)",f_consent:"I agree to the",f_privacy:"privacy policy",f_submit:"Request a pilot",
sent:"Thanks, we'll get back to you within one to two business days.",fail:"The request didn't go through. Check your connection, or email us at {email}.",sending:"Sending…",
rs_h2:"Latest research",rs_p:"We track Japan's robotics and physical-AI supply chain with public data, and write about what it means for the people building robots.",art_all:"All articles",
faq_h2:"Questions",
q1:"Is our video uploaded anywhere?",a1:"No. HUMI Inspect is installed on your own machines and processes video there. We never receive your footage unless you choose to share a sample with us.",
q2:"Which formats does it read?",a2:"MP4, MOV, AVI, MKV and WEBM video today. Support for robot logs (MCAP, LeRobot) is in development.",
q3:"Can it tell whether the task was done correctly?",a3:"Not yet. Today it checks whether the footage is usable: light, sharpness, shake, hands and privacy. Task-level checks are on our roadmap, starting with assembly and handling tasks.",
q4:"What does it cost?",a4:"Pilots with early partners are free. After that, a flat yearly license per company with unlimited use, updates and support included.",
q5:"Who is it for?",a5:"Teams that collect or buy robot training data in Japan: data-collection companies, humanoid and robot makers, and research labs.",
ct_h2:"Contact",ct_email:"Email",ct_reply:"Response time",ct_reply_v:"Within one to two business days",ct_lang:"Languages",ct_lang_v:"Japanese, English, French",ct_loc:"Location",ct_loc_v:"Fukuoka, Japan",
nav_inspect:"HUMI Inspect",nav_about:"About",
co_eyebrow:"Humanoid Industries · Fukuoka, Japan",co_h1:"Data infrastructure for physical AI, built in Japan.",
co_lead:"Robots learn from data. HUMI builds the tools that help robot teams collect, check and understand that data, starting with quality control for robot training video.",
co_cta1:"Meet HUMI Inspect",co_cta2:"Read our research",
pp_cap:"Where HUMI fits in a robot data pipeline",pp1_s:"Exploring",pp1_t:"Collect",pp1_d:"Real task data from Japanese workplaces",pp2_s:"Pilots open",pp2_d:"Check every clip before it reaches a model",pp3_s:"Your team",pp3_t:"Train",pp3_d:"Clean data in, better robots out",pp4_d:"public data on Japan's robotics supply chain",
bd_h2:"What we build",bd1_s:"Pilots open",bd1_d:"Quality checks for robot training video. Finds dark, blurry and shaky clips, hands out of frame and faces, and tells you which clips to keep. Runs on your own servers.",bd1_l:"See HUMI Inspect →",
bd2_s:"Published",bd2_d:"Data-driven notes on Japan's robotics and physical-AI supply chain, in Japanese and English.",bd2_l:"Read the research →",
bd3_s:"Exploring",bd3_t:"Data collection in Japan",bd3_d:"Real-world task data from Japanese workplaces, collected with consent. If you need it, we'd like to hear from you.",bd3_l:"Talk to us →",
jp_h2:"Why Japan",jp1_t:"Robots are built from Japanese parts",jp1_d:"Many of the reducers, motors and sensors inside today's robots come from Japan. The industry that makes them is here.",
jp2_t:"Data that has to stay here",jp2_d:"Japanese companies are cautious about sending factory and workplace video abroad. Tools that run locally, with local support, fit how they work.",
jp3_t:"Robots will work in Japanese settings",jp3_d:"Robots sold in Japan need data from Japanese workplaces, tools and language. Today, most training data comes from somewhere else.",
ab_h2:"About HUMI",ab_p1:"HUMI (Humanoid Industries) is an independent company in Fukuoka, Japan. It was founded by an engineer from semiconductor manufacturing and factory automation, who has worked on production lines and machine vision.",
ab_p2:"We build practical tools for the people collecting and using robot training data, and we publish what we learn about Japan's robotics industry. We work in Japanese, English and French.",
ct_pilot:"Want to try HUMI Inspect on your data?",ct_pilot_l:"Request a pilot",
foot_biz:"HUMI (Humanoid Industries), sole proprietorship, Fukuoka, Japan",foot_disc:"Company and product names mentioned on this site belong to their owners and are used only for identification.",
priv_h:"Privacy policy",priv_p:"We use the information you send only to answer your request and run pilots you agree to. We don't sell or share it. Video you share with us for a pilot is used only for that pilot and deleted afterwards on request. Write to us anytime to correct or delete your data."},
fr:{nav_product:"Produit",nav_how:"Fonctionnement",nav_research:"Recherche",nav_blog:"Blog",nav_contact:"Contact",nav_cta:"Demander un pilote",
hero_eyebrow:"HUMI Inspect",
hero_h1:"Sachez quels clips d'entraînement robotique valent la peine d'être gardés.",
hero_p:"HUMI Inspect analyse les vidéos à la première personne et les vidéos de caméras de robots pour repérer ce qui ruine discrètement les données d'entraînement : obscurité, flou, tremblements, mains hors champ, visages. Vous obtenez un verdict pour chaque clip, les moments exacts qui posent problème et les passages encore utilisables.",
hero_cta:"Demander un pilote",hero_cta2:"Voir le fonctionnement",hero_note:"Fonctionne sur vos propres serveurs. Vos vidéos ne quittent jamais vos locaux.",
mk_title:"Rapport de lot",mk_clips:"clips",mk_usable:"utilisables",mk_partial:"partiellement utilisables",mk_rejected:"rejetés",
mk_v_ok:"Utilisable",mk_v_part:"Partiellement utilisable",mk_v_rej:"Rejeté",mk_why_hand:"Mains hors champ 0:41–0:52",mk_why_dark:"Trop sombre 100 % du temps",mk_why_shake:"Caméra tremblante 0:07–0:13",
mk_cap:"Illustration d'un rapport. Les chiffres sont des exemples.",
pb_h2:"Un mauvais clip coûte deux fois",
pb1_t:"Vous payez pour le collecter",pb1_d:"Opérateurs, contributeurs et temps robot sont payés pour chaque heure enregistrée, utilisable ou non.",
pb2_t:"Puis il nuit au modèle",pb2_d:"Une démonstration sombre, tremblante ou incomplète apprend au robot la mauvaise chose. Les équipes qui filtrent leurs données obtiennent de meilleurs résultats avec moins d'heures.",
pb3_t:"Tout regarder ne passe pas à l'échelle",pb3_d:"Revoir des heures de vidéo à l'œil est lent et irrégulier. Le contrôle qualité devient le goulot d'étranglement de toute la chaîne de données.",
ck_h2:"Ce que HUMI Inspect vérifie",
ck1_t:"Lumière",ck1_d:"Trop sombre ou surexposé, sur tout le clip ou seulement quelques secondes.",
ck2_t:"Netteté",ck2_d:"Images floues ou objectif sale, sans confondre avec le flou normal des mains en mouvement.",
ck3_t:"Tremblements",ck3_d:"Tremblements prolongés d'une caméra fixée sur la tête ou la poitrine.",
ck4_t:"Mains dans le cadre",ck4_d:"Combien de temps une ou deux mains sont visibles, et quand elles sortent de l'image.",
ck5_t:"Visages et vie privée",ck5_d:"Signale les clips où un visage apparaît, avant qu'ils n'atteignent un client ou un modèle.",
ck6_t:"Bases du fichier",ck6_d:"Durée, résolution, fréquence d'images et fichiers illisibles.",
ck_next_t:"En développement :",ck_next_d:"rythme de la tâche, images figées, clips en double et synchronisation des capteurs pour la téléopération.",
how_h2:"Comment ça marche",
s1_t:"Installé chez vous",s1_d:"HUMI Inspect fonctionne sur vos propres ordinateurs ou serveurs. Rien ne nous est envoyé.",
s2_t:"Choisissez un lot",s2_d:"Déposez un dossier de clips. Chacun est mesuré une seule fois, plusieurs fois par seconde.",
s3_t:"Fixez vos propres limites",s3_d:"Curseurs et préréglages définissent ce qui est trop sombre, trop flou ou trop tremblant. Les verdicts se mettent à jour instantanément.",
s4_t:"Agissez sur le rapport",s4_d:"Payez les clips utilisables, renvoyez les rejets avec leur motif, gardez les bons passages. Export CSV ou JSON.",
why_h2:"Pourquoi HUMI Inspect",
w1_t:"Vos données restent au Japon",w1_d:"Les vidéos d'entraînement robotique sont souvent confidentielles. HUMI Inspect fonctionne là où se trouvent déjà vos données : rien à envoyer, rien à faire approuver.",
w2_t:"Vos règles, pas les nôtres",w2_d:"Chaque acheteur a ses propres exigences. Vous fixez les limites de chaque contrôle et les enregistrez comme préréglage.",
w3_t:"Né sur le terrain",w3_d:"Conçu par un ingénieur issu de la production industrielle et de la vision industrielle, avec un support en japonais, anglais et français.",
pl_h2:"Demander un pilote",pl_p:"Nous travaillons avec un petit nombre d'équipes de collecte de données, de fabricants de robots et de laboratoires au Japon. Parlez-nous de vos données et nous testerons HUMI Inspect avec vous sur un lot d'exemple.",
form_alt:"Vous préférez l'e-mail ? Écrivez à",
f_name:"Nom",f_company:"Entreprise ou laboratoire",f_email:"E-mail professionnel",f_type:"Type de données",o_ego:"Vidéo à la première personne",o_teleop:"Téléopération / caméra de robot",o_umi:"Pince portative (type UMI)",o_other:"Autre ou mixte",
f_hours:"Heures collectées par mois",o_h1:"Moins de 100",o_h2:"100 à 1 000",o_h3:"Plus de 1 000",o_h4:"Je ne sais pas encore",
f_notes:"Comment vérifiez-vous la qualité aujourd'hui ? (facultatif)",f_consent:"J'accepte la",f_privacy:"politique de confidentialité",f_submit:"Demander un pilote",
sent:"Merci, nous vous répondrons sous un à deux jours ouvrés.",fail:"La demande n'est pas partie. Vérifiez votre connexion ou écrivez-nous à {email}.",sending:"Envoi…",
rs_h2:"Dernières recherches",rs_p:"Nous suivons la chaîne d'approvisionnement de la robotique et de l'IA physique au Japon à partir de données publiques, et expliquons ce que cela change pour ceux qui construisent des robots.",art_all:"Tous les articles (en anglais)",
faq_h2:"Questions fréquentes",
q1:"Nos vidéos sont-elles envoyées quelque part ?",a1:"Non. HUMI Inspect est installé sur vos propres machines et y traite les vidéos. Nous ne recevons jamais vos images, sauf si vous choisissez de nous partager un échantillon.",
q2:"Quels formats sont lus ?",a2:"Les vidéos MP4, MOV, AVI, MKV et WEBM aujourd'hui. La prise en charge des journaux robotiques (MCAP, LeRobot) est en développement.",
q3:"Peut-il dire si la tâche a été bien exécutée ?",a3:"Pas encore. Aujourd'hui, il vérifie si la vidéo est exploitable : lumière, netteté, tremblements, mains et vie privée. Les contrôles au niveau de la tâche sont prévus, en commençant par l'assemblage et la manipulation.",
q4:"Combien ça coûte ?",a4:"Les pilotes avec nos premiers partenaires sont gratuits. Ensuite, une licence annuelle forfaitaire par entreprise, usage illimité, mises à jour et support compris.",
q5:"À qui s'adresse HUMI Inspect ?",a5:"Aux équipes qui collectent ou achètent des données d'entraînement robotique au Japon : sociétés de collecte, fabricants de robots et d'humanoïdes, laboratoires de recherche.",
ct_h2:"Contact",ct_email:"E-mail",ct_reply:"Délai de réponse",ct_reply_v:"Sous un à deux jours ouvrés",ct_lang:"Langues",ct_lang_v:"Japonais, anglais, français",ct_loc:"Localisation",ct_loc_v:"Fukuoka, Japon",
nav_inspect:"HUMI Inspect",nav_about:"À propos",
co_eyebrow:"Humanoid Industries · Fukuoka, Japon",co_h1:"L'infrastructure de données pour l'IA physique, conçue au Japon.",
co_lead:"Les robots apprennent à partir de données. HUMI construit les outils qui aident les équipes robotiques à collecter, vérifier et comprendre ces données, en commençant par le contrôle qualité des vidéos d'entraînement.",
co_cta1:"Découvrir HUMI Inspect",co_cta2:"Lire nos recherches",
pp_cap:"La place de HUMI dans une chaîne de données robotiques",pp1_s:"À l'étude",pp1_t:"Collecter",pp1_d:"Données de tâches réelles issues de lieux de travail japonais",pp2_s:"Pilotes ouverts",pp2_d:"Vérifier chaque clip avant qu'il n'atteigne un modèle",pp3_s:"Votre équipe",pp3_t:"Entraîner",pp3_d:"Des données propres, de meilleurs robots",pp4_d:"données publiques sur la chaîne d'approvisionnement robotique japonaise",
bd_h2:"Ce que nous construisons",bd1_s:"Pilotes ouverts",bd1_d:"Contrôle qualité des vidéos d'entraînement robotique. Repère les clips sombres, flous et tremblants, les mains hors champ et les visages, et indique lesquels garder. Fonctionne sur vos propres serveurs.",bd1_l:"Voir HUMI Inspect →",
bd2_s:"Publié",bd2_d:"Analyses fondées sur les données de la chaîne d'approvisionnement de la robotique et de l'IA physique au Japon, en japonais et en anglais.",bd2_l:"Lire les recherches →",
bd3_s:"À l'étude",bd3_t:"Collecte de données au Japon",bd3_d:"Données de tâches réelles issues de lieux de travail japonais, collectées avec consentement. Si vous en avez besoin, parlons-en.",bd3_l:"Nous contacter →",
jp_h2:"Pourquoi le Japon",jp1_t:"Les robots sont faits de pièces japonaises",jp1_d:"Une grande partie des réducteurs, moteurs et capteurs des robots actuels vient du Japon. L'industrie qui les fabrique est ici.",
jp2_t:"Des données qui doivent rester ici",jp2_d:"Les entreprises japonaises hésitent à envoyer des vidéos d'usines et de lieux de travail à l'étranger. Des outils qui tournent en local, avec un support local, correspondent à leur façon de travailler.",
jp3_t:"Les robots travailleront dans des contextes japonais",jp3_d:"Les robots vendus au Japon ont besoin de données issues de lieux de travail, d'outils et de la langue japonais. Aujourd'hui, la plupart des données d'entraînement viennent d'ailleurs.",
ab_h2:"À propos de HUMI",ab_p1:"HUMI (Humanoid Industries) est une entreprise indépendante basée à Fukuoka, au Japon. Elle a été fondée par un ingénieur issu de la fabrication de semi-conducteurs et de l'automatisation industrielle, qui a travaillé sur des lignes de production et en vision industrielle.",
ab_p2:"Nous construisons des outils pratiques pour ceux qui collectent et utilisent des données d'entraînement robotique, et nous publions ce que nous apprenons sur l'industrie robotique japonaise. Nous travaillons en japonais, anglais et français.",
ct_pilot:"Envie d'essayer HUMI Inspect sur vos données ?",ct_pilot_l:"Demander un pilote",
foot_biz:"HUMI (Humanoid Industries), entreprise individuelle, Fukuoka, Japon",foot_disc:"Les noms d'entreprises et de produits cités sur ce site appartiennent à leurs propriétaires et ne servent qu'à les identifier.",
priv_h:"Politique de confidentialité",priv_p:"Nous utilisons vos informations uniquement pour répondre à votre demande et mener les pilotes que vous acceptez. Nous ne les vendons ni ne les partageons. Les vidéos partagées pour un pilote ne servent qu'à ce pilote et sont supprimées sur demande. Écrivez-nous à tout moment pour corriger ou supprimer vos données."}
};

const isHome = ["home", "inspect"].includes(document.body.dataset.page);
const EMAIL = document.body.dataset.email || "";
let lang = "en";

function setLang(l) {
  if (!T[l]) l = "en";
  lang = l;
  if (isHome) document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = T[l][el.dataset.i18n]; if (v) el.textContent = v; });
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === l ? "true" : "false"));
  document.querySelectorAll(".lang-field, #f-lang").forEach(i => i.value = l);
  try { localStorage.setItem("humi-lang", l); } catch (e) {}
}
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
let start = new URLSearchParams(location.search).get("lang") || "";
if (!T[start]) start = "";
try { if (!start) start = localStorage.getItem("humi-lang") || ""; } catch (e) {}
if (!start) start = (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
if (!document.body.dataset.fixedLang) setLang(start);
document.querySelectorAll(".yr").forEach(e => e.textContent = new Date().getFullYear());

/* Pilot request form (EN/FR home page and the Japanese home page) */
const MSG = { ja: { sent: "ありがとうございます。1〜2営業日以内にご連絡します。", fail: "送信できませんでした。通信状況をご確認いただくか、{email} までメールでご連絡ください。", sending: "送信中…" } };
function msg(key) { return (document.body.dataset.fixedLang === "ja" ? MSG.ja : T[lang])[key]; }

async function send(form, statusEl) {
  const failMsg = msg("fail").replace("{email}", EMAIL);
  if (form.action.includes("YOUR_FORM_ID")) { statusEl.className = "status err"; statusEl.textContent = failMsg; return; }
  statusEl.className = "status"; statusEl.textContent = msg("sending");
  try {
    const r = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
    if (!r.ok) throw new Error();
    form.reset(); form.querySelectorAll(".lang-field, #f-lang").forEach(i => i.value = document.body.dataset.fixedLang || lang);
    statusEl.className = "status ok"; statusEl.textContent = msg("sent");
  } catch (err) { statusEl.className = "status err"; statusEl.textContent = failMsg; }
}
const pilot = document.getElementById("pilot-form");
if (pilot) pilot.addEventListener("submit", e => { e.preventDefault(); send(pilot, document.getElementById("status")); });
