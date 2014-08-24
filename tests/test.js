var assert = require('assert');

suite('test', function() {

	test('wrzuc wideo - klient', function(done, client) {
    client.eval(function() {
        Main.insert({
          Kod: 'xSHYlSxQyJM',
          time: Date.now(),
        });
    var link = Main.find({ Kod: 'xSHYlSxQyJM'}).fetch();
    emit('link', link);
    });

    client.once('link', function(link) {
         assert.equal(link.length, 1);
         done();
       });
  });

test('wrzuc wideo - serwer', function(done, server) {
    server.eval(function() {
        Main.insert({
          Kod: 'xSHYlSxQyJM',
          time: Date.now(),
        });
    var link = Main.find({ Kod: 'xSHYlSxQyJM'}).fetch();
    emit('link', link);
    });

    server.once('link', function(link) {
         assert.equal(link.length, 1);
         done();
       });
  });

test('wrzuc wideo, niepelny link - klient', function(done, client) {
    client.eval(function() {
        Main.insert({
          Kod: 'xSHY',
          time: Date.now(),
        });
    var link = Main.find({ Kod: 'xSHY'}).fetch();
    emit('link', link);
    });

    client.once('link', function(link) {
         assert.equal(link.length, 1);
         done();
       });
  });

test('wrzuc wideo, niepelny link - serwer', function(done, server) {
    server.eval(function() {
        Main.insert({
          Kod: 'xSHY',
          time: Date.now(),
        });
    var link = Main.find({ Kod: 'xSHY'}).fetch();
    emit('link', link);
    });

    server.once('link', function(link) {
         assert.equal(link.length, 1);
         done();
       });
  });

test('wrzuc wideo, zbyt dlugi link - klient', function(done, client) {
    client.eval(function() {
        Main.insert({
          Kod: 'xSHYlSxQyJMdsadawd',
          time: Date.now(),
        });
    var link = Main.find({ Kod: 'xSHYlSxQyJMdsadawd'}).fetch();
    emit('link', link);
    });

    client.once('link', function(link) {
         assert.equal(link.length, 1);
         done();
       });
  });

test('wrzuc wideo, zbyt dlugi link - serwer', function(done, server) {
    server.eval(function() {
        Main.insert({
          Kod: 'xSHYlSxQyJMdsadawd',
          time: Date.now(),
        });
    var link = Main.find({ Kod: 'xSHYlSxQyJMdsadawd'}).fetch();
    emit('link', link);
    });

    server.once('link', function(link) {
         assert.equal(link.length, 1);
         done();
       });
  });

});