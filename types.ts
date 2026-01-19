
export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    imageUrl: string;
    videoPreviewUrl: string;
    bio: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}