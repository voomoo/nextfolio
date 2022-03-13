export interface IProject {
    name:   string;
    link:   string;
    type:   string;
    image:  string;
}

export interface ICommonProps {
    heroTitle:    string;
    heroSubtitle: string;
    aboutMe:      string;
    contactMe:    string;
    email:        string;
    cvLink:       string;
    projects:     IProject[];
}


export interface IAboutSection{
    about: string;
    id:    string;
}
