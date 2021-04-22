import React, { Component } from 'react';
import PropTypes from 'prop-types';
import missedArticles from './_data/missed-articles.json';
import MissedItems from './MissedItems';

class MissedArticles extends Component {
    constructor (props) {
        super(props);
        this.state = { articles: missedArticles };
    }

    render () {
        return (
            <div className="<MissedItems">
                <h2>In case you missed it</h2>
                <hr className="headerLine" />
                <MissedItems articles={this.state.articles} />
            </div>
        );
    }
}

export default MissedArticles;