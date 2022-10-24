export interface ProductsProps {
    products: number;
    message: string;
}

export interface DisplayProps {
    text: string;
    cssClass: string;
}

export interface MyAppProps {
    name: string,
    age: number
}

export interface MenuVoice {
    key: string,
    text: string,
    url: string
}

export interface MenuProps {
    items: MenuVoice[],
    onItemClicked: (url: string) => void 
}