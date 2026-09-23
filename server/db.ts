import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
       question: 'Who are these people?',
       imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrw0gbxmkscmf_oCk8XuUAw3-ad1JwWcuxqwmZxYBiRS125G5I",
       answer: 'The Powerpuff Girls',
    },
    {
        points: 200,
        question: 'Who is this?',
        imgSrc: "https://en.wikipedia.org/wiki/Lexie_Grey",
        answer: 'Lexie Grey',
    },
    {
        points: 300,
        question: 'Who is the artist of this piece?',
        imgSrc: "https://www.goretro.com/2015/01/the-weird-world-of-walter-and-margaret.html",
        answer: 'Margaret Keane',
    },
    {
        points: 400,
        question: 'What state is this flag?',
        imgSrc: "https://en.wikipedia.org/wiki/Flag_of_Alaska",
        answer: 'Alaska',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 300,
            question: 'Who is this character and what show is she from?',
            imgSrc: "https://www.ign.com/wikis/avatar-the-last-airbender-legend-of-korra/Ikki",
            answer: 'Ikki' ,       
        },
        {
            points: 100,
            question:
                'Which country is the most similar to the U.S. in terms of land mass?',
        answer: 'China',
        },
        {
            points: 400,
            question: 'What were cello strings originally made out of before the mid 20th century?',
        answer: 'Stretched sheep or goat guts',
        },
        {
            points: 200,
            question: 'Where was the 1776 Retreat of the American Revolution, led by George Washington?',
        answer: 'Bergen County',
            
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Who is the author of Fahrenheit 451?',
        answer: 'Ray Bradbury'
    }   
    {
        points: 200,
        question: 'What is the southernmost city of the contiguous United States?',
        answer: 'Key West, Florida',
    }
    {
        points: 300,
        question: 'Which dessert place am I planning on going to this weekend in Fort Lee, New Jersey?',
        answer: "Mango Mango",
    }
    {
        points: 400,
        question: 'Of what nationality is the composer Francis Poulenc?',
        answer: 'French'
    }
]);


const categories = [
    {
        title: 'Katherine\'s Past',
        questions: pastQuestions
    },
    {
        title: `Katherine's Present`,
        questions: presentQuestions
    },
    {
        title: "Katherine's Future",
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