// Korean Word of the Day — word bank.
//
// Shape mirrors exactly what the Resting Screen design renders, so adding a word is
// data-only, never a layout change:
//   ko       Hangul, the hero glyph line
//   roman    Revised Romanization of the whole word (the official Latin form)
//   sound    how it actually SOUNDS — deliberately NOT the same string as `roman`.
//            RR is a transliteration, not a pronunciation guide (감사합니다 romanizes
//            "gamsahamnida" but sounds "kam-sa-ham-ni-da"), and the gap between the two
//            is the useful part for a learner.
//   pos      part of speech, shown after "Means · "
//   meaning  the definition line
//   syl      per-syllable [hangul, roman] — the "Syllables" block
//   ex       [korean, english] — the "In use" block
//
// Rotation is deterministic by date (see index.html): no API, no tokens, no network.
// Index 0 is 설레다 so day one matches the approved mockup exactly.
//
// Keep entries 1–4 syllables where possible. The hero line auto-shrinks past 4 (see
// HERO_SIZE in index.html) but the design breathes best at 2–3.

window.KOREAN_WORDS = [
  { ko: "설레다", roman: "seolleda", sound: "sol-le-da", pos: "verb",
    meaning: "to flutter with excitement; to feel your heart race in anticipation",
    syl: [["설","seol"],["레","le"],["다","da"]],
    ex: ["여행 생각에 마음이 설렌다.", "Just thinking about the trip makes my heart flutter."] },

  { ko: "눈치", roman: "nunchi", sound: "noon-chi", pos: "noun",
    meaning: "the read of a room — sensing what people feel before they say it",
    syl: [["눈","nun"],["치","chi"]],
    ex: ["그는 눈치가 빠르다.", "He is quick to read the room."] },

  { ko: "그리움", roman: "geurium", sound: "keu-ri-um", pos: "noun",
    meaning: "a warm, aching longing for someone or somewhere you miss",
    syl: [["그","geu"],["리","ri"],["움","um"]],
    ex: ["고향에 대한 그리움이 커진다.", "My longing for home keeps growing."] },

  { ko: "정", roman: "jeong", sound: "chong", pos: "noun",
    meaning: "the deep attachment that builds slowly between people over time",
    syl: [["정","jeong"]],
    ex: ["오래 지내다 보니 정이 들었다.", "After so long together, I've grown attached."] },

  { ko: "반갑다", roman: "bangapda", sound: "pan-gap-tta", pos: "adjective",
    meaning: "glad — the gladness of meeting someone",
    syl: [["반","ban"],["갑","gap"],["다","da"]],
    ex: ["만나서 반갑습니다.", "I'm glad to meet you."] },

  { ko: "아쉽다", roman: "aswipda", sound: "a-swip-tta", pos: "adjective",
    meaning: "a small regret; a pity that something ended or fell short",
    syl: [["아","a"],["쉽","swip"],["다","da"]],
    ex: ["벌써 끝나서 아쉽다.", "It's a shame it's over already."] },

  { ko: "노을", roman: "noeul", sound: "no-eul", pos: "noun",
    meaning: "the glow of the sky at sunset",
    syl: [["노","no"],["을","eul"]],
    ex: ["노을이 참 예쁘다.", "The sunset glow is really beautiful."] },

  { ko: "꾸준히", roman: "kkujunhi", sound: "kku-jun-hi", pos: "adverb",
    meaning: "steadily; without dramatic effort, without stopping",
    syl: [["꾸","kku"],["준","jun"],["히","hi"]],
    ex: ["매일 꾸준히 연습한다.", "I practise steadily every day."] },

  { ko: "마음", roman: "maeum", sound: "ma-eum", pos: "noun",
    meaning: "heart and mind together — where feeling and intention live",
    syl: [["마","ma"],["음","eum"]],
    ex: ["마음이 편하다.", "My mind is at ease."] },

  { ko: "햇살", roman: "haetsal", sound: "haet-ssal", pos: "noun",
    meaning: "sunlight falling in rays; the warmth of sun on skin",
    syl: [["햇","haet"],["살","sal"]],
    ex: ["창문으로 햇살이 들어온다.", "Sunlight comes in through the window."] },

  { ko: "새벽", roman: "saebyeok", sound: "sae-byok", pos: "noun",
    meaning: "the small hours — dawn, before the day properly begins",
    syl: [["새","sae"],["벽","byeok"]],
    ex: ["새벽에 일어났다.", "I woke at dawn."] },

  { ko: "함께", roman: "hamkke", sound: "ham-kke", pos: "adverb",
    meaning: "together; alongside one another",
    syl: [["함","ham"],["께","kke"]],
    ex: ["같이 함께 가요.", "Let's go together."] },

  { ko: "천천히", roman: "cheoncheonhi", sound: "chon-chon-hi", pos: "adverb",
    meaning: "slowly; unhurried, at an easy pace",
    syl: [["천","cheon"],["천","cheon"],["히","hi"]],
    ex: ["천천히 말해 주세요.", "Please speak slowly."] },

  { ko: "보람", roman: "boram", sound: "po-ram", pos: "noun",
    meaning: "the sense that effort was worth it — reward felt, not received",
    syl: [["보","bo"],["람","ram"]],
    ex: ["일에 보람을 느낀다.", "I find my work rewarding."] },

  { ko: "웃음", roman: "useum", sound: "u-seum", pos: "noun",
    meaning: "laughter; a smile as it happens",
    syl: [["웃","ut"],["음","eum"]],
    ex: ["웃음이 끊이지 않았다.", "The laughter never stopped."] },

  { ko: "바람", roman: "baram", sound: "pa-ram", pos: "noun",
    meaning: "wind — and, in another sense, a quiet wish",
    syl: [["바","ba"],["람","ram"]],
    ex: ["시원한 바람이 분다.", "A cool wind is blowing."] },

  { ko: "고맙다", roman: "gomapda", sound: "ko-map-tta", pos: "adjective",
    meaning: "thankful — the warm, plain form of gratitude",
    syl: [["고","go"],["맙","map"],["다","da"]],
    ex: ["도와줘서 고맙다.", "Thank you for helping me."] },

  { ko: "시원하다", roman: "siwonhada", sound: "si-won-ha-da", pos: "adjective",
    meaning: "cool and refreshing; also the relief when something clears up",
    syl: [["시","si"],["원","won"],["하","ha"],["다","da"]],
    ex: ["바람이 시원하다.", "The wind is refreshing."] },

  { ko: "궁금하다", roman: "gunggeumhada", sound: "kung-geum-ha-da", pos: "adjective",
    meaning: "curious; wanting to know how something turned out",
    syl: [["궁","gung"],["금","geum"],["하","ha"],["다","da"]],
    ex: ["결과가 궁금하다.", "I'm curious about the result."] },

  { ko: "편안하다", roman: "pyeonanhada", sound: "pyo-nan-ha-da", pos: "adjective",
    meaning: "comfortable; at ease in body and mind",
    syl: [["편","pyeon"],["안","an"],["하","ha"],["다","da"]],
    ex: ["집이 제일 편안하다.", "Home is the most comfortable place."] },

  { ko: "잔잔하다", roman: "janjanhada", sound: "chan-jan-ha-da", pos: "adjective",
    meaning: "calm and still — of water, music, or a mood",
    syl: [["잔","jan"],["잔","jan"],["하","ha"],["다","da"]],
    ex: ["바다가 잔잔하다.", "The sea is calm."] },

  { ko: "든든하다", roman: "deundeunhada", sound: "teun-deun-ha-da", pos: "adjective",
    meaning: "reassuring; the solid feeling of being backed up or well fed",
    syl: [["든","deun"],["든","deun"],["하","ha"],["다","da"]],
    ex: ["네가 있어서 든든하다.", "Having you here is reassuring."] },

  { ko: "기다리다", roman: "gidarida", sound: "ki-da-ri-da", pos: "verb",
    meaning: "to wait; to hold time open for someone",
    syl: [["기","gi"],["다","da"],["리","ri"],["다","da"]],
    ex: ["여기서 기다릴게요.", "I'll wait here."] },

  { ko: "어울리다", roman: "eoullida", sound: "o-ul-li-da", pos: "verb",
    meaning: "to suit, to go well together; also to mix easily with people",
    syl: [["어","eo"],["울","ul"],["리","ri"],["다","da"]],
    ex: ["그 색이 잘 어울린다.", "That colour suits you well."] },
];

