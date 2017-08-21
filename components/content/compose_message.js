import React from 'react';

const ComposeMessage = () {
  return {
<div class="col-xs-7 padding-right-0 padding-left-0">
  <div id="viewTipDiv" style="margin-left: 25px;  margin-top: 40px">

  <form>

     <div class="col-xs-11 " id="fullNameDiv" style="margin-top: -21px;">
        <div class="form-group">
          <h3 style="margin-bottom: 30px;">New Support Message</h3>
        </div>
    </div>

    <div class="col-xs-11 " id="fullNameDiv">
      <div class="form-group">
        <input class="form-control specialInput" type="text" name="" id="" placeholder="Enter Vehicle Information or Applicant Name" aria-describedby="" title="Enter Vehicle Information or Applicant Name">
      </div>
    </div>

     
    <div class="col-xs-11 ">
      <div class="form-group">
       <select title="Reason for Inquiry" id="reason" name="reason" class="form-control specialSelect" style="height: 55px;" aria-describedby="provinceHelpText"><option value="" disabled="disabled" selected="selected">Reason for  Inquiry</option></select>
      </div>
    </div>

   <div class="col-xs-11 " id="fullNameDiv">
     <div class="form-group">
       <input title="Subject" class="form-control specialInput" type="text" name="" id="" placeholder="Subject" aria-describedby="" title="Subject">
     </div>
   </div>

   <div class="col-xs-11">
     <div class="form-group">
       <textarea title="Type a message" class="form-control" id="comments" name="comments" rows="6" aria-describedby="Comment" placeholder="Type a message..."></textarea>
     </div>
   </div>

   <div class="col-xs-12">
     <div class="form-group">
       <button title="Send" type="button" class="btn btn-trend" style="height:px" id="btnSubmit">Send</button>
       <a title="Cancel" href="javascript:history.back()" type="button" class="btn  btn-default" style="height:px" id="btnSubmit">Cancel</a>
     </div>
  </div>

    </form>
  </div>
</div>
  }
}

export default ComposeMessage;
