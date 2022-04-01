const axios = require('axios');

const main = async () => {
    try {
        const result = await axios.post(
            'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', {
                query: `{
                    pairs(first: 10, where: {reserveUSD_gt: "1000000", volumeUSD_gt: "50000"}, orderBy: reserveUSD, orderDirection: desc) {
                        id
                        token0 {
                            id
                            symbol
                        }
                        token1 {
                            id
                            symbol
                        }
                        reserveUSD
                        volumeUSD
                    }
                }`
            }
        );
        console.log(result.data.data.pairs);
    } catch (error) {
        console.error(error);
    }
}
main();