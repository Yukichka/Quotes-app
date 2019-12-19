import React from "react";

export class QuoteContent extends React.Component {
  render() {
    return (
      <div className="quotecontent">
        <div key={this.props.idx} className="quote">
          <div onClick={() => this.props.onClickedQuote(this.props.quote.id)}>
            {!this.props.quote.isClicked ? (
              <div className="quote-en">{this.props.quote.en}</div>
            ) : (
              <div className="after-clicked">{this.props.quote.en}</div>
            )}
          </div>
          <div className="quote-author">{this.props.quote.author}</div>
          {this.props.quote.rating ? (
            <div>Rating {this.props.quote.rating}</div>
          ) : (
            <div>Rating unknown</div>
          )}
          {this.props.quote.isClicked ? (
            <div
              className="vote"
              onClick={() =>
                this.props.onVotedQuote(
                  this.props.quote.numberOfVotes,
                  this.props.quote.id
                )
              }
            >
              <img src="/imgs/thumbup.png" alt="thumbup" />
              <div className="vote-n"> {this.props.quote.numberOfVotes}</div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
