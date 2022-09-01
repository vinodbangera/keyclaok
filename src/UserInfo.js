import React, { Component } from 'react';

class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: "",
      cpf: ""
    };
    this.props.keycloak.loadUserInfo().then(userInfo => {
      console.log(userInfo);
        this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.sub, cpf: userInfo.preferred_username})
    });

    console.log(this.props.keycloak.token);
  }

  render() {
    return (
      <div className="UserInfo">
        <h2>Welcome to the Sample page, {this.state.name}!!</h2>
        <p><b>CPF:</b> {this.state.cpf}</p>
        <p><b>Name:</b> {this.state.name}</p>
        <p><b>Email:</b> {this.state.email}</p>
        <p><b>ID:</b> {this.state.id}</p>
      </div>
    );
  }
}
export default UserInfo;