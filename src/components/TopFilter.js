function topFilter(quotes) {
  return quotes.filter(quote => quote.rating >= 3);
}

export default topFilter;
