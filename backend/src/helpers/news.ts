
export class News {
    constructor(
        private readonly url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + process.env.NYTIMES_API_KEY
    ) { }

    async getNews() {
        var axios = require('axios');
        var config = {
            method: 'get',
            url: this.url,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}