/* ─────────────────────────────────────────────────────────────
   Cenário da Acrópole ao entardecer — 100% SVG + CSS, sem imagens.
   Fundo da SectionBenefit.

   Composição (coordenadas do viewBox 1440×900):
     · a viga (entablamento) fica ACIMA dos cards
     · a colunata corre ATRÁS deles
     · os degraus aparecem ABAIXO do último card
   Assim nenhuma faixa horizontal cruza as frestas entre os cards.
   ───────────────────────────────────────────────────────────── */

// Colunata: 12 colunas dóricas atravessando a cena, de forma que sobrem
// colunas visíveis dos dois lados da coluna de texto
const TEMPLE_COLS = Array.from({ length: 12 }, (_, i) => 170 + i * 95.8)

// Poeira em suspensão (valores fixos p/ não divergir na hidratação)
const DUST = [
  { left: '6%',  top: '72%', delay: '0s',   duration: '13s', size: 3 },
  { left: '14%', top: '58%', delay: '2.6s', duration: '16s', size: 2 },
  { left: '23%', top: '81%', delay: '5.1s', duration: '12s', size: 3 },
  { left: '31%', top: '46%', delay: '1.2s', duration: '18s', size: 2 },
  { left: '39%', top: '77%', delay: '7.4s', duration: '14s', size: 3 },
  { left: '47%', top: '63%', delay: '3.8s', duration: '17s', size: 2 },
  { left: '55%', top: '85%', delay: '6.2s', duration: '12s', size: 3 },
  { left: '63%', top: '52%', delay: '0.7s', duration: '19s', size: 2 },
  { left: '71%', top: '74%', delay: '4.5s', duration: '15s', size: 3 },
  { left: '79%', top: '61%', delay: '8.1s', duration: '13s', size: 2 },
  { left: '87%', top: '83%', delay: '2.1s', duration: '16s', size: 3 },
  { left: '94%', top: '55%', delay: '5.9s', duration: '14s', size: 2 },
]

