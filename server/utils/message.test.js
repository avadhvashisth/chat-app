const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Avadh';
    var text = 'we are in the next room';
    var res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(res.createdAt).toBeTruthy();
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Avadh';
    var latitude = 12;
    var longitude = 13;
    var res = generateLocationMessage(from, latitude, longitude);
    expect(res.from).toBe(from);
    expect(res.url).toBe('https://www.google.com/maps?q=12,13');
    expect(res.createdAt).toBeTruthy();
  });
});
