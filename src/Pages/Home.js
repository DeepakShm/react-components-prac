import Banner from '../Layout/Banner';
import FeatureList from '../Layout/FeatureList';
import ProductList from '../Layout/ProductList';

export const Home = () => {
  return (
    <>
              <Banner />
              <FeatureList />
              <h1 className='text-center' >Product List</h1>
              <ProductList limit='4' />
            </>
  )
}
