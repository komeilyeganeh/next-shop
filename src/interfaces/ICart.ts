export interface ICartProvider {
    children: React.ReactNode
}
export interface ICartItem {
    id: string;
    qty: number;
}
export interface ICart {
    cartItems: ICartItem[];
    total: number;
    handleAddItemToCart: (id: string) => void;
    handleRemoveItemToCart: (id: string) => void;
}