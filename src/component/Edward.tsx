export const Edward = () => {
    const images = [
      {
        src: "https://i.postimg.cc/sXnP1nD2/img-Edward.png", 
        text: "2022 - Bike-Bike was awarded the record 'The largest electric caravan in Vietnam' by the Record Association."
      },
      {
        src: "https://i.postimg.cc/d3p8jLCP/img-Edward-1.png", 
        text: "2021 - Bike-Bike Lux A2.0 was voted Car of the Year in the D-E sedan segment at the Car Awards 2021 organized by VinExpress-Xe."
      },
      {
        src: "https://i.postimg.cc/Xv49LMrJ/img-Edward-2.png", 
        text: "2021 - Bike-Bike was the car company with the highest rating for service quality at the Car Awards 2021 organized by VinExpress-Xe."
      },
      {
        src: "https://i.postimg.cc/3N4GNYcL/img-Edward-3.png", 
        text: "2021 - Bike-Bike won the most favorite car in the Vietnam market award at the 'Voting Car of the Year 2021' program by the 2 communities OTOTFUN and OTXSAIGON."
      },
      {
        src: "https://i.postimg.cc/Y2ZgVLvT/img-Edward-4.png", 
        text: "2020 - Bike-Bike was honored by ASEAN NCAP as 'New Car Manufacturer with High Commitment to Safety' Grand Prix Award 2020."
      },
      {
        src: "https://i.postimg.cc/VkctsyBR/img-Edward-5.png", 
        text: "2018 - Bike-Bike was awarded 'A star is born' by Auto Best."
      }
    ];
    
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6">EDWARD</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.src} alt={`Award ${index + 1}`} className="w-full rounded-lg shadow-lg" />
              <p className="mt-2 text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  