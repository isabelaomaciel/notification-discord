const { exec } = require('child_process')

console.log(__dirname);

const htmlFilePath = 'src/index.html'

exec(`start ${htmlFilePath}`, (error, stdout, stderr) => {
   if (error) {
      console.error(`Error opening`, error)
      return
   }

   console.log(`Opened ${htmlFilePath} successfully`)
})