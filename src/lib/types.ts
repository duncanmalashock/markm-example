export type Project = {
    order: number;
    name: string;
    slug: string;
    year: number;
    endYear?: number;
    featuredImage?: string;
    featuredVideo?: string;
    colSpan: number;
    colStart: number;
}