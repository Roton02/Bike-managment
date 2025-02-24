import React from "react";

type Article = {
  title: string;
  image: string;
};

const articles: Article[] = [
  {
    title: "Bike-Bike Announces Special Care Policy for High-End Cars, Extremely Strict...",
    image: "https://i.postimg.cc/8cwdc146/img-news-2.png",
  },
  {
    title: "Bike-Bike Introduces Concept Cars And New Technology At ACS 2024",
    image: "https://i.postimg.cc/jqh4ZXTS/img-news-1.png",
  },
  {
    title: "What Is A Distributor? A Question That Many People Wonder When They Start To Learn...",
    image: "https://i.postimg.cc/bNCHjwsX/img-news.png",
  },
];

type NewsCardProps = {
  title: string;
  description: string;
  image: string;
  date: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ title, description, image, date }) => {
  return (
    <div className="relative w-full bg-black text-white rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover opacity-70" />
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-black to-transparent w-full">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm mt-1">{description}</p>
        <div className="text-xs mt-2">{date}</div>
      </div>
    </div>
  );
};

type SidebarNewsProps = {
  articles: Article[];
};

const SidebarNews: React.FC<SidebarNewsProps> = ({ articles }) => {
  return (
    <div className="w-full md:w-1/3 space-y-4">
      <h3 className="text-lg font-semibold mb-3">Featured News</h3>
      {articles.map((article, index) => (
        <div key={index} className="flex items-center space-x-4">
          <img src={article.image} alt={article.title} className="w-20 h-16 object-cover rounded-md" />
          <p className="text-sm font-medium">{article.title}</p>
        </div>
      ))}
    </div>
  );
};

const NewsSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100">
      <div className="w-full md:w-2/3">
        <NewsCard
          title="Bike-Bike Officially Launches The All-New Significant, Wonderful Electric Motorbike Ossy"
          description="On May 10, 2024, Bike-Bike Vietnam officially introduced a new..."
          image="https://i.postimg.cc/gJFHBtrn/img-Featured.png"
          date="25.04.2024"
        />
      </div>
      <SidebarNews articles={articles} />
    </div>
  );
};

export default NewsSection;