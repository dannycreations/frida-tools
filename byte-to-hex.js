function byteToHex(byte) {
  var HexClass = Java.use('org.apache.commons.codec.binary.Hex')
  var StringClass = Java.use('java.lang.String')
  var hexChars = HexClass.encodeHex(byte)
  return StringClass.$new(hexChars).toString()
}
