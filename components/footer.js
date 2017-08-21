import React from 'react';

const Footer = () => {
  return {
    <div id="footer" style="z-index:2">
        <div class="info-bar row expanded">
            <div class="col-xs-12 col-sm-6 col-lg-2 paddingZero" align="center">Questions? <a class="trendColor pointerClass" onclick="goToHelpCenter()">Visit the Help Center</a></div>
            <div class="col-xs-12 col-sm-6 col-lg-4 paddingZero" align="center"><a href="https://www.google.ca/maps/place/TREND+Financial/@43.7022556,-79.5973793,17z/data=!3m1!4b1!4m5!3m4!1s0x882b3a28aaa834ef:0x8537b344d57e339!8m2!3d43.7022517!4d-79.5951906"><span class="icon-map-marker"></span> 70 Disco Rd, Suite 200 Toronto ON, M9W 1L7</a></div>
            <div class="col-xs-12 col-sm-6 col-lg-2 paddingZero" align="center"><a href="tel:18776423779"><span class="icon-phone"></span> 1-877-642-3779</a></div>
            <div class="col-xs-12 col-sm-6 col-lg-4 paddingZero" align="center">© <span id="thisYear">2017</span>, TREND Financial Corp. All Rights Reserved.</div>
        </div>
    </div>
  }
}
