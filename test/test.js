var assert = require('assert');
var request = require('request');

const insight = process.env.API;

describe('Test Balances on Insight API', function() {

    describe('fetch balance for address 1', function() {
        it('should be balance of address #1', function(done){
            request.get(insight+"/addr/mnJQyeDFmGjNoxyxKQC6MMFdpx77rYV3Bo/balance", function (error, response, body) {
                assert.equal(13139085000, parseInt(body));
                done();
            });
        });
    });

    describe('fetch balance for address 2', function() {
        it('should be balance of address #2', function(done){
            request.get(insight+"/addr/mzdF3oEx8mKrpGb5rVnTE7MhQfL8N8oSnW/balance", function (error, response, body) {
                assert.equal(1244700000, parseInt(body));
                done();
            });
        });
    });

    describe('fetch balance for address 3', function() {
        it('should be balance of address #3', function(done){
            request.get(insight+"/addr/mtdVMhiWWmegkkBhzYDrz84yfgofPNLNmb/balance", function (error, response, body) {
                assert.equal(6977220000, parseInt(body));
                done();
            });
        });
    });

    describe('fetch balance for address 4', function() {
        it('should be balance of address #4', function(done){
            request.get(insight+"/addr/mqNnZTyFxhB6EzF1iDEAp9enrT84fwd1X5/balance", function (error, response, body) {
                assert.equal(625670000, parseInt(body));
                done();
            });
        });
    });

    describe('fetch balance for address 5', function() {
        it('should be balance of address #5', function(done){
            request.get(insight+"/addr/mnk2URqujBqMEfhALMby1WZHoBRauW37Kg/balance", function (error, response, body) {
                assert.equal(112300000, parseInt(body));
                done();
            });
        });
    });

});




describe('Test UTXOs on Insight API', function() {

    describe('fetch utxo for address 1', function () {
        it('should be utxo of address #1', function (done) {
            request(insight + "/addr/mnJQyeDFmGjNoxyxKQC6MMFdpx77rYV3Bo/utxo", function (error, response, body) {
                assert.equal(3, JSON.parse(body).length);
                done();
            });
        });
    });

    describe('fetch utxo for address 2', function () {
        it('should be utxo of address #2', function (done) {
            request(insight + "/addr/mzdF3oEx8mKrpGb5rVnTE7MhQfL8N8oSnW/utxo", function (error, response, body) {
                assert.equal(2, JSON.parse(body).length);
                done();
            });
        });
    });

    describe('fetch utxo for address 3', function () {
        it('should be utxo of address #3', function (done) {
            request(insight + "/addr/mtdVMhiWWmegkkBhzYDrz84yfgofPNLNmb/utxo", function (error, response, body) {
                assert.equal(2, JSON.parse(body).length);
                done();
            });
        });
    });

    describe('fetch utxo for address 4', function () {
        it('should be utxo of address #4', function (done) {
            request(insight + "/addr/mqNnZTyFxhB6EzF1iDEAp9enrT84fwd1X5/utxo", function (error, response, body) {
                assert.equal(2, JSON.parse(body).length);
                done();
            });
        });
    });

    describe('fetch utxo for address 5', function () {
        it('should be utxo of address #5', function (done) {
            request(insight + "/addr/mnk2URqujBqMEfhALMby1WZHoBRauW37Kg/utxo", function (error, response, body) {
                assert.equal(1, JSON.parse(body).length);
                done();
            });
        });
    });


});