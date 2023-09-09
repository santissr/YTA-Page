interface SearchSvgI {
  size?: string;
  color?: string;
}

export const SearchSvg = ({ size = "23", color = "#7E8D8A" }: SearchSvgI) => {
  const height: string = String(Number(size) + 1);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={height}
      viewBox="0 0 23 24"
      fill="none"
    >
      <path
        d="M21.5 23L19.5 20.8M11 21.9C12.2476 21.9 13.4829 21.6297 14.6355 21.1045C15.7881 20.5794 16.8354 19.8096 17.7175 18.8393C18.5997 17.8689 19.2994 16.7169 19.7769 15.449C20.2543 14.1812 20.5 12.8223 20.5 11.45C20.5 10.0777 20.2543 8.71881 19.7769 7.45096C19.2994 6.18311 18.5997 5.03111 17.7175 4.06073C16.8354 3.09036 15.7881 2.32062 14.6355 1.79546C13.4829 1.2703 12.2476 1 11 1C8.48044 1 6.06408 2.10098 4.28249 4.06073C2.50089 6.02049 1.5 8.67849 1.5 11.45C1.5 14.2215 2.50089 16.8795 4.28249 18.8393C6.06408 20.799 8.48044 21.9 11 21.9Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
