import React, { useState, useEffect } from 'react';

interface Car {
  id: number;
  name: string;
  year: number;
  price: number;
  type: string;
  image: string;
}

function App() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="container mx-auto p-6 font-sans">
      <header className="bg-slate-900 text-white p-8 rounded-2xl mb-10 shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-4">معرض السيارات الفاخرة</h1>
        <p className="text-slate-300 text-lg">اكتشف سيارة أحلامك بأفضل الأسعار</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map(car => (
          <div key={car.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
            <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{car.name}</h3>
              <div className="flex justify-between text-slate-500 mb-4 font-medium">
                <span>موديل: {car.year}</span>
                <span>{car.type}</span>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-blue-700 font-bold text-2xl">${car.price.toLocaleString()}</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  التفاصيل
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;