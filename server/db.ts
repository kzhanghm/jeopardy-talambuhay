import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
       question: 'Who are these people?',
       imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrw0gbxmkscmf_oCk8XuUAw3-ad1JwWcuxqwmZxYBiRS125G5I",
       answer: 'The Powerpuff Girls'
    },
    {
        points: 200,
        question: 'Who is this?',
        imgSrc: "https://en.wikipedia.org/wiki/Lexie_Grey",
        answer: 'Lexie Grey'
    },
    {
        points: 300,
        question:
            'What Ivy League school has the highest Native American enrollment (a whoppping 1%)?',
        answer: 'Dartmouth',
    },
    {
        points: 400,
        question: 'Who wrote the Critique of Pure Reason?',
        answer: 'Immanuel Kant',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'Which country is the most similar to the U.S. in terms of land mass?',
        answer: 'China',
        },
        {
            points: 100,
            question:
                'Tahini is made from which seed?',
            imgSrc: 'https://www.aforkstale.com/wp-content/uploads/how-to-make-homemade-tahini-1200-x-1200.jpg',
            answer: 'Sesame',
        },
        {
            points: 200,
            question: 'What programming language is the below code?',
            imgSrc: '/programming_language.png',
            answer: 'Javascript',
        },
        {
            points: 300,
            question:
                'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
            imgSrc:
                "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
            answer: 'Italy',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
    }
]);


const categories = [
    {
        title: 'Ms Feng\'s Past',
        questions: pastQuestions
    },
    {
        title: `Ms. Feng's Present`,
        questions: presentQuestions
    },
    {
        title: "Ms. Feng's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}