let currentYear = getYear();
$('#year').text(currentYear);

/**
 * Function for returning the current year
 **/
function getYear() {
  let date = new Date()
  return date.getFullYear();
}
