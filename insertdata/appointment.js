'use strict';


// SCRIPT PARA RELLENAR 300 DIAS LABORABLES DE CITAS  PARA PROBAR CALENDARIO//

const Appointment = require('../models/appointment');
const moment = require('moment');

var AppointmentsTime = 30;

var startdate = moment().utc().startOf('isoweek').set({hour: 9, minute: 0});
var enddate = moment().utc().startOf('isoweek').set({hour: 9, minute: AppointmentsTime});

for (var j = 0; j <= 200; j++) {
    for (var i = 0; i <= 24; i++) {

        var statusRandom = Math.random() < 0.5 ? 0 : 2;

        var sampleAppointment = {
            "dateTimeStart": startdate,
            "dateTimeEnd": enddate,
            "petId": '59e33aaa328dd9209c2e8567',
            "vetId": null,
            "Status": statusRandom
        };

        startdate = moment(startdate).add(AppointmentsTime, 'minutes');
        enddate = moment(enddate).add(AppointmentsTime, 'minutes');

        //con isoweek compruebo que el dia actual no sea ni sabado ni domingo
        if (moment(enddate).isoWeekday() < 6) {
            saveAppointment();
        }
    }
    startdate = moment(startdate).utc().add(1, 'days');
    startdate = moment(startdate).utc().set({hour: 9, minute: 0});
    enddate = moment(enddate).utc().add(1, 'days');
    enddate = moment(enddate).utc().set({hour: 9, minute: 30});
}

function saveAppointment() {
    const appointment = new Appointment(sampleAppointment);
    appointment.save((err) => {
        if (err) return console.error(err);
        console.log(appointment);
    });
}