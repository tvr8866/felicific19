jQuery(document).ready(function (event) {
  var days = getUrlJsonSync(`https://anmolsaxena10.github.io/felicific-data/days.json`);
  console.log(days[0]['poster_url']);
  var url = getUrlParameter('url');
  if (url != 7) {
    $('#title').css("background-image", 'url(https://anmolsaxena10.github.io/felicific-data/' + days[url-1]['poster_url'] + ')');
    $('#title').css("background-size", 'auto 100vh');
    $('#title').css("background-repeat", 'no-repeat');
    var events = getUrlJsonSync(`https://anmolsaxena10.github.io/felicific-data/Days/day${url}.json`);

    if($(window).width()<500){
      $('#title').css("background-size", '100vw auto');
    }

    console.log(events);
    //    if(events==undefined)continue;
    for (var j = 0; j < events.length; j++) {
      if (j % 2 == 0) {
        var item = `
           <div id="slide1"> </div>
            
            <div id="slide2" class="slide">
              <div class="title">
                <h1>${events[j].event_name}</h1>
                <h3>${events[j].tagline}</h3>
                <h3>Date : ${events[j].date}</h3>
                <h3>Time : ${events[j].time}</h3>
            
                <h3>Venue : ${events[j].venue} </h3>
                <h3>Team_size : ${events[j].team_size}</h3>
                <h3>Description : ${events[j].description}</h3>
                <h3>Fees : ${events[j].fees}</h3>
                <h3>Registration_type : ${events[j].Registration_type}</h3>
                <h3>Winning_prize : ${events[j].Winning_prize}</h3>
                <h3>Additional_remark : ${events[j].Additional_remark}</h3>
              </div>
              <p>
              <img src="https://anmolsaxena10.github.io/felicific-data/${events[j].poster}">
              </p>
            
            </div>
            `;
      }
      else {
        var item = `
      <div> </div>
       
       <div id="slide411" class="slide">
       
         <div class="title">
           <h1>${events[j].event_name}</h1>
           <h3>${events[j].tagline}</h3>
           <h3>Date : ${events[j].date}</h3>
           <h3>Time : ${events[j].time}</h3>
       
           <h3>Venue : ${events[j].venue}</h3>
           <h3>Team_size : ${events[j].team_size}</h3>
           <h3>Description : ${events[j].description}</h3>
           <h3>Fees : ${events[j].fees}</h3>
           <h3>Registration_type : ${events[j].Registration_type}</h3>
           <h3>Winning_prize : ${events[j].Winning_prize}</h3>
           <h3>Additional_remark : ${events[j].Additional_remark}</h3>
         </div>
        
         
         <img src="https://anmolsaxena10.github.io/felicific-data/${events[j].poster}">
         
       </div>
       `;

      }
      console.log(item);
      $('#event_container').append(item);
    }
    //  showDays();
  }
  else {
$('#title').append("<h2>Performing Arts</h2>");
$('#title').css("display", "none");
    var cultural = getUrlJsonSync(`https://anmolsaxena10.github.io/felicific-data/Days/cultural.json`);
    for (var j = 0; j < cultural.length; j++) {
      if (j % 2 == 0) {
        var item = `
           <div> </div>
            
            <div id="slide411" class="slide">
              <div class="title">
                <h1>${cultural[j].name}</h1>
                <h3>Description : ${cultural[j].description}</h3>
              </div>
              <img src="https://anmolsaxena10.github.io/felicific-data/${cultural[j].poster_url}">
            
            </div>
            `;
      }
      else {
        var item = `
        <div> </div>
       
       <div id="slide2" class="slide">
       <img src="https://anmolsaxena10.github.io/felicific-data/${cultural[j].poster_url}">
         <div class="title">
           <h1>${cultural[j].name}</h1>
           <h3>Description : ${cultural[j].description}</h3>
         </div>
        
       
       </div>
       `;

      }
      console.log(item);
      
      $('#event_container').append(item);
    }
    //  showDays();
  }
});

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};


function getUrlJsonSync(url) {

  var jqxhr = $.ajax({
    type: "GET",
    url: url,
    dataType: 'json',
    cache: false,
    async: false
  });
  var response = { valid: jqxhr.statusText, data: jqxhr.responseJSON };
  return response.data;
}