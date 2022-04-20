import classes from './ProductList.module.scss';
import ProductItem from '../ProductItem/ProductItem';

interface ProductListProps {
    collections: any,
}

const ProductList = ({collections}:ProductListProps) => {


    return (
        <>
            {collections.map((item: any, index: number) => <ProductItem item={item} index={index} key={index}/>)}
        </>
    )
}

export default ProductList;