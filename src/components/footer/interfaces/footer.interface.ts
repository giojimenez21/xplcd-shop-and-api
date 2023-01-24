export interface ItemFooter {
    title: string;
    items: ItemFooterChildren[];
}

export interface ItemFooterChildren {
    name: string;
    path: string;
    isExternal?: boolean;
}