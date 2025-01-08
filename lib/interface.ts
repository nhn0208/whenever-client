export interface ProductProps {
    name: string,
    image: string,
    type: string,
    size: string,
    instock: number,
    sold: number,
    price: number,
    _id: string,
    collectionId: string,
    slug: string,
    modelSlug: string,
}

export interface ModelProps {
    name: string,
    description: string,
    image: string[],
    category: string,
    slug: string,
    price: number,
    products: string[]
    _id: string,
}

export interface CartProps {
    customerId: string,
    productId: string,
    quantity: number,
    _id: string,
}

export interface ClerkAuthProviderProps {
    user: string | null,
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
}