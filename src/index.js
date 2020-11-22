import './assets/index.scss';
import './assets/mini.css';
// eslint-disable-next-line
import url from './assets/icon1.png'
import jpg from './assets/1.jpg'


console.log(101)
console.log(102)
console.log(url)
console.log(jpg)
console.log(process.env.NODE_ENV)

//eslint-disable-next-line
const fun = () => {
  console.log('fun')
  let a = 1
  return new Promise(((res, rej) => {
    if (a) {
      setTimeout(() => {
        alert('成功调用Promise')
        res(1)
      }, 2000);
    } else {
      rej(2)
    }
  }))
}

fun(2)

console.log(fun)
// const f = new fun();
// console.log(f)
fun().then(res => {
  console.log('promise', res)
})
