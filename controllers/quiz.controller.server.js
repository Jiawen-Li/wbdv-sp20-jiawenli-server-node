// const quizService = require('../services/quiz.service.server')
//
// module.exports = function(app) {
//     app.get('/api/quizzes', (req, res) => {
//         res.send(quizService.findAllQuizzes())
//     })
//     app.get('/api/quizzes/:qid', (req, res) => {
//         const quizId = req.params['qid']
//         const quiz = quizService.findQuizById(quizId)
//         res.json(quiz)
//     })
// }

const quizzesService = require('../services/quizzes.services.server')

module.exports = function (app) {
    app.get ( '/api/quizzes' , (req, res) =>
        quizzesService .findAllQuizzes()
            . then (allQuizzes => res. json (allQuizzes)))
    app.get ( '/api/quizzes/:qzid' , (req, res) =>
        quizzesService .findQuizById(req. params [ 'qzid' ])
            . then (quiz => res. json (quiz)))
}
