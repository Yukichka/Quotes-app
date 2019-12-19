import React from "react";
import { QuoteContent } from "./QuoteContent";

export class AllQuotes extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="allquotes">
        <div className="container">
          {this.props.quotes.map((quote, idx) => (
            <QuoteContent
              key={idx}
              quote={quote}
              idx={idx}
              onClickedQuote={this.props.onClickedQuote}
              onVotedQuote={this.props.onVotedQuote}
            />
          ))}
        </div>
      </div>
    );
  }
}
