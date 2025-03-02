export interface ProductProps {
    name: string,
    image: string,
    type: string,
    size: string,
    instock: number,
    sold: number,
    price: number,
    _id: string,
    modelId: ModelProps,
    slug: string,
}

export interface ModelProps {
    name: string,
    description: string,
    image: string[],
    category: string,
    slug: string,
    price: number,
    products: ProductProps[]
    _id: string,
}

export interface CartProps {
    customerId: string,
    productId: ProductProps,
    quantity: number,
    _id: string,
}

export interface ClerkAuthProviderProps {
    user: string | null,
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface User {
    _id: string,
    username: string,
    role: string
}