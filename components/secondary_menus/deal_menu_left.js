import React from 'react';

const DealSecondaryMenu = ()=> {
  return {
    <div class="col-xs-12 col-md-6">
        <span class="mailbox-main-heading">

             <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Deal Messages
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li role="separator" class="divider"></li>
                    <li><a href="#!">Check All</a></li>
                    <li><a href="#!">Delete</a></li>
                    <li><a href="#!">Mark As Read</a></li>
                </ul>
            </div>
        </span>
    </div>
  }
}

export default DealSecondaryMenu;
