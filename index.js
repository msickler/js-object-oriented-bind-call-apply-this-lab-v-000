function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  fn()
  return .call(thisValue, arg)
}
