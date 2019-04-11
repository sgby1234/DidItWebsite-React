import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export class NotFoundPage extends Component {
    render() {
      return (
          <Jumbotron>
              <h1>404</h1>
              <h2>The page you're looking for doesn't exist.</h2>
              <Link to="/">Click here to go home </Link>
          </Jumbotron>
      )}}
