import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Add from "./apiComponents/Add";
class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      info: []
    };
    // biding this to functions
    this.getData = this.getData.bind(this);
    this.getNames = this.getNames.bind(this);
  }
  // runs when page loads
  componentDidMount() {
    console.log(this.state.info);
    this.getNames();
  }
  // pulls info from database and sets state for info
  async getNames() {
    let Names = "";

    await axios.get("/getAll").then(function(response) {
      console.log(response.data);
      Names = response.data;
    });
    console.log(Names);
    this.setState({ info: Names });
  }
  // pulls initial info
  getData() {
    axios.get("/").then(function(response) {});
  }
  // renders info to web page
  render() {
    return (
      <div>
        <Add />

        <table>
          <thead>
            <tr>
              <th />
              <th className="desc-col">First Name</th>
              <th className="button-col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.info.map(exp => {
              return (
                <tr>
                  <td className="counterCell" />
                  <td className="desc-col">{exp.first}</td>
                  <td className="button-col">{exp.last}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Homepage;
