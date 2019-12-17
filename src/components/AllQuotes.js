import React from "react";

export class AllQuotes extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="allquotes">
        <div className="container">
          {this.props.quotes.map((quote, idx) => (
            <div key={idx} className="quote">
              <div onClick={() => this.props.onClickedQuote(quote.id)}>
                {!quote.isClicked ? (
                  <div className="quote-en">{quote.en}</div>
                ) : (
                  <div className="after-clicked">{quote.en}</div>
                )}
              </div>
              <div className="quote-author">{quote.author}</div>
              {quote.rating ? (
                <div>Rating {quote.rating}</div>
              ) : (
                <div>Rating unknown</div>
              )}
              {quote.isClicked ? (
                <div
                  className="vote"
                  onClick={() =>
                    this.props.onVotedQuote(quote.numberOfVotes, quote.id)
                  }
                >
                  <img src="/imgs/thumbup.png" alt="thumbup" />
                  <div className="vote-n"> {quote.numberOfVotes}</div>
                </div>
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
