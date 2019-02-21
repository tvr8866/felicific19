jQuery(document).ready(function (event) {
  var events = getUrlJsonSync(`https://anmolsaxena10.github.io/felicific-data/Days/day1.json`);
  console.log(events);
  //    if(events==undefined)continue;
  for (var j = 0; j < events.length; j++) {
    var item = `
            <div id="slide1" class="slide">
             
            </div>
            
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
              <img src="https://lorempixel.com/640/480/abstract/6/">
              <img src="https://lorempixel.com/640/480/abstract/4/"> 
            </div>
            `;
    console.log(item);
    $('#event_container').append(item);

    //  showDays();
  }
});
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