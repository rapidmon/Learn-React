const name = '이호준'
const age = 10

function 인사(문구, 이름, 나이){
    // console.log(문구)
    console.log(문구, 이름, 나이)
    return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
}

const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`

console.log(인사문구)

//(3) ['이름은 ', '이고 나이는 ', '입니다.', raw: Array(3)] '이호준' 20
//이름은 이호준이고 나이는 40입니다.

const name1 = '이호준'
const age1 = 10

function 인사(문구, 이름, 나이){
    // console.log(문구)
    console.log(문구, 이름, 나이)
    return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
}

const 인사문구1 = 인사(`이름은 ${name1}이고 나이는 ${age1+age1}입니다.`)

console.log(인사문구1)

// 이름은 이호준이고 나이는 20입니다. undefined undefined
// 이undefined름NaN은