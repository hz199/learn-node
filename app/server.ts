import Application from '../demo/koa/extend/application'
const app = new Application()

export default class Server {
  start () {
    app.use((ctx) => {
      ctx.body = 'hello world'
    })

    app.listen(3000, () => {
      console.log('listening on 3000')
      console.log('app run at: http://127.0.0.1:3000/')
    })
  }
}
