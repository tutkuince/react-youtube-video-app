import React from "react";

class SearchBar extends React.Component {

    state = {
        term: ''
    };


    onInputChange = (event) => {
      this.setState({term: event.target.value})
    };

    onFormSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="row">
                <div className="col col-md-12">
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="search">Search</label>
                            <input
                                type="text"
                                className="form-control"
                                id="search"
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                            <small id="emailHelp" className="form-text text-muted">0</small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;