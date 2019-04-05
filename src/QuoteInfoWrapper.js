import React, { Component } from "react";
import Modal from "react-modal";
import parse from "html-react-parser";
import QuoteCommands from "./QuoteCommands.js";
import Quote from "./Quote.js";
import QuoteEval from "./QuoteEval.js";

class QuoteInfoWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastQuotes: [],
      currentQuote: {},
      currentQuoteContent: "",
      currentQuoteId: "",
      currentQuoteTitle: "",
      modalIsOpen: false
    };
  }

  readQuote() {
    let audioContent = "";
    this.state.currentQuoteContent.forEach(ele => {
      if (ele.props && ele.props.children) {
        audioContent += ele.props.children;
      }
    });
    let styledAudioContent = audioContent.replace(/ /g, "+");
    let audioUrl = `http://api.voicerss.org/?key=8acd7e239b3346fbb306ea33dbf2e315&src=${styledAudioContent}&hl=en-us`;
    let audio = new Audio(audioUrl);
    audio.play();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  showPastQuotes() {
    this.openModal();
    console.log("show past quote");
  }

  updateEval(val) {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDay();
    let year = date.getYear();
    let newPastQuotes = this.state.pastQuotes.slice();
    let currentQupteWithEvla = Object.assign({}, this.state.currentQuote);
    currentQupteWithEvla["eval"] = val;
    currentQupteWithEvla["date"] = `${month}/${day}/${year}`;
    newPastQuotes.push(currentQupteWithEvla);
    this.getNewQuote();
    this.setState({ pastQuotes: newPastQuotes });
  }

  getNewQuote() {
    fetch(
      "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1​",
      {
        cache: "no-store"
      }
    )
      .then(data => data.json())
      .then(json => {
        console.log(json);
        let quoteContent = json[0].content;
        let parsedQuoteContent = parse(quoteContent);
        let quoteId = json[0].ID;
        let quoteTitle = json[0].title;
        this.setState({
          currentQuote: json[0],
          currentQuoteContent: parsedQuoteContent,
          currentQuoteId: quoteId,
          currentQuoteTitle: quoteTitle
        });
      });
  }

  componentDidMount() {
    this.getNewQuote();
  }

  render() {
    return (
      <div className="quote-info-wrapper">
        <QuoteCommands
          readQuote={() => this.readQuote()}
          showPastQuotes={() => this.showPastQuotes()}
        />
        <Quote
          quoteId={this.state.currentQuoteId}
          quoteContent={this.state.currentQuoteContent}
          quoteTitle={this.state.currentQuoteTitle}
        />
        <QuoteEval updateEval={val => this.updateEval(val)} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          contentLabel="Example Modal"
        >
          {this.state.pastQuotes.length > 0 ? (
            this.state.pastQuotes.map(quote => {
              return (
                <Quote
                  quoteId={quote.ID}
                  quoteContent={parse(quote.content)}
                  quoteTitle={quote.title}
                  date={quote.date}
                  eval={quote.eval}
                />
              );
            })
          ) : (
            <h3>No past records</h3>
          )}
        </Modal>
      </div>
    );
  }
}

export default QuoteInfoWrapper;
