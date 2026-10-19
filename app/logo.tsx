export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 292 56"
      className={className}
      role="img"
      aria-label="Agence 139, location et vente immobilières"
    >
      <polyline
        points="6,30 32,4 58,30"
        fill="none"
        stroke="#C20C2F"
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <g fill="#241C18">
        <rect x="22" y="34" width="7" height="7" />
        <rect x="32" y="34" width="7" height="7" />
        <rect x="22" y="44" width="7" height="7" />
        <rect x="32" y="44" width="7" height="7" />
      </g>
      <text
        x="74"
        y="30"
        fill="#241C18"
        fontFamily="inherit"
        fontSize="18"
        fontWeight="600"
        letterSpacing="0.4"
      >
        AGENCE 139
      </text>
      <text
        x="74"
        y="46"
        fill="#241C18"
        fontFamily="inherit"
        fontSize="11"
      >
        Location & vente immobilières
      </text>
    </svg>
  );
}
