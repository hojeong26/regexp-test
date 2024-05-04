let str = `
010-1234-5678
the@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen&
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`

console.log(
    str.match(/[fox]/g)
)

// const regexp = /\.$/gim
// console.log(str.match(regexp))

// // const regexp = new RegExp('the','gi')
// const regexp = /fox/gi
// // console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)