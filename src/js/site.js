/* HUMI site script: EN/FR switch on the home page, and the two quote forms */
const T = {
en:{nav_how:"How it works",nav_parts:"What we source",nav_blog:"Blog",nav_contact:"Contact",nav_cta:"Request a quote",
hero_h1:"Hard-to-find Japanese industrial parts, sourced in Japan.",
hero_p:"Send us a part number. We source it through our supplier network across Japan, send you a quote within one to two business days, and ship it tracked to your plant.",
hero_note:"You pay only after you approve the quote.",
plate_title:"Get a quote",plate_sub:"Free, no obligation",plate_email:"Your email",plate_model:"Model / part number",plate_qty:"Quantity",plate_ship:"Ship to (country)",plate_btn:"Request quote",plate_small:"By sending, you agree to our",plate_more:"Several parts or more details? Use the full form.",
brands_label:"Brands we regularly source",how_h2:"How it works",
s1_t:"Send the part number",s1_d:"Model, quantity, and the condition you'll accept: new, unused, or used.",
s2_t:"We source it in Japan",s2_d:"We locate the part through our supplier network and verify its label and condition.",
s3_t:"You approve the quote",s3_d:"You receive one all-in price covering the part, our fee and shipping. You pay only if you approve.",
s4_t:"We ship to your plant",s4_d:"Packed for industrial parts and shipped tracked by EMS, FedEx or DHL, with photos before dispatch.",
parts_h2:"What we source",c_servo:"Servo motors and drives",c_plc:"PLC and I/O modules",c_vision:"Machine vision cameras and lenses",c_reducer:"Reducers and strain wave gears",c_sensor:"Sensors and safety devices",c_linear:"Linear guides and bearings",
parts_note:"Discontinued models are our specialty. If your machine still runs on it, ask.",
why_h2:"Why maintenance teams use HUMI",
w1_t:"Genuine, from Japan",w1_d:"These brands are made and widely used in Japan, which gives us direct access to genuine parts. We verify every label before quoting.",
w2_t:"Engineers, not just resellers",w2_d:"We come from factory automation and know what a replacement has to match: encoder type, voltage, series.",
w3_t:"English, French, Japanese",w3_d:"We talk to Japanese sellers in Japanese and to you in your language, so no detail gets lost.",
quote_h2:"Request a quote",quote_p:"One request can list several parts. We reply within one to two business days.",form_alt:"Prefer email? Write to",
f_name:"Name",f_company:"Company",f_email:"Email",f_country:"Country",f_parts:"Part numbers and quantities",f_cond:"Accepted condition",o_any:"Any",o_new:"New or unused only",o_used:"Used is fine (tested preferred)",f_date:"Needed by (optional)",f_notes:"Notes (machine, urgency, link to photos)",f_consent:"I agree to the",f_privacy:"privacy policy",f_submit:"Send request",
sent:"Request sent. We'll reply within one to two business days.",fail:"The request didn't go through. Check your connection, or email us at {email}.",sending:"Sending…",
faq_h2:"Questions",q1:"How do I pay?",a1:"By bank transfer, Wise or PayPal invoice, after you approve the quote. We buy the part only once payment arrives.",
q2:"What does it cost?",a2:"One all-in price: the part, our sourcing fee and shipping. There's no charge if we can't find the part.",
q3:"Are parts tested?",a3:"We state each part's condition plainly: new, unused, or used and untested. When we can test a part, the quote says so.",
q4:"How long does shipping take?",a4:"Usually 3 to 7 days by EMS, FedEx or DHL once the part reaches us. Import duties and taxes in your country are paid by the buyer.",
q5:"Can you ship anything?",a5:"No. We follow Japanese export control rules and screen every part. Some items or destinations need approval, and some we decline.",
ct_h2:"Contact",ct_email:"Email",ct_reply:"Response time",ct_reply_v:"Within one to two business days",ct_lang:"Languages",ct_lang_v:"English, French, Japanese",ct_loc:"Location",ct_loc_v:"Fukuoka, Japan",
foot_biz:"HUMI, sole proprietorship, Fukuoka, Japan",foot_disc:"HUMI is an independent supplier. We are not affiliated with or authorized by the manufacturers named on this site; brand names only identify the parts.",
priv_h:"Privacy policy",priv_p:"We use the information you send only to answer your request and complete orders. We don't sell or share it, except with the shipping and payment providers needed to deliver your order. Write to us anytime to correct or delete your data."},
fr:{nav_how:"Fonctionnement",nav_parts:"Pièces",nav_blog:"Blog",nav_contact:"Contact",nav_cta:"Demander un devis",
hero_h1:"Pièces industrielles japonaises introuvables, sourcées au Japon.",
hero_p:"Envoyez-nous une référence. Nous la trouvons grâce à notre réseau de fournisseurs au Japon, vous envoyons un devis sous un à deux jours ouvrés et l'expédions avec suivi jusqu'à votre usine.",
hero_note:"Vous ne payez qu'après avoir validé le devis.",
plate_title:"Obtenir un devis",plate_sub:"Gratuit, sans engagement",plate_email:"Votre e-mail",plate_model:"Référence",plate_qty:"Quantité",plate_ship:"Pays de livraison",plate_btn:"Demander un devis",plate_small:"En envoyant, vous acceptez notre",plate_more:"Plusieurs pièces ou plus de détails ? Utilisez le formulaire complet.",
brands_label:"Marques que nous sourçons régulièrement",how_h2:"Comment ça marche",
s1_t:"Envoyez la référence",s1_d:"Modèle, quantité et état accepté : neuf, jamais utilisé ou d'occasion.",
s2_t:"Nous la trouvons au Japon",s2_d:"Nous localisons la pièce via notre réseau de fournisseurs et vérifions son étiquette et son état.",
s3_t:"Vous validez le devis",s3_d:"Vous recevez un prix unique comprenant la pièce, nos frais et le transport. Vous ne payez que si vous acceptez.",
s4_t:"Nous expédions à votre usine",s4_d:"Emballage adapté aux pièces industrielles, envoi suivi par EMS, FedEx ou DHL, avec photos avant expédition.",
parts_h2:"Ce que nous sourçons",c_servo:"Servomoteurs et variateurs",c_plc:"Automates et modules d'E/S",c_vision:"Caméras et objectifs de vision industrielle",c_reducer:"Réducteurs et réducteurs harmoniques",c_sensor:"Capteurs et dispositifs de sécurité",c_linear:"Guidages linéaires et roulements",
parts_note:"Les modèles qui ne sont plus fabriqués sont notre spécialité. Si votre machine en dépend encore, demandez-nous.",
why_h2:"Pourquoi les équipes de maintenance choisissent HUMI",
w1_t:"Authentique, depuis le Japon",w1_d:"Ces marques sont fabriquées et largement utilisées au Japon, ce qui nous donne un accès direct aux pièces d'origine. Nous vérifions chaque étiquette avant le devis.",
w2_t:"Des ingénieurs, pas seulement des revendeurs",w2_d:"Issus de l'automatisation industrielle, nous savons ce qu'un remplacement doit respecter : type de codeur, tension, série.",
w3_t:"Anglais, français, japonais",w3_d:"Nous parlons japonais avec les vendeurs et votre langue avec vous : aucun détail ne se perd.",
quote_h2:"Demander un devis",quote_p:"Une demande peut contenir plusieurs pièces. Réponse sous un à deux jours ouvrés.",form_alt:"Vous préférez l'e-mail ? Écrivez à",
f_name:"Nom",f_company:"Entreprise",f_email:"E-mail",f_country:"Pays",f_parts:"Références et quantités",f_cond:"État accepté",o_any:"Indifférent",o_new:"Neuf ou jamais utilisé uniquement",o_used:"Occasion acceptée (testée de préférence)",f_date:"Date souhaitée (facultatif)",f_notes:"Remarques (machine, urgence, lien vers des photos)",f_consent:"J'accepte la",f_privacy:"politique de confidentialité",f_submit:"Envoyer la demande",
sent:"Demande envoyée. Réponse sous un à deux jours ouvrés.",fail:"La demande n'est pas partie. Vérifiez votre connexion ou écrivez-nous à {email}.",sending:"Envoi…",
faq_h2:"Questions fréquentes",q1:"Comment payer ?",a1:"Par virement, Wise ou facture PayPal, après validation du devis. Nous n'achetons la pièce qu'une fois le paiement reçu.",
q2:"Combien ça coûte ?",a2:"Un prix tout compris : la pièce, nos frais de sourcing et le transport. Rien à payer si nous ne trouvons pas la pièce.",
q3:"Les pièces sont-elles testées ?",a3:"Nous indiquons clairement l'état : neuf, jamais utilisé, ou d'occasion non testé. Si nous pouvons tester une pièce, le devis le précise.",
q4:"Quel délai de livraison ?",a4:"En général 3 à 7 jours par EMS, FedEx ou DHL une fois la pièce reçue chez nous. Les droits et taxes d'importation sont à la charge de l'acheteur.",
q5:"Pouvez-vous tout expédier ?",a5:"Non. Nous respectons la réglementation japonaise sur le contrôle des exportations et vérifions chaque pièce. Certains articles ou destinations nécessitent une autorisation, d'autres sont refusés.",
ct_h2:"Contact",ct_email:"E-mail",ct_reply:"Délai de réponse",ct_reply_v:"Sous un à deux jours ouvrés",ct_lang:"Langues",ct_lang_v:"Anglais, français, japonais",ct_loc:"Localisation",ct_loc_v:"Fukuoka, Japon",
foot_biz:"HUMI, entreprise individuelle, Fukuoka, Japon",foot_disc:"HUMI est un fournisseur indépendant, sans lien avec les fabricants cités ni autorisation de leur part ; les marques servent uniquement à identifier les pièces.",
priv_h:"Politique de confidentialité",priv_p:"Nous utilisons vos informations uniquement pour répondre à votre demande et exécuter les commandes. Nous ne les vendons ni ne les partageons, sauf avec les transporteurs et prestataires de paiement nécessaires. Écrivez-nous à tout moment pour les corriger ou les supprimer."}
};

