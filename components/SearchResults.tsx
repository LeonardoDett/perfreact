import { useMemo } from 'react'
import { ProductItem } from './ProductItem'
import { List, AutoSizer, ListRowRenderer } from 'react-virtualized';

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>
  totalPrice: number;
  onAddToWishList: (id: number) => void
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results[index]} onAddToWishList={onAddToWishList} />
      </div>
    );
  }

  return (
    <div>
      <h2>Total Price: {totalPrice} </h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
        );
      })} */}
    </div>
  )
}