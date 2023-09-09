interface MailSvgI {
  size?: string;
  color?: string;
}

export const MailSvg = ({ size = "24", color = "#EBE02A" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
        fill={color}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M3 6.5L12 12L21 6.5" fill={color} />
      <path
        d="M3 6.5L12 12L21 6.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
