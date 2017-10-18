'use strict';


// SCRIPT PARA RELLENAR 300 DIAS LABORABLES DE CITAS  PARA PROBAR CALENDARIO//

const Appointment = require('../models/appointment');
const moment = require('moment');

var startdate = moment().startOf('isoweek').set({hour: 9, minute: 0});

console.log("Inicio fecha: " + startdate);

for (var j = 0; j <= 200; j++) {
    for (var i = 0; i <= 24; i++) {

        var sampleAppointment = {
            "dateTime": startdate,
            "petId": '59ddda5b1669fa0150a84bff',
            "vetId": null,
            "Status": 0
        };

        startdate = moment(startdate).add(30, 'minutes');

        //con isoweek compruebo que el dia actual no sea ni sabado ni domingo
        if (moment(startdate).isoWeekday() < 6) {

            saveAppointment();
        }
    }
    startdate = moment(startdate).set({hour: 9, minute: 0}).toDate();
    startdate = moment(startdate).add(1, 'days');
}

function saveAppointment() {
    const appointment = new Appointment(sampleAppointment);
    appointment.save((err) => {
        if (err) return console.error(err);
    });
}