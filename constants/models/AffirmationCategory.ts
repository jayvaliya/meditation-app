export interface AffirmationCategory {
    title: string;
    data: GallaryPrivewData[];
}

export interface GallaryPrivewData {
    id: number;
    text: string;
    image: any;
}