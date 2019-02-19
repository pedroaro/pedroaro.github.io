$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,listWeek,listDay'
    },

    // customize the button names,
    // otherwise they'd all just say "list"
    views: {
      listDay: { buttonText: 'list day' },
      listWeek: { buttonText: 'list week' }
    },
    titleRangeSeparator: "-",
    defaultDate: '2019-02-05',
    navLinks: true, // can click day/week names to navigate views
    editable: false,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'Avila Burger',
        color: '#00bcd4',
        start: '2019-02-01'
      },
      {
        title: 'Bonsai Sushi',
        color: '#00bcd4',
        start: '2019-01-30',
      },
      {
        id: 999,
        color: '#00bcd4',
        title: 'Avila Burger',
        start: '2019-02-04'
      },
      {
        id: 999,
        title: 'Gymtastic',
        color: '#00bcd4',
        start: '2019-02-03'
      },
      {
        title: 'Gymtastic',
        start: '2019-01-29',
      },
      {
        title: 'Avila Burger',
        start: '2019-02-05T10:30:00',
        color: '#00bcd4',
        end: '2019-02-05T12:30:00'
      },
      {
        title: 'Bonsai Sushi',
        color: '#00bcd4',
        start: '2019-01-31T12:00:00'
      },
      {
        title: 'Gymtastic',
        start: '2019-01-12T14:30:00'
      },
      {
        title: 'Avila Burger',
        start: '2019-01-12T17:30:00'
      },
      {
        title: 'Bonsai Sushi',
        start: '2019-01-12T20:00:00'
      },
      {
        title: 'Bonsai Sushi',
        start: '2019-01-13T07:00:00'
      }
    ]
  });

});

function edit_hours(id){
  $('#edit-time-modal').modal('open'); 
}