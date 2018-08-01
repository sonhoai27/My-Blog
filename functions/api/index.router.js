module.exports = (app) => {
    app.use(`/api/about`, require('./router/about.router'))
}