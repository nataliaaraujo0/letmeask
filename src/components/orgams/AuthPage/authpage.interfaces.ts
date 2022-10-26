import { ReactElement } from "react";

export type ExistingRoomProps = {
  title: string;
  subtitle: string;
};
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
  aside?: AsideProps;
  buttonGoogleAuthentication?: ReactElement;
  separetor?: ReactElement;
  form?: FormProps;
  nameButtonSubmit?: string;
  onClickAuthentication?: () => void;
  onClickSubmit: (event: any) => void;
  navigateToNewRoom?: () => void;
  onSubmitForm: (event: any) => void;
  onChange: (event: any) => void;
  existingroom?: ExistingRoomProps;
  value: string;
}
