export interface ICartProvider {
    children: React.ReactNode
}
export interface ICartItem {
    id: string;
    qty: number;
    price: number;
}
export interface ICart {
    cartItems: ICartItem[];
    total: number;
    handleAddItemToCart: (id: string, price: string) => void;
    handleRemoveItemToCart: (id: string, price: string) => void;
}