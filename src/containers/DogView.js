import React, { Component } from "react";
import Modal from "../components/Modal";
import { Route } from "react-router-dom";
import { Title, Gallery, Button } from "../styles";
import Navigation from "../pages/Navigation";


class DogView extends Component {
  loadMore = () => {
    this.props.onLoadMore();
  };

  render() {
    const { list, visible } = this.props;

    return (
      <main className="pt-xl pb-xl">
        <Title>
          The <strong>IDdog</strong>
        </Title>
        <Navigation />
        <Route
          path="/feed/:id"
          render={() => (
            <div>
              <Gallery>
                {list &&
                  list
                    .slice(0, visible)
                    .map((item, index) => (
                      <Modal imgUrl={item} alt="Dog" key={index} />
                    ))}
              </Gallery>
              {visible < list.length && (
                <div className="center-div">
                  <Button
                    className="nes-btn is-primary"
                    onClick={this.loadMore}
                    type="button"
                  >
                    Carregar mais
                  </Button>
                </div>
              )}
            </div>
          )}
        />
      </main>
    );
  }
}

export default DogView;