const isHome = document.body.dataset.page === "home";
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
let start = "";
try { start = localStorage.getItem("humi-lang") || ""; } catch (e) {}
if (!start) start = (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
setLang(start);
document.querySelectorAll(".yr").forEach(e => e.textContent = new Date().getFullYear());

/* Shared sender for both forms */
async function send(form, statusEl, extra) {
  const failMsg = T[lang].fail.replace("{email}", EMAIL);
  if (form.action.includes("YOUR_FORM_ID")) { statusEl.className = "status err"; statusEl.textContent = failMsg; return; }
  statusEl.className = "status"; statusEl.textContent = T[lang].sending;
  const fd = new FormData(form); if (extra) extra(fd);
  try {
    const r = await fetch(form.action, { method: "POST", body: fd, headers: { Accept: "application/json" } });
    if (!r.ok) throw new Error();
    form.reset(); form.querySelectorAll(".lang-field, #f-lang").forEach(i => i.value = lang);
    statusEl.className = "status ok"; statusEl.textContent = T[lang].sent;
  } catch (err) { statusEl.className = "status err"; statusEl.textContent = failMsg; }
}

const plate = document.getElementById("plate");
if (plate) plate.addEventListener("submit", e => {
  e.preventDefault();
  send(plate, document.getElementById("plate-status"), fd => {
    fd.set("parts", (fd.get("model") || "").trim().toUpperCase() + " × " + (fd.get("qty") || "1"));
  });
});
const full = document.getElementById("quote-form");
if (full) full.addEventListener("submit", e => { e.preventDefault(); send(full, document.getElementById("status")); });
