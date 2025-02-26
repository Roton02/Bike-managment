
const ConsultationForm = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-green-400">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://i.postimg.cc/wBDcmKQ0/img-Contribute.png')" }}></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="https://i.postimg.cc/qvF4CSvh/Logo.png" alt="Bike-Bike Logo" className="h-12" />
        </div>
        <h2 className="text-center text-xl font-bold">SIGN UP FOR CONSULTATION</h2>
        <p className="text-center text-gray-600 text-sm mb-4">Please fill in the information below so <span className="text-green-600 font-semibold">BIKE-BIKE</span> can advise.</p>
        <form>
          <input type="text" placeholder="Full name *" className="w-full p-2 border rounded mb-3" required />
          <input type="tel" placeholder="Phone number *" className="w-full p-2 border rounded mb-3" required />
          <div className="mb-3">
            <p className="font-semibold mb-2">Bike models of interest</p>
            <div className="grid grid-cols-2 gap-2">
              {['Evo200', 'Evo200 Lite', 'Klara S (2023)', 'Vento S', 'Feliz S', 'Others'].map((model, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="radio" name="bikeModel" className="form-radio text-green-300" />
                  <span>{model}</span>
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">SIGN UP</button>
        </form>
      </div>
      <div className="absolute bottom-10 text-white text-center w-full px-4">
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div>
            <p className="text-2xl font-bold">45.508.797 km</p>
            <p className="text-sm">MILEAGE ACCUMULATED</p>
          </div>
          <div>
            <p className="text-2xl font-bold">206,762,230 kg</p>
            <p className="text-sm">CO₂ REDUCTION</p>
          </div>
          <div>
            <p className="text-2xl font-bold">~2,275,441 trees</p>
            <p className="text-sm">AIR CLEANED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
