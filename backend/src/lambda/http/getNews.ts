import {getNews} from '../../businessLogic/news'

export const handler = async () =>{
    const response = await getNews();
    return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(response)
      }
}