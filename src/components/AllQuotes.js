import React from "react";

export class AllQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.vote = this.vote.bind(this);
  }
  vote(votes, id) {
    console.log(votes, id);
    this.props.onVoted(votes, id);
  }
  render() {
    console.log(this.props);
    const Quotes = [];
    Object.values(this.props).map(el => Quotes.push(el));
    console.log(Quotes);
    return (
      <div className="allquotes">
        <div className="container">
          {Quotes.map((quote, idx) => (
            <div key={idx} className="quote">
              <div onClick={() => this.onClicked(quote.id)}>
                {!quote.isClicked ? (
                  <div className="quote-en">{quote.en}</div>
                ) : (
                  <div className="after-clicked">{quote.en}</div>
                )}
              </div>
              <div className="quote-author">{quote.author}</div>
              <div>Rating {quote.rating}</div>
              <div
                className="vote"
                onClick={() => this.vote(quote.numberOfVotes, quote.id)}
              >
                <img src="/imgs/thumbup.png" alt="thumbup" />
                <span>{quote.numberOfVotes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
