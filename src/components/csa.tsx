import { defineComponent, ref } from 'vue'

/** 类型声明 */
interface PropsType {
  msg: string
}

/** 组合式 API */
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup () {
    const count = ref(0)
    return (props: PropsType) => (
      <div>
        <div>{props.msg}</div>
        <p>{count.value}</p>
      </div>
    )
  }
})

/* option API
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      count: 0
    }
  },
  render () {
    return (
      <div>
        <div>{this.msg}</div>
        <p>{this.count}</p>
      </div>
    )
  }
}) */

/* export default () => {
  return (
    <div>
      <h1>csa 函数式组件</h1>
    </div>
  )
} */
