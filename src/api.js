import axios from "axios";


export async function getNews() {
    try {
      const response = await axios.get(
        "https://api.collectapi.com/news/getNews?country=tr&tag=general",
        {
          headers: {
            "content-type": "application/json",
            authorization: "apikey 1mYzjR5iL5rkGVoaDnIAF0:41MupHkcVQCAQzKgN6rqVW",
          },
        }
      );
        if(response.data.success) {
          return response.data.result
        }
    } catch (error) {
      console.error(error);
    }
  }

