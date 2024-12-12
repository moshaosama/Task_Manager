export interface account {
  Title: string;
}
export interface formAccount {
  Label: string;
  Type: string;
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface btnForm {
  BtnValue: string;
  onClick: () => {};
}

export interface Lists {
  statusbar: string;
  data: {
    Title: string;
    id: number;
  }[];
}
