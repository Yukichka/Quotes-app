import React from "react";

export class Filtered extends React.Component {
  render() {
    console.log(this.props);
    const Quotes = [];
    Object.values(this.props).map(el => Quotes.push(el));
    console.log(Quotes);
    const filteredQuotes = Quotes.filter(quote => quote.rating >= 3);
    console.log(filteredQuotes);
    return (
      <div className="filter">
        <div className="comment">Hey choosy!</div>
        <div className="container">
          {filteredQuotes.map((quote, idx) => (
            <div key={idx} className="quote">
              {!quote.isClicked ? (
                <div className="quote-en">{quote.en}</div>
              ) : (
                <div className="after-clicked">{quote.en}</div>
              )}
              <div className="quote-author">{quote.author}</div>
              <div>Rating {quote.rating}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}