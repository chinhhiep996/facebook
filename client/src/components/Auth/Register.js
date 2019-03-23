import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { registerUser } from "../../actions/authAction";

const styles = {
  textField: {
    width: "100%",
    marginBottom: 5
  },
  btnBlock: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20
  }
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      login: "",
      password: "",
      password2: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      login: this.state.login,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(userData, this.props.history);
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper style={{ padding: 15 }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="email"
            name="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextField
            type="text"
            name="login"
            label="Login"
            className={classes.textField}
            value={this.state.login}
            onChange={this.handleChange}
          />
          <TextField
            type="password"
            label="Password"
            className={classes.textField}
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <TextField
            type="password"
            label="Repeat password"
            className={classes.textField}
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
          />
          <div className={classes.btnBlock}>
            <Button variant="outlined" type="submit">
              Register
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(withStyles(styles)(Register)));
