import { memo, useState } from 'react';

import dynamic from 'next/dynamic'; // usar quando for next JS
import { AddProductToWishListProps } from './AddProductToWishList';
// import {lazy} from 'react'; // quando for no react puro (porque não tem server side)

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  //return import('./AddProductToWishList') // quando a função é default
  return import('./AddProductToWishList').then(mod => mod.AddProductToWishList) // quando a função não é default
}, {
  loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {

  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});

