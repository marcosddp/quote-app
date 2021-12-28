

const queryApi = async function (val) {
  let optionUrl = val ? "?author=" + val : "random";

  const baseUrl = "https://quote-garden.herokuapp.com/api/v3/quotes/";

  return await fetch(baseUrl + optionUrl)
    .then((response) => response.json())
    .then(function (data) {
      let quotes = data.data;

      return quotes.map(function (q) {
        let quote = {
          quoteText: q.quoteText,
          quoteAuthor: q.quoteAuthor,
          quoteGenre: q.quoteGenre,
        };
        return quote;
      });
    })
    .catch((ex) => {
      let quote = {
        quoteText:
          "Errorr error error error error error error error error error error error error error ",
        quoteAuthor: ex.message,
        quoteGenre: ex.message,
      };

      let quotes = [];
      quotes.push(quote);
      return quotes;
    });
};

export default queryApi;