// Date pins — a word claimed for ONE specific local calendar date (YYYY-MM-DD), taking
// precedence over the rotation for that day only. Same entry shape as the bank above.
// This exists because an occasion word carries an occasion sentence ("today", "her
// review"): dropping it into the rotation would make it resurface, stale, every N days.
// A pin is a one-day exception, not a bank entry — the rotation is untouched either side.
window.KOREAN_PINS = {
  "2026-07-30": { ko: "자랑스럽다", roman: "jarangseureopda", sound: "cha-rang-seu-rop-tta",
    pos: "adjective",
    meaning: "proud of someone — the warm pride you feel in another person, not in yourself",
    syl: [["자","ja"],["랑","rang"],["스","seu"],["럽","reop"],["다","da"]],
    ex: ["꼰대 같은 상사에도 불구하고, 남편은 라파엘리냐가 무척 자랑스러웠다.",
         "Despite her pain-in-the-ass boss, her husband was so proud of Rafaelinha."] },

  "2026-07-29": { ko: "행운", roman: "haeng-un", sound: "heng-un", pos: "noun",
    meaning: "good luck — fortune that falls your way",
    syl: [["행","haeng"],["운","un"]],
    ex: ["라파엘리냐는 오늘 리뷰에서 행운이 따를 거예요.",
         "Rafaelinha will have good luck on her review today."] },
};
