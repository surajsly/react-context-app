import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { langugae: "english" };

  onLanguageChange = (langugae) => {
    this.setState({ langugae });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          ></i>
        </div>
        <LanguageContext.Provider value={this.state.langugae}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
export default App;
