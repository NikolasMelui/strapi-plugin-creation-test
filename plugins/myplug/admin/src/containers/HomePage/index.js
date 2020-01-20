/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";

// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";

class HomePage extends React.Component {
  state = {
    information: {
      data: "There is no data yet"
    }
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:1337/banners");
    const information = await response.json();
    this.setState({ information: JSON.stringify(information) });
  }

  render() {
    return (
      <div>
        <h1>{pluginId}&apos;s HomePage</h1>
        <p>{this.state.information}</p>
      </div>
    );
  }
}

export default memo(HomePage);
