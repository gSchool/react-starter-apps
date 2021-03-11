import React, { Component } from "react";

class WidgetList extends Component {
  state = {
    languages: 
    [
      {
        id: 0,
        name: "JavaScript",
        count: 0
      },
      {
        id: 1,
        name: "Python",
        count: 0
      },
      {
        id: 2,
        name: "Go",
        count: 0
      },
      {
        id: 3,
        name: "Java",
        count: 0
      },
      {
        id: 4,
        name: "Typescript",
        count: 0
      },
      {
        id: 5,
        name: "Ruby",
        count: 0
      },
      {
        id: 6,
        name: "Elixir",
        count: 0
      }
    ]
  };

  upvoteCount = (id) => {
    const newList = this.state.languages;
    newList[id].count++;
    this.setState({languages: newList})
  }

  render() {
    return (
        <div>
            <ul className="languages">
            {this.state.languages.map(languageItem => <li key={languageItem.id} className="language"><div className="voteCount">{languageItem.count}</div>{languageItem.name}<button className="" onClick={() => this.upvoteCount(languageItem.id)}>vote</button></li>)}
            </ul>
        </div>
    )
  }
}

export default WidgetList;
