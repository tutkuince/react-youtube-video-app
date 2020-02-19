import axios from 'axios';

const KEY = 'AIzaSyBhu09MNHnUL5DZ7RGfdi-S7pbPQKM0dUY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
    }
});