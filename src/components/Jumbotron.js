import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-4">Margaret C Rokita CPA LLC</h1>
        <p class="lead">Providing Accounting & Tax Return Services</p>
        <hr class="my-4" />
        <p>
          Margaret "Peggy" Rokita <br />CPA, M.S. Tax, Quickbooks Cloud
          ProAdvisor <br />141 Harrow Lane, Suite 1 <br /> Saginaw MI 48638
          <br />(989) 791-0000 Office <br /> (989) 791-3800 Fax <br />
          peggy.rokita@gmail.com
        </p>
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    );
  }
}

export default Jumbotron;
