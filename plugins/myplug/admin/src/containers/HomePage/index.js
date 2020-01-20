/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";

// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>{pluginId}&apos;s HomePage</h1>
        <p>First component build with plugins</p>
      </div>
    );
  }
}

export default memo(HomePage);
