"use strict";

const _url = (coin = "ETC", syms = "USD,EUR,GBP,BTC,CHF") =>
    `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=${syms}`;

const overview_url = (coin = "ETC") =>
    `https://www.cryptocompare.com/coins/${coin.toLowerCase()}/overview`;

const coinPriceService = function coinPriceService() {
    this.coinPrices = {};

    this.overview_url = overview_url;

    this.initPrices = function() {
        return Promise.all(
            Object.values(nodes.alternativeBalance)
                .map(node => node.symbol)
                .concat(ajaxReq.type)
                .map(coin => this.getCoinPrice(coin))
        );
    };

    this.getCoinPrice = function getCoinPrice(coin = ajaxReq.type) {
        const uri = _url(coin);

        return ajaxReq.http
            .get(uri, {
                cache: true
            })
            .then(result => {
                if (
                    (result.hasOwnProperty("Response") &&
                        result.Response === "Error") ||
                    (result.hasOwnProperty("data") &&
                        result.data.Response === "Error")
                ) {
                    return Promise.reject(
                        Object.assign({}, result, { error: true })
                    );
                } else {
                    const { data } = result;

                    const prices = {
                        usd: parseFloat(data["USD"]),
                        eur: parseFloat(data["EUR"]),
                        btc: parseFloat(data["BTC"]),
                        chf: parseFloat(data["CHF"]),
                        gbp: parseFloat(data["GBP"])
                    };

                    this.coinPrices[coin] = prices;

                    return prices;
                }
            })
            .catch(err => {
                console.log("err", err);
            });
    };

    return this;
};

module.exports = coinPriceService;
