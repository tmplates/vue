const fs = require('fs')
const path = require('path')

module.exports = async function(prompts) {
  const fvs = await prompts({
    name: 'value',
    active: '3.x',
    initial: true,
    type: 'toggle',
    inactive: '2.x',
    message: 'Select Vue.js Version?'
  })

  const lib = await prompts({
    name: 'value',
    initial: true,
    type: 'confirm',
    message: 'Create a library project?'
  })

  if (fvs.value) {
    if (lib.value) {
      return {
        ts: true,
        lib: true,
        test: true,
        fvs: '3.x',
        dirs: ['src'],
        framework: 'vue',
        vscode: ['vue.volar'],
        lint: ['stylelint', 'commitlint', 'eslint'],
        files: [
          ['src/index.ts', fs.readFileSync(resolve('files/v3/lib/src/index.ts'))],
          ['src/button.vue', fs.readFileSync(resolve('files/v3/lib/src/button.vue'))],
          ['test/hello.test.ts', fs.readFileSync(resolve('files/v3/lib/test/hello.test.ts'))]
        ]
      }
    } else {
      return {
        ts: true,
        fvs: '3.x',
        framework: 'vue',
        vscode: ['vue.volar'],
        dirs: ['src', 'public'],
        lint: ['stylelint', 'commitlint', 'eslint'],
        files: [
          ['index.html', fs.readFileSync(resolve('files/v3/business/index.html'))],
          ['src/main.ts', fs.readFileSync(resolve('files/v3/business/src/main.ts'))],
          ['src/App.vue', fs.readFileSync(resolve('files/v3/business/src/App.vue'))],
          ['src/pages/home.vue', fs.readFileSync(resolve('files/v3/business/src/pages/home.vue'))],
          ['src/router/index.ts', fs.readFileSync(resolve('files/v3/business/src/router/index.ts'))]
        ]
      }
    }
  } else {
    if (lib.value) {
      return {
        ts: true,
        lib: true,
        test: true,
        fvs: '2.x',
        framework: 'vue',
        dirs: ['src', 'public'],
        vscode: ['octref.vetur'],
        lint: ['stylelint', 'commitlint', 'eslint'],
        files: [
          ['src/index.ts', fs.readFileSync(resolve('files/v2/lib/src/index.ts'))],
          ['src/button.vue', fs.readFileSync(resolve('files/v2/lib/src/button.vue'))],
          ['test/hello.test.ts', fs.readFileSync(resolve('files/v2/lib/test/hello.test.ts'))]
        ]
      }
    } else {
      return {
        ts: true,
        fvs: '2.x',
        framework: 'vue',
        dirs: ['src', 'public'],
        vscode: ['octref.vetur'],
        lint: ['stylelint', 'commitlint', 'eslint'],
        files: [
          ['src/main.ts', fs.readFileSync(resolve('files/v2/business/src/main.ts'))],
          ['src/App.vue', fs.readFileSync(resolve('files/v2/business/src/App.vue'))],
          ['public/index.html', fs.readFileSync(resolve('files/v2/business/public/index.html'))],
          ['src/pages/home.vue', fs.readFileSync(resolve('files/v2/business/src/pages/home.vue'))],
          ['src/router/index.ts', fs.readFileSync(resolve('files/v2/business/src/router/index.ts'))]
        ]
      }
    }
  }
}

function resolve(filePath) {
  return path.join(__dirname, filePath)
}
