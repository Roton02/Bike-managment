import React, { useState } from "react";

const filters = ["All News", "News", "Events", "Offers", "Community"];

const newsArticles = [
  {
    title: "VinFast Announces Special Care Policy for High-End Car Line VF 9",
    description:
      "From June 1, 2024, VinFast will apply a special customer care policy exclusively for the highest-end car line in the product range - VF 9. With unprecedented privileges such as a commitment to buy back used ...",
    date: "31.05.2024",
    category: "Community",
    image: "https://i.postimg.cc/QM1KyX2r/img-news-3.png",
  },
  {
    title: "Exciting New Developments in the Automotive Industry",
    description:
      "The automotive industry is witnessing a transformation with new electric vehicle models, enhanced battery technology, and customer-focused policies. These innovations are set to redefine transportation ...",
    date: "12.05.2024",
    category: "News",
    image: "https://i.postimg.cc/7L0XnrX5/img-News-4.png",
  },
  {
    title: "Upcoming Tech Expo Brings Latest Innovations to the Forefront",
    description:
      "Tech enthusiasts are eagerly awaiting the upcoming Tech Expo 2024, where companies will showcase breakthrough advancements in AI, IoT, and sustainable energy. This event is expected to be a game-changer ...",
    date: "05.04.2024",
    category: "Events",
    image: "https://i.postimg.cc/C107vr6m/img-News-5.png",
  },
  {
    title: "Limited-Time Offers on the Latest Car Models This Season!",
    description:
      "For a limited time, customers can enjoy exclusive discounts and financing options on the latest car models. Don’t miss out on these exciting deals that make luxury vehicles more affordable than ever ...",
    date: "20.03.2024",
    category: "Offers",
    image: "https://i.postimg.cc/P5B2D5bG/img-news-6.png",
  },
  {
    title: "Community Initiatives Strengthen Local Ties and Sustainability Efforts",
    description:
      "Communities across the country are embracing sustainability and social initiatives, working together to create a positive impact. These projects aim to improve the environment and provide better opportunities ...",
    date: "15.02.2024",
    category: "Community",
    image: "https://i.postimg.cc/Hxt2F0qH/img-News-7.png",
  },
];

const RecentNews = () => {
  const [selectedFilter, setSelectedFilter] = useState("All News");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = selectedFilter === "All News" ? 9 : 3;

  const filteredArticles = newsArticles.filter(
    (article) =>
      (selectedFilter === "All News" || article.category === selectedFilter) &&
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">RECENT NEWS</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFilter === filter
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => {
              setSelectedFilter(filter);
              setCurrentPage(1);
            }}
          >
            {filter}
          </button>
        ))}
        <input
          type="text"
          placeholder="Search Keywords..."
          className="px-4 py-2 border border-gray-300 rounded-full outline-none w-56"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {paginatedArticles.map((article, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-500">{article.date}</span>
                <span className="text-xs font-bold text-white px-2 py-1 bg-green-600 rounded">
                  {article.category}
                </span>
              </div>
              <h3 className="text-lg font-bold uppercase leading-tight">{article.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-6">
        <button
          className="w-10 h-10 flex items-center justify-center border rounded-full"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          ←
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded ${
              currentPage === index + 1 ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="w-10 h-10 flex items-center justify-center border rounded-full"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default RecentNews;
