import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  dateClick:any
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    // allDaySlot: false,
    // columnHeader: false,
    // contentHeight: 'auto',
    // defaultView: 'timeGridDay',

    height: 'auto',
    headerToolbar: {
      left:'dayGridDay,dayGridWeek,dayGridMonth',
      right:'prev,title,next'
      // left: 'prev,next today',
    //  center: 'title',
      //right: 'dayGridMonth,dayGridWeek,dayGridDay'

    },

  };

}