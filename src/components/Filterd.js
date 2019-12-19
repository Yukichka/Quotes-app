import React from "react";
import topFilter from "./TopFilter";

export class Filtered extends React.Component {
  render() {
    console.log(this.props);
    const filteredQuotes = topFilter(this.props.quotes);
    console.log(filteredQuotes);
    return (
      <div className="filter">
        <div className="comment">Hey choosy!</div>
        <div className="container">
          {filteredQuotes.map((quote, idx) => (
            <QuoteContent quote={quote} idx={idx} />
          ))}
        </div>
      </div>
    );
  }
}