export default function GreekBackdrop() {
  return (
    <>
      <div className="greek-backdrop" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Céu do entardecer */}
            <linearGradient id="gbSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#050710" />
              <stop offset="22%"  stopColor="#0e1424" />
              <stop offset="40%"  stopColor="#2c2335" />
              <stop offset="56%"  stopColor="#5e3934" />
              <stop offset="70%"  stopColor="#a1602c" />
              <stop offset="84%"  stopColor="#d68d34" />
              <stop offset="100%" stopColor="#78401a" />
            </linearGradient>

            {/* Halo do sol poente */}
            <radialGradient id="gbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#ffdc94" stopOpacity="0.9" />
              <stop offset="34%"  stopColor="#f0c96b" stopOpacity="0.44" />
              <stop offset="68%"  stopColor="#c9953a" stopOpacity="0.17" />
              <stop offset="100%" stopColor="#c9953a" stopOpacity="0" />
            </radialGradient>

            {/* Raios de luz */}
            <linearGradient id="gbRay" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%"   stopColor="#ffdc94" stopOpacity="0.55" />
              <stop offset="55%"  stopColor="#c9953a" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#c9953a" stopOpacity="0" />
            </linearGradient>

            {/* Chão de pedra */}
            <linearGradient id="gbGround" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#2b1f18" />
              <stop offset="35%"  stopColor="#120f10" />
              <stop offset="100%" stopColor="#060608" />
            </linearGradient>

            {/* Névoa quente no horizonte */}
            <linearGradient id="gbHaze" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#f0c96b" stopOpacity="0" />
              <stop offset="65%"  stopColor="#f0c96b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f0c96b" stopOpacity="0" />
            </linearGradient>

            <filter id="gbSoft" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="26" />
            </filter>
            <filter id="gbSofter" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="9" />
            </filter>
          </defs>

          {/* ── Céu ── */}
          <rect width="1440" height="900" fill="url(#gbSky)" />

          {/* ── Sol poente ── */}
          <ellipse cx="720" cy="762" rx="800" ry="420" fill="url(#gbGlow)" />
          <ellipse cx="720" cy="766" rx="360" ry="130" fill="#f0c96b" opacity="0.45" filter="url(#gbSoft)" />
          <circle  cx="720" cy="772" r="66" fill="#ffeec4" opacity="0.9" filter="url(#gbSofter)" />

          {/* ── Raios ── */}
          <g filter="url(#gbSoft)">
            <path d="M720 772 L 400 -140 L 470 -140 Z" fill="url(#gbRay)" />
            <path d="M720 772 L 552 -140 L 640 -140 Z" fill="url(#gbRay)" opacity="0.7" />
            <path d="M720 772 L 700 -140 L 772 -140 Z" fill="url(#gbRay)" opacity="0.55" />
            <path d="M720 772 L 838 -140 L 916 -140 Z" fill="url(#gbRay)" opacity="0.7" />
            <path d="M720 772 L 990 -140 L 1078 -140 Z" fill="url(#gbRay)" />
          </g>

          {/* ── Montanhas da Ática ── */}
          <path
            d="M0 726 L170 664 L296 708 L432 630 L562 698 L700 652 L822 712 L980 644 L1122 704 L1284 668 L1440 722 L1440 880 L0 880 Z"
            fill="#2a1d26" opacity="0.9"
          />
          <path
            d="M0 764 L214 728 L398 760 L618 716 L898 764 L1152 730 L1440 768 L1440 890 L0 890 Z"
            fill="#170f18"
          />

          {/* ── Névoa ── */}
          <rect x="0" y="630" width="1440" height="250" fill="url(#gbHaze)" />

          {/* ── Templo: colunata monumental em contraluz ── */}
          <g>
            {/* Entablamento — passa acima dos cards */}
            <rect x="118" y="205" width="1204" height="25" fill="#0a0b11" />
            <rect x="118" y="227" width="1204" height="3" fill="#f0c96b" opacity="0.42" />
            <rect x="140" y="230" width="1160" height="30" fill="#07080e" />
            <rect x="140" y="257" width="1160" height="2" fill="#f0c96b" opacity="0.24" />

            {/* Colunata — corre atrás dos cards */}
            {TEMPLE_COLS.map((x, i) => (
              <g key={i}>
                <rect x={x - 9} y="259" width="64" height="16" fill="#07080e" />
                <rect x={x} y="275" width="46" height="525" fill="#08090f" />
                <rect x={x} y="275" width="3" height="525" fill="#ffd98a" opacity="0.34" />
                <rect x={x + 43} y="275" width="3" height="525" fill="#ffd98a" opacity="0.18" />
              </g>
            ))}

            {/* Última luz batendo no piso de mármore */}
            <ellipse cx="720" cy="792" rx="600" ry="46" fill="#ffcf82" opacity="0.34" filter="url(#gbSoft)" />

            {/* Estilóbata — aparece abaixo do último card */}
            <rect x="150" y="800" width="1140" height="15" fill="#0e0c14" />
            <rect x="150" y="800" width="1140" height="2.5" fill="#ffd98a" opacity="0.55" />
            <rect x="132" y="815" width="1176" height="16" fill="#0a0810" />
            <rect x="132" y="815" width="1176" height="2" fill="#ffd98a" opacity="0.34" />
            <rect x="114" y="831" width="1212" height="16" fill="#06050a" />
            <rect x="114" y="831" width="1212" height="2.5" fill="#f0c96b" opacity="0.32" />
          </g>

          {/* ── Chão ── */}
          <rect x="0" y="846" width="1440" height="54" fill="url(#gbGround)" />

          {/* ── Poeira luminosa (estática) ── */}
          <g fill="#f0c96b" opacity="0.45" filter="url(#gbSofter)">
            <circle cx="300" cy="470" r="2.6" />
            <circle cx="1140" cy="420" r="2.2" />
            <circle cx="250" cy="640" r="2.2" />
            <circle cx="1200" cy="600" r="2.6" />
          </g>
        </svg>
      </div>

      {/* Colunas em primeiro plano — enquadram o conteúdo (CSS, sempre
          coladas nas bordas independentemente da altura da seção) */}
      <div className="greek-col greek-col-l" aria-hidden="true">
        <span className="greek-col-cap" />
        <span className="greek-col-base" />
      </div>
      <div className="greek-col greek-col-r" aria-hidden="true">
        <span className="greek-col-cap" />
        <span className="greek-col-base" />
      </div>

      {/* Véu central: rebaixa o contraste atrás dos cards para a colunata
          não "piscar" nas frestas, sem apagar as laterais iluminadas */}
      <div className="greek-veil" aria-hidden="true" />

      {/* Véu escuro — garante a legibilidade do texto sobre a cena */}
      <div className="greek-scrim" aria-hidden="true" />

      {/* Poeira animada */}
      <div className="greek-dust" aria-hidden="true">
        {DUST.map((d, i) => (
          <i
            key={i}
            style={{
              left: d.left,
              top: d.top,
              width: d.size,
              height: d.size,
              animationDelay: d.delay,
              animationDuration: d.duration,
            }}
          />
        ))}
      </div>
    </>
  )
}
