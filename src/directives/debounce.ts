/*
 Usage:
 input(v-debounce='500', v-model.lazy='sample')

 Note: This will not work in a b-input
 a) input.form-control(v-debounce, v-model.lazy='value') OR
 b) b-input(v-debounce, :value='value', @change.native='value = $event.target.value')

*/
type IDebounceCallBack = (action: Event) => void

export interface IDebounceBinding {
    value: string
    oldValue: string
}

const debounce = (fn: IDebounceCallBack, delay: number) => {
    let timeoutID: number
    return function(): void { // return function(this: HTMLInputElement): void {
        clearTimeout(timeoutID)
        const args = arguments
        const that = this
        timeoutID = window.setTimeout(() => {
            fn.apply(that, args)
        }, delay)
    }
}

export default (el: HTMLInputElement, binding: IDebounceBinding) => {
    if (binding.value !== binding.oldValue) {
        el.oninput = debounce((evt: Event) => {
            el.dispatchEvent(new Event('change'))
        }, parseInt(binding.value, 10) || 400)
    }
}
