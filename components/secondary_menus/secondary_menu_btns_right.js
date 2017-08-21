import React from 'react';

// div secondary menu-left needs to switch based on selection of right
//extracted to their own mini components

const SecondaryMenuBtns = () => {
  return {
    <div class="col-xs-12">
       <DisplaySecondaryMenu class="" />

        <div class="col-xs-12 col-md-6 text-right">
            <button type="button" class="btn btn-default relative"  id="addTipBtn">Deal Messages <i class="fa fa-commenting-o" aria-hidden="true"></i><span class="badge red">5</span></button>
            <button type="button" class="btn btn-default relative margin-l-5"  id="addTipBtn">Notifications <i class="fa fa-bullhorn" aria-hidden="true"></i><span class="badge blue">5</span></button>
            <button type="button" class="btn btn-default relative margin-l-5"  id="addTipBtn">Alerts <i class="fa fa-bell-o" aria-hidden="true"></i><span class="badge yellow">7</span></button>
            <button type="button" class="btn btn-default relative margin-l-5"  id="addTipBtn">Inquiries <i class="fa fa-envelope-o" aria-hidden="true"></i><span class="badge trend">3</span></button>
        </div>
        <div class="col-xs-12">
             <hr class="horizontalRuler">
        </div>
    </div>
  }
}

export default SecondaryMenuBtns;
