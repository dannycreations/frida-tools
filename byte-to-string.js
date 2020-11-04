function byteToString(byte) {
  const result = ''
  const buffer = Java.array('byte', byte)
  for (let i = 0; i < buffer.length; ++i){
    result += (String.fromCharCode(buffer[i] & 0xff))
  }
  return result
}
