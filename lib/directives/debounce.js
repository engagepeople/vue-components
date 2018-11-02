"use strict";
/*
 Usage:
 input(v-debounce='500', v-model.lazy='sample')

 Note: This will not work in a b-input
 a) input.form-control(v-debounce, v-model.lazy='value') OR
 b) b-input(v-debounce, :value='value', @change.native='value = $event.target.value')

*/
// type IDebounceCallBack = (action: Event) => void
//
// export interface IDebounceBinding {
//     value: string
//     oldValue: string
// }
//
// const debounce = (fn: IDebounceCallBack, delay: number) => {
//     let timeoutID: number
//     // tslint:disable:no-any
//     return function(this: HTMLElement): void {
//         clearTimeout(timeoutID)
//         const args = arguments
//         timeoutID = window.setTimeout(() => {
//             fn.apply(this, args)
//         }, delay)
//     }
// }
//
// export default (el: HTMLElement, binding: IDebounceBinding) => {
//     if (binding.value !== binding.oldValue) {
//         el.oninput = debounce((evt: Event) => {
//             el.dispatchEvent(new Event('change'))
//         }, parseInt(binding.value, 10) || 400)
//     }
// }
//# sourceMappingURL=debounce.js.map