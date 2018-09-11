import React, { Component } from "react";
import { connect } from "react-redux";

class Dogs extends Component {
  render() {
    const { dog, requestDog, error, fetching } = this.props;
    return (
      <React.Fragment>
        <img src={dog} alt="Doguinho 🐶" />
        <h1>Welcome, Doguinho 🐶</h1>

        {dog ? (
          <p>keep doguing :)</p>
        ) : (
          <p>Replace the React icon with a dog!</p>
        )}
        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={requestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.fetching,
  dog: state.dog,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  requestDog: () => dispatch({ type: "API_CALL_REQUEST" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dogs);
