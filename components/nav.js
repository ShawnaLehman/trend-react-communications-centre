import React from 'react';


const PrimaryMenu = () => {
  return (
    <div id="navDiv">
      <nav class="navbar navbar-default">
          <div class="container-fluid">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
                  <a class="navbar-brand" href="https://approval.trendfinancial.com/stagingstatic/dashsu.html"><img alt="Brand" src="./dealer-mailbox_files/logo-trend.png"></a>
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                      <li><a href="https://approval.trendfinancial.com/stagingstatic/announcementssu.html">Dash</a></li>
                      <li class="dropdown"><a href="https://approval.trendfinancial.com/stagingstatic/dashsu.html">Applications <span class="caret"></span></a>
                          <ul class="dropdown-menu">
                              <li><a href="https://approval.trendfinancial.com/stagingstatic/dashsu.html?1">Funded</a></li>
                              <li><a href="https://approval.trendfinancial.com/stagingstatic/dashsu.html?2">Ongoing</a></li>
                          </ul>
                      </li>
                      <li><a href="https://approval.trendfinancial.com/stagingstatic/dashvehiclesu.html">Dealer Inventory</a></li>
                      <li><a href="https://approval.trendfinancial.com/stagingstatic/dealerstatsSU.html">Dealer List</a></li>
                      <li>
                          <button type="button" class="btn btn-trend" style="margin-top:13px; margin-left:10px; margin-right:30px" id="btnNewApp" alt="New Credit Application" onclick="newCreditApplication();">New Credit Application</button>
                      </li>
                  </ul>
                  <ul class="nav navbar-nav navbar-right">
                      <li class="hidden-xs hidden-sm">
                          <button type="button" class="btn btn-warning top5" id="btnTour" style="display: none; margin-right: 1em; margin-left: 1em; margin-top: 13px">About this Page <span class="icon-question"></span></button>
                      </li>
                      <li class="dropdown"><a>Account <span class="caret"></span></a>
                          <ul class="dropdown-menu">
                              <li><a href="https://approval.trendfinancial.com/stagingstatic/myaccountSU.html"><i class="icon-cog2"></i> Preferences</a></li>
                              <li><a href="https://approval.trendfinancial.com/stagingstatic/helpcentersu.html"><i class="icon-support"></i> Help Center Manager</a></li>
                              <li><a href="https://approval.trendfinancial.com/stagingstatic/factsu.html"><i class="icon-question-circle"></i> 'Did You Know' Manager</a></li>
                              <li><a href="https://approval.trendfinancial.com/stagingstatic/promotion.html"><i class="icon-coin-dollar"></i> Promotion Manager</a></li>
                              <li><a href="https://approval.trendfinancial.com/stagingstatic/factsu.html#" onclick="logout()"><i class="icon-sign-out"></i> Logout</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </div>
  )
}

export default PrimaryMenu;
