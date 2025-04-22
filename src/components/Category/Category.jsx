import { Link } from 'react-router-dom';
import useCategory from '../../Hooks/useCategory';

export default function Category() {
  const { data, isLoading, isError, error } = useCategory();
console.log(data);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (isError) {
    return <div className="error-message">{error.message}</div>;
  }

  return (
    <div className="row">
      {data?.data?.data?.length > 0 ? (
        data.data.data.map((product) => (
          <div key={product._id} className="w-1/2 md:w-1/3   p-4">
            <div className="product p-2 border hover:border hover:border-lime-700 hover:border-spacing-px  border-gray-300 rounded-lg shadow-md">

              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </Link>
              <div className="p-2">
                <h3 className="font-semibold text-xl">{product.name}</h3>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
}
