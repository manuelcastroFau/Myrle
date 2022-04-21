// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);

// var getDate = document.getElementById("getDate");



// // getDate.on( "click", function(){
// //     // $("calendar").add("<h1>"+ today+"<h1>")
// //     document.getElementsByClassName("calendar").addHtml
// // } );


// $("#getDate").click(function(){
//     $(".calendar").append("<h1>"+ today+"</h1>");
//   });
  

// document.getElementsByClassName(".calendar").in



// function getDatesBetween(dat1, date2)
// {

// }



 var marchEvents = [
    {
      title: 'Pool Part for seniors',
      url: 'https://www.westchestergov.com/previous-releases/4543-seniors-start-summer-with-pool-party-and-barbecue',
      start: '2022-04-01'
    },
    {
      title: 'BBQ week',
      url: 'https://orlandoinsidervacations.com/central-florida-bbq-festivals/',
      start: '2022-04-07',
      end: '2022-04-10'
    },
    {
      groupId: '999',
      title: 'Classes to learn tiktok for seniors',
      start: '2022-04-09T16:00:00'
    },
    {
      groupId: '999',
      title: 'Movie Time for seniors',
      start: '2022-04-16T16:00:00'
    },
    {
      title: 'yoga for Seniors',
      url: 'https://dailycaring.com/chair-yoga-for-seniors-reduce-pain-and-improve-health-video/',
      start: '2022-04-11',
      end: '2022-04-13'
    },
    {
      title: 'Comunity Meeting',
      start: '2022-04-12T10:30:00',
      end: '2022-04-12T12:30:00'
    },
    {
      title: 'Lunch Free',
      start: '2022-04-12T12:00:00'
    },
    {
      title: 'tango Classes for seniors',
      start: '2022-04-12T14:30:00'
    },
    {
      title: 'Lunch Free',
      start: '2022-04-20T12:00:00'
    },
    {
      title: 'Chess Tournament',
      start: '2022-04-21T10:00:00'
    },
    {
      title: 'Pool Part for seniors',
      url: 'https://www.westchestergov.com/previous-releases/4543-seniors-start-summer-with-pool-party-and-barbecue',
      start: '2022-04-21'
    },
    {
      title: 'backgammon Tournament',
      start: '2022-04-13T07:00:00'
    },
    {
      title: 'Comunity Meeting',
      start: '2022-04-25T10:30:00',
      end: '2022-04-25T12:30:00'
    },
    {
      title: 'New technologies for Seniors',
      url: 'https://olycap.org/technology-training-for-seniors/',
      start: '2022-04-28'
    }
  ]


document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: today,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      // insert events here from database

      events: marchEvents
    });

    calendar.render();
  });