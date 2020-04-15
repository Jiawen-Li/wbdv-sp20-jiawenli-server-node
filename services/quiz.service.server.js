// let quizzes = require('./quizzes')
// const findAllQuizzes = () => quizzes
// const findQuizById = (quizId) =>
//     quizzes.find(quiz => quiz._id === quizId)
// module.exports = {
//     findAllQuizzes,
//     findQuizById
// }

const quizzesDao = require( '../daos/quizzes.dao.server' )
const findAllQuizzes = () => quizzesDao .findAllQuizzes()
const findQuizById = (qid) => quizzesDao .findQuizById(qid)

module.exports = { findAllQuizzes , findQuizById }
