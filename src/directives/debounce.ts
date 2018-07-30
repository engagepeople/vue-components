/*
 Usage:
 input(v-debounce='500', v-model.lazy='sample')

 Note: This will note work in a b-input
 a) input.form-control(v-debounce, v-model.lazy='value') OR
 b) b-input(v-debounce, :value='value', @change.native='value = $event.target.value')

*/

directive.debounce = (fn, delay) => {
  let timeoutID = null
  return function () {
    clearTimeout(timeoutID)
    let args = arguments
    let that = this
    timeoutID = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}

function directive (el, binding) {
  if (binding.value !== binding.oldValue) { // change debounce only if interval has changed
    el.oninput = directive.debounce(function (evt) {
      el.dispatchEvent(new Event('change'))
    }, parseInt(binding.value) || 400)
  }
}

module.exports = directive
