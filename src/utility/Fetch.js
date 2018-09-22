import  axios  from 'axios';

export default class Fetch{
   static  FetchHeadline =  async () => {
        try {
          const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=87e84931f10444c49fac2830d412f20d');
          return response.data;
        } catch (error) {
            return error.response.data;
        }
      }

      static  FetchSources =  async (id) => {
        try {
          const response = await axios.get('https://newsapi.org/v2/top-headlines?sources='+id+'&apiKey=87e84931f10444c49fac2830d412f20d');
          return response.data;
        } catch (error) {
            return error.response.data;
        }
      }

      static  FetchCategory =  async (id) => {
        try {
          const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category='+id+'&apiKey=87e84931f10444c49fac2830d412f20d');
          return response.data;
        } catch (error) {
            return error.response.data;
        }
      }
}