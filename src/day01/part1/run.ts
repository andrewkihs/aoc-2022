import fs from "fs"
import readline from "readline"


const readAndParse = async (inputFile: string) => {
  const rl = readline.createInterface({
    input : fs.createReadStream(inputFile),
    output: process.stdout,
    terminal: false
  })

  let tempSum = 0
  const retArr= []
  for await (const line of rl) {
    const num = parseInt(line)
    if (num) {
      tempSum+=num
    } else {
      retArr.push(tempSum)
      tempSum = 0
    }
  }
  return retArr
}

(async ()=> {
  const data = await readAndParse("input.txt")
  console.log(Math.max(...data))
})()


