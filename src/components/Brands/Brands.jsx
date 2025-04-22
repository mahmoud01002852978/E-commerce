import { Link } from 'react-router-dom';
import useBrand from '../../Hooks/useBrand';

export default function Brands() {
  const { data, isLoading, isError, error } = useBrand();

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
            <div className="product p-2 border border-gray-300 rounded-lg shadow-md">
              {/* يمكن إضافة رابط حول الصورة أو المنتج */}
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </Link>
              {/* يمكن إضافة المزيد من التفاصيل هنا */}
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
