function byteToString(byte) {
  var result = ''
  var buffer = Java.array('byte', byte)
  for (var i = 0; i < buffer.length; ++i) {
    result += (String.fromCharCode(buffer[i] & 0xff))
  }
  return result
}
