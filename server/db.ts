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
        imgSrc: "https://media1.popsugar-assets.com/files/thumbor/QflVdEKpgsp6NdVnj29I7h7uwxA=/fit-in/792x543/top/filters:format_auto():upscale()/2021/03/26/579/n/1922283/tmp_EnJWw0_a17c76ad6ae690f7_TCDGRAN_EC343.jpg",
        answer: 'Lexie Grey',
    },
    {
        points: 300,
        question: 'Who is the artist of this piece?',
        imgSrc: "https://www.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimg2.bonhams.com%2Fimage%3Fsrc%3DImages%2Flive%2F2023-07%2F11%2F25337812-1-4.jpg%26height%3D430%26quality%3D90&w=2400&q=75",
        answer: 'Margaret Keane',
    },
    {
        points: 400,
        question: 'What state is this flag?',
        imgSrc: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/1280px-Flag_of_Alaska.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
        answer: 'Alaska',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 300,
            question: 'Who is this character and what show is she from?',
            imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/2/24/Ikki.jpg",
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
        answer: 'Sheep or goat guts',
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
        answer: 'Ray Bradbury',
    },
    {
        points: 200,
        question: 'Of what nationality is the composer Francis Poulenc?',
        answer: 'French',
    },
    {
        points: 300,
        question: 'What town in New Jersey closest to the George Washington Bridge has a Mango Mango?',
        answer: "Fort Lee",
    },
    {
        points: 400,
        question: 'What is the southernmost city of the contiguous United States?',
        answer: 'Key West',
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