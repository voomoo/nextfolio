export interface IProject {
    name:   string;
    link:   string;
    type:   string;
    image:  string;
}

export interface IAdminPage {
    heroTitle:    string;
    heroSubtitle: string;
    aboutMe:      string;
    contactMe:    string;
    email:        string;
    cvLink:       string;
}

export interface INewPage {
    title:    string;
    subtitle: string;
    about:    string;
    contact:  string;
    email:    string;
    cv:       string;
    projects: IProject[];
}

export interface IAboutSection{
    about: string;
    id:    string;
}

export interface IAdminControl {
  title:    string;
  subtitle: string;
  about:    string;
  contact:  string;
  email:    string;
  cv:       string;
}