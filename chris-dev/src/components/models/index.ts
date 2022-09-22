export type marketProps = {
  title: string;
  text: string;
  image: string;
  className?: string;
  direction?: boolean;
}; 

export type DataProps = {

  text: string;
  icon?: React.ReactNode;
};

export type MenuProps = {
  link: string;
};



export interface FooterProps {
  firstLinks: Array<{
    link: string;
  }>;
  secondLinks: Array<{
    link: string;
  }>;
}