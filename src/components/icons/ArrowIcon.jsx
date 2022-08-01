import { IconProvider } from "./IconProvider";

export const ArrowIcon = ({className}) => {
  return (
    <IconProvider
      stroke="#A7A7A7"
      fill={'#A7A7A7'}
      className={className}
    >
      <path d="M1 1.33334L9.66667 10L1 18.6667" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </IconProvider>
  );
};
