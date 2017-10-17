'use strict';

const Appointment = require('../models/appointment');
const moment = require('moment');

var startdate = moment("2017-10-17T09:00:00");

for (var j = 0; j <= 5; j++) {
    for (var i = 0; i <= 24; i++) {

        var sampleAppointment = {
            "dateTime": startdate,
            "petId": '59ddda5b1669fa0150a84bff',
            "vetId": null,
            "Status": 0
        };

        startdate = moment(startdate).add(30, 'minutes');
        console.log(sampleAppointment);
        testInsertAppointment()
    }
    startdate = moment(startdate).set({hour: 9, minute:0}).toDate();
    startdate = moment(startdate).add(1, 'days');
}

function testInsertAppointment() {


    const appointment = new Appointment(sampleAppointment);
    appointment.save((err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("testInsertCustomer", appointment);
        }
    })
}

testInsertAppointment();
