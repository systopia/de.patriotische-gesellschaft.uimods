/*-------------------------------------------------------+
| Patriotische Gesellschaft UI Modififications           |
| Copyright (C) 2017 SYSTOPIA                            |
| Author: P. Batroff (batroff@systopia.de)               |
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

cj('#action option[value="2"]').text('Stornieren');

// remove 'übertragen' from dropdown (#7508)
cj('#action option[value="1"]').remove();
// auto select stornieren
cj('#action option[value="2"]').prop('selected', true);

// remove übertragen from text description field
// TODO: This is quick and dirty - should probably be resolved by a translation update or something.
cj('.label').html(cj('.label').html().replace('Anmeldung stornieren oder übertragen', 'Anmeldung stornieren'));