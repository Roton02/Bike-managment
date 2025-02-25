  export const getNews = async () => {
    const API_Key="e0af391e9ef34d2bbf631ae4299f7dd7"
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_Key}`
    const response = await fetch(url)
    return response.json()
  }