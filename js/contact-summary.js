/*-------------------------------------------------------+
| Patriotische Gesellschaft UI Modififications           |
| Copyright (C) 2017 SYSTOPIA                            |
| Author: J. Schuppe (schuppe@systopia.de)               |
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

(function($) {
  $(document).ready(function() {
    $('.customFieldGroup.zusatzinformationen_arbeitgeber')
      .insertAfter('.crm-summary-contactinfo-block')
      .css('margin-bottom', '20px');

    $('.customFieldGroup.DW_Netzwerk')
      .appendTo('#customFields .contactCardLeft');
    $('.customFieldGroup.DW_Schule')
      .appendTo('#customFields .contactCardLeft');
    $('.customFieldGroup.Diesterweg_Stipendium')
      .appendTo('#customFields .contactCardLeft');
  });
})(jQuery);
