import { assert, expect } from "chai";
import topFilter from "./TopFilter";

it("should return filtered quotes which is more than 3", () => {
  const quotes = [{ rating: 4 }, { rating: 2 }, { rating: 5 }];
  const newQuotes = topFilter(quotes);
  expect(newQuotes.length).to.equal(2);
});
it("should return more than 3 including 3", () => {
  const quotes = [{ rating: 2 }, { rating: 3 }, { rating: 1 }];
  const newQuotes = topFilter(quotes);
  expect(newQuotes.length).to.equal(1);
});
