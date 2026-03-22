import { useState, useEffect } from "react";
const USEEffect = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (count === 5) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowText(true);
    } else if (count >= 5 && count <= 10) {
      setShowText(false);
    }
  }, [count]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Use effect hook</h1>
      <p>{count}</p>
      <h3>{showText && "My Name is Sayak Mallick"}</h3>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default USEEffect;
