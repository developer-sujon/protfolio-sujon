//External Import
import React, { Component } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class ProtfolioTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "Web Design": true,
      "Web Development": true,
      "Mobile App": true,
      "Desktop App": true,
      selectedIndex: 0,
    };

    this.handleCheckClicked = this.handleCheckClicked.bind(this);
  }

  handleCheckClicked(e) {
    const state = {
      [e.target.name]: e.target.checked,
    };
    if (
      this.props.characters &&
      this.props.characters.findIndex(({ name }) => name === e.target.name) <=
        this.state.selectedIndex
    ) {
      state.selectedIndex =
        this.state.selectedIndex + (e.target.checked ? 1 : -1);
    }
    this.setState(state);
  }

  render() {
    const links = [];
    const tabs = [];
    const tabPanels = [];

    this.props.characters &&
      this.props.characters.forEach(
        ({
          Category,
          Image,
          color: backgroundColor,
          text: color,
          Title,
          Description,
          Url,
        }) => {
          links.push(
            <label key={Category} className="filter__link">
              <input
                type="checkbox"
                checked={this.state[Category]}
                style={{ marginRight: "8px" }}
                name={Category}
                onChange={this.handleCheckClicked}
              />
              {Category}
            </label>,
          );

          if (!this.state[Category]) return;

          tabs.push(
            <a href={Url} target="_blank" className="col-xl-6 col-md-3 col-sm-4 py-3">
              <figure className="gallery-grid__item w-100 category-concept">
                <div className="gallery-grid__image-wrap">
                  <img
                    className="gallery-grid__image cover ls-is-cached lazyloaded medium-zoom-image"
                    data-zoom=""
                    src={Image}
                    alt={Category}
                  />
                </div>
                <figcaption className="gallery-grid__caption">
                  <h4 className="title title--h4 gallery-grid__title">
                    {Title}
                  </h4>
                  <span className="gallery-grid__category">{Description}</span>
                </figcaption>
              </figure>
            </a>,
          );
        },
      );

    return (
      <div className="select section">
        <p className="filter">{links}</p>

        <Tabs
          selectedIndex={this.state.selectedIndex}
          onSelect={(selectedIndex) => this.setState({ selectedIndex })}
          selectedTabClassName="avengers-tab--selected"
          selectedTabPanelClassName="avengers-tab-panel--selected"
        >
          <TabList className="avengers-tab-list row">{tabs}</TabList>
          {tabPanels}
        </Tabs>
      </div>
    );
  }
}

export default ProtfolioTab;
