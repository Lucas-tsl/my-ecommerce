import { useEffect, useState } from "react";
import product from "@/models/Product";

export default function Home() {
    const [productsInfo, setProductsInfo] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then((response) => response.json())
            .then((json) => setProductsInfo(json));
    }, []);

    //console.log({ productsInfo });
    const categoryNames = [... new Set(productsInfo.map(p => p.category))];

  return (
    <div className="p-5">
      <div>
          {categoryNames.map( categoryName => (
              <div key={categoryName}>
                  {productsInfo.filter(p => p.category === categoryName).map(product => (
                      <div>{product.name}</div>
                  ))}
                  <h2 className="text-2xl capitalize">{categoryName}</h2>
              </div>
          ))}
          <div className="py-4">
          <div className="w-64">
                  <div className="bg-blue-100 p-5 rounded-xl">
                      <img src="/products/iphone.png" alt=""/>
                  </div>
                  <div className="mt-2">
                      <h3 className="font-bold text-lg">Iphone 14 pro</h3>
                  </div>
                  <p className="text-sm mt-1 leading-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, voluptatem.</p>
                  <div className="flex mt-1">
                      <div className="text-2xl font-bold grow">$899</div>
                      <button className="bg-emerald-400  text-white py-1 px-3 rounded-xl">+</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
