export interface ProductProps {
    size: string,
    instock: number,
    _id: string,
    modelId: ModelProps,
}

export interface ModelProps {
    name: string,
    description: string,
    image: string[],
    category: string,
    slug: string,
    price: number,
    products: ProductProps[],
    sold: number,
    _id: string,
    createdAt: Date,
    updatedAt: Date,
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