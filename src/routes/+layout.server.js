import { quizzes } from '../data.json';

export function load({params}) {

    return {
        subject: quizzes.find((quiz) => quiz.title.toLowerCase() === params.slug)
    }
}