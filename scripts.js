// function to replace map src
function switchMapSrc() {
  var e = document.getElementById("map-frame");
  var newSrc = e.getAttribute("data-src");
  document.getElementById("map-frame").src=newSrc;
  var overlay = document.getElementById("map-gdpr-overlay");
  overlay.remove();
}

window.addEventListener('load', function () {
  // site is ready
  
  // map replace script
  // translate to your needs
  const map = document.getElementById("map-wrapper");
  const open_map_link = '<a href="JavaScript:void(0);" onClick="switchMapSrc();" class="open_map_link btn btn-success">Karte anzeigen</a>';
  const google_link = "<a class='google-link' target='_blank' href='https://policies.google.com/privacy?hl=de' rel='noreferrer noopener'><u>Datenschutzbedingungen</u></a>";
  const policy_text = "Die Karte wird von Google Maps eingebettet. <br>Es gelten die " + google_link + " von Google."
  let map_overlay_html = '<div id="map-gdpr-overlay"><div class="inner">' + open_map_link + ' <br><br> ' + policy_text + '</div></div>';
  map.insertAdjacentHTML("afterbegin", map_overlay_html);

}, false);