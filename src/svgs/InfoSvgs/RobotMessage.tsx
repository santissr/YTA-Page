interface RobotMessageI {
  size?: string;
}

export const RobotMessage = ({ size = "204" }) => {
  const height: string = String(Number(size) - 22);

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 204 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="111.738" height="116.049" rx="55.8692" fill="#C2DCDC" />
      <rect
        x="8.99536"
        y="108.768"
        width="30.8567"
        height="32.3171"
        rx="15.4283"
        fill="#EBEDDE"
        stroke="#57332E"
        strokeWidth="7"
      />
      <rect
        x="141.494"
        y="108.134"
        width="30.8567"
        height="32.3171"
        rx="15.4283"
        fill="#EBEDDE"
        stroke="#57332E"
        strokeWidth="7"
      />
      <rect
        x="23.6494"
        y="53.5977"
        width="134.047"
        height="124.902"
        rx="31.5"
        fill="#EBEDDE"
        stroke="#57332E"
        strokeWidth="7"
      />
      <path
        d="M42.5779 122.365C42.5779 114.856 48.6653 108.768 56.1745 108.768C63.6836 108.768 69.771 114.856 69.771 122.365V123.684C69.771 131.193 63.6836 137.281 56.1745 137.281C48.6653 137.281 42.5779 131.193 42.5779 123.684V122.365Z"
        fill="#A9BC5A"
        stroke="#44281F"
        strokeWidth="7"
      />
      <rect
        x="113.406"
        y="108.768"
        width="27.1931"
        height="28.5122"
        rx="13.5966"
        fill="#A9BC5A"
        stroke="#44281F"
        strokeWidth="7"
      />
      <path
        d="M75.7134 149.024L76.324 149.976L79.3769 152.195L83.0405 153.781L84.567 154.415L85.7881 154.732L90.0623 155.049H95.8629L100.748 153.781L104.716 152.195L109.907 149.024"
        stroke="#57332E"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M92.1992 52.0001V29.8049"
        stroke="#57332E"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        width="86.0935"
        height="52"
        transform="translate(109.906 15.2195)"
        fill="white"
      />
      <path
        d="M109.906 16.8709V24.4672V31.403V38.3387V46.9259V53.2011V60.4672V65.7516V68.7241H118.204H123.311H127.779H130.651V75.6599V81.9351V87.2195L147.247 68.7241H161.928H185.864H197.672H199.906V55.5131V46.9259V38.3387V28.4305V15.2195H182.353H165.758H137.034H109.906"
        stroke="#57332E"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M127 35H144.801M127 50H177"
        stroke="#57332E"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
