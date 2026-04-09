import { CartProvider } from '../features/cart/context/CartProvider'
import { ProductProvider } from '../features/products/context/ProductsProvider'

export const AppProviders = ({children}) => {
    return (
        <CartProvider>
            <ProductProvider>
                {children}
            </ProductProvider>
        </CartProvider>
    )
}