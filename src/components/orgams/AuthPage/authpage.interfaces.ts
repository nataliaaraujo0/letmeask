import { ReactElement } from "react";

export type FormProps = {
  name?: string;
  type?: string;
  placeholder?: string;
};
export type AsideProps = {
  id?: number;
  strong?: string;
  paragraph?: string;
};
export interface AuthPageProps {
  illustration?: string;
  asides?: AsideProps[];
  buttonGoogleAuthentication?: ReactElement;
  separetor?: ReactElement;
  forms?: FormProps[];
  nameButtonSubmit?: string;
  onClickAuthentication?: () => void;
  onClickSubmit?: () => void;
}
