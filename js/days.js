jQuery(document).ready(function(event){
    var days = getUrlJsonSync('https://anmolsaxena10.github.io/felicific-data/days.json');
    
    for(var i=1 ; i<=days.length ; i++){
        var events = getUrlJsonSync(`https://anmolsaxena10.github.io/felicific-data/Days/day${i}.json`);
        console.log(i+' = '+events);
        if(events==undefined)continue;
        for(var j=0 ; j<events.length ; j++){
            var item = `<div class="cbp-item day${i-1}">
                        <a href="portfolio/index.html">
                            <figure class="fig">
                                <img src="images/work-1.jpg" alt="">
                                <figcaption>
                                    <h3>${events[j].event_name}</h3>
                                    <p>${days[i-1].date}</p>
                                </figcaption>
                            </figure>
                        </a>
                        </div>`;
            console.log(item);
            $('#grid-container').append(item);
        }
    }
    showDays();
});

function getUrlJsonSync(url){

    var jqxhr = $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        cache: false,
        async: false
    });
    var response = {valid: jqxhr.statusText,  data: jqxhr.responseJSON};
    return response.data;
}