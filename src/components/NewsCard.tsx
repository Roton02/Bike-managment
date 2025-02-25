export type NewsCardProps = {
    news: {
        title: string;
        content: string;
        urlToImage: string;
        publishedAt: string;
        source: {
            name: string;
        };
    };
};

const NewsCard = ({ news }: NewsCardProps) => {
    return (
        <div className="text-start space-y-5">
            <h1 className="text-xl font-bold">{news?.title}</h1>
            <p>{news?.content?.slice(0, 300)}...</p>
            {news?.urlToImage && <img src={news.urlToImage} alt="news" className="w-full h-40 object-cover rounded" />}
            <div className="flex items-center gap-3">
                <p>{new Date(news?.publishedAt).toLocaleString()}</p>
                <p className="bg-primary px-4 py-1 text-white">{news?.source?.name}</p>
            </div>
        </div>
    );
};

export default NewsCard;