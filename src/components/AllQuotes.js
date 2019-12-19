import React from "react";
import { QuoteContent } from "react";
export class AllQuotes extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="allquotes">
        <div className="container">
          {this.props.quotes.map((quote, idx) => (
            <QuoteContent quote={quote} idx={idx}/>
          ))}
        </div>
      </div>
    );
  }
}
