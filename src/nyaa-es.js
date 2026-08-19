import { createNyaaSource } from './nyaa-core.js'

// Nyaa's non-English category (1_3) hosts the Spanish anime fansub scene
// (One Fansub, CameEsp, WZF, Z-A, Ari-M, ...). Releases there are consistently
// tagged with a Spanish marker ("[Sub. Español]", "[ESP-ENG]", "Sub_Esp",
// "Castellano", "Latino", ...). We deliberately do NOT put "Español" in the
// query — that would miss every release tagged only with "[ESP]". Instead we
// query the core title + episode in 1_3 and keep only Spanish-marked results.
const SPANISH_RE = /\bespa[ñn]ol\b|\bspanish\b|\bcastellano\b|\bsubtitulado\b|\bsub\.?\s*(?:esp|es)\b|\besp\b|\bspa\b|\blatino\b|\bhispan(o|a)\b/i

export default createNyaaSource({
  category: '1_3',
  resultFilter: title => SPANISH_RE.test(title)
})