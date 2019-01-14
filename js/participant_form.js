/*-------------------------------------------------------+
| Patriotische Gesellschaft UI Modififications           |
| Copyright (C) 2017 SYSTOPIA                            |
| Author: P. Batroff (batroff@systopia.de)               |
|         J. Schuppe (schuppe@systopia.de)               |
| http://www.systopia.de/                                |
+--------------------------------------------------------+
| This program is released as free software under the    |
| Affero GPL license. You can redistribute it and/or     |
| modify it under the terms of this license which you    |
| can read by viewing the included agpl.txt or online    |
| at www.gnu.org/licenses/agpl.html. Removal of this     |
| copyright header is strictly prohibited without        |
| written permission from the original author(s).        |
+--------------------------------------------------------*/

(function ($) {
  $(document).ready(function () {
    $(document).bind("ajaxComplete", function () {
      $("#notify").remove();
    });

    // Disable the "send receipt" checkbox when selecting "Abgesagt" as
    // participant status.
    //
    // This is ugly, but we can't use $().on('change') here because the SELECT
    // element has an onchange attribute with a "return" inside. Thus, we
    // re-define the onchange property and prepend our function call to the
    // existing code and use the same approach as sendNotification(): Defining a
    // global function and calling it from the onchange property, but without a
    // "return".
    var $form = $('form.CRM_Event_Form_Participant');
    var $select = $form.find('#status_id');
    var onchangeAttr = $select.get(0).onchange;
    $select.get(0).onchange = function() {
      sendReceipt();
      if (typeof onchangeAttr === 'function') {
        onchangeAttr();
      }
    };
  });
})(jQuery);

/**
 * Disable the "send_receipt" checkbox for some participant statuses.
 *
 * This function is called from the "onchange" attribute on the "status_id"
 * SELECT element, similar to sendNotification().
 */
function sendReceipt() {
  var receiptStatusIds = "17";
  receiptStatusIds = receiptStatusIds.split(',');
  if (cj.inArray(cj('select#status_id option:selected').val(), receiptStatusIds) > -1) {
    cj("#send_receipt").prop('checked', false);
  }
  else {
    cj("#send_receipt").prop('checked', true);
  }
}
