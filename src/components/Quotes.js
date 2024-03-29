import React from "react";
import { Filtered } from "./Filterd";
import { AllQuotes } from "./AllQuotes";

export class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listOfQuotes: [], isLoaded: false, isFiltered: false };
    this.onVoted = this.onVoted.bind(this);
    this.onClicked = this.onClicked.bind(this);
    this.startFiltering = this.startFiltering.bind(this);
    this.backToAll = this.backToAll.bind(this);
  }
  componentDidMount() {
    const url = "https://programming-quotes-api.herokuapp.com/quotes";
    fetch(url)
      .then(res => res.json())
      .then(quote => {
        this.setState({
          listOfQuotes: quote,
          isLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onClicked(id) {
    // console.log("onclicked")
    const quotes = [...this.state.listOfQuotes];
    const clickedQuoteIndex = quotes.findIndex(quote => quote.id === id);
    console.log("onclicked", clickedQuoteIndex);
    // const newArray = { ...quotes[clickedQuoteIndex], isClicked: true };
    // console.log(newArray);
    // this.setState(prevState => ({
    //   listOfQuotes: [
    //     ...prevState.listOfQuotes.splice(clickedQuote, 1, newArray)
    //   ]
    // }));
    quotes[clickedQuoteIndex].isClicked = true;
    this.setState({ listOfQuotes: quotes }, () => {
      console.log(this.state.listOfQuotes);
    });
  }
  onVoted(currentvotes, id) {
    console.log(currentvotes, id);
    const quotes = [...this.state.listOfQuotes];
    const clickedQuoteIndex = quotes.findIndex(quote => quote.id === id);
    console.log(clickedQuoteIndex);

    let votes = quotes[clickedQuoteIndex].numberOfVotes
      ? quotes[clickedQuoteIndex].numberOfVotes++
      : (quotes[clickedQuoteIndex].numberOfVotes = 1);

    console.log(votes);
    this.setState({
      listOfQuotes: quotes
    });
    console.log(this.state.listOfQuotes);
  }
  startFiltering() {
    this.setState({ isFiltered: true });
  }
  backToAll() {
    this.setState({ isFiltered: false });
  }
  render() {
    console.log(this.state.listOfQuotes);
    return (
      <div className="quotes">
        {!this.state.isLoaded ? (
          <div>
            Loading...<div className="loader"></div>
          </div>
        ) : (
          <div>
            <div className="buttons">
              <button onClick={this.startFiltering} className="button">
                3+ stars
              </button>
              <button onClick={this.backToAll} className="button">
                All ratings
              </button>
            </div>
            {!this.state.isFiltered ? (
              <AllQuotes
                quotes={this.state.listOfQuotes}
                onClickedQuote={this.onClicked}
                onVotedQuote={this.onVoted}
              />
            ) : (
              <Filtered
                quotes={this.state.listOfQuotes}
                onClickedQuote={this.onClicked}
                onVotedQuote={this.onVoted}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
