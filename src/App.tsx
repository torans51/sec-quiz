import { Component, createSignal, For, Show } from 'solid-js';
import { createStore } from "solid-js/store";
import { FaRegularCircleDot, FaRegularCircle } from 'solid-icons/fa'

import { parseHTML, Question } from './quiz/parser';

function shuffle(a: Array<Partial<Question>>): Array<Partial<Question>> {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const questions = parseHTML()

function shuffleQuestions(num: number) {
  return setQuizQuestions(shuffle(questions).slice(0, num))
}

const [numOfQuestions, setNumOfQuestions] = createSignal<number>(5)
const [quizQuestions, setQuizQuestions] = createStore<Partial<Question>[]>(shuffle(questions).slice(0, numOfQuestions()))
// key questionId, value selectedChoiceId
const [answers, setAnswer] = createStore<Record<number, number>>({})
const [viewResult, setViewResult] = createSignal<boolean>(false)
const [result, setResult] = createStore<{
  correct: number,
  wrong: number,
  notAnswered: number,
  successPercentage: number
}>({
  correct: 0,
  wrong: 0,
  notAnswered: quizQuestions.length,
  successPercentage: 0
})

function computeResult() {
  let correct = 0;
  let wrong = 0;
  let notAnswered = 0;
  for (const question of quizQuestions) {
    if (!answers[question.id ?? 0]) {
      notAnswered++
      continue
    }

    const correctChoice = question.choices?.find(c => c.correct)
    if (correctChoice?.id === answers[question.id ?? 0]) {
      correct++
    } else {
      wrong++
    }
  }
  setResult({
    correct,
    wrong,
    notAnswered,
    successPercentage: correct / quizQuestions.length
  })
}

const App: Component = () => {

  return (
    <div class="bg-slate-800 text-white ">

      <div class="md:container md:mx-auto p-4">
        <div class="text-3xl px-3 py-6">Test sulla sicurezza sul lavoro</div>

        <div class="text-xl px-3 py-5 flex gap-4 items-center">
          <p>Numero di domande :</p>
          <For each={[5, 10, 20, 30, 40, 50]}>
            {(num) => (
              <div class="flex gap-2 items-center">
                {num}
                <Show when={numOfQuestions() === num}><FaRegularCircleDot /></Show>
                <Show when={numOfQuestions() !== num}>
                  <FaRegularCircle
                    class="hover:cursor-pointer"
                    onClick={() => {
                      setNumOfQuestions(num)
                      shuffleQuestions(num)
                    }} />
                </Show>
              </div>
            )}
          </For>
        </div>

        <For each={quizQuestions}>
          {(question, i) => (
            <div class="px-3 py-6 mb-2 border rounded-md">
              <div class="text-2xl mb-2">
                {i() + 1} - {question.text}
              </div>
              <Show when={question.choices}>
                <For each={question.choices}>
                  {(choice) => (
                    <div
                      class="flex items-center gap-2 px-3 py-2 hover:cursor-pointer"
                      classList={{
                        "bg-red-500": viewResult() && choice.id === answers[question.id ?? 0] && !choice.correct,
                        "bg-green-500": viewResult() && choice.correct,
                        "hover:cursor-default": viewResult()
                      }}
                      onClick={() => {
                        if (viewResult()) return

                        setAnswer(question.id ?? 0, choice.id)
                      }}>
                      <div>
                        <Show when={choice.id === answers[question.id ?? 0]}><FaRegularCircleDot /></Show>
                        <Show when={choice.id !== answers[question.id ?? 0]}><FaRegularCircle /></Show>
                      </div>
                      <div>
                        {choice.text}
                      </div>
                      <div>

                      </div>
                    </div>
                  )}
                </For>
              </Show>
            </div>
          )}
        </For>

        <Show when={viewResult()}>
          <div class="flex flex-col items-center justify-center gap-2 py-4">
            <div>Corrette: {result.correct}</div>
            <div>Errate: {result.wrong}</div>
            <div>Non date: {result.notAnswered}</div>
            <div>Percentuale: {Number(result.successPercentage * 100).toFixed(0)}%</div>
          </div>
        </Show>

        <div class="flex justify-center py-5">
          <Show when={!viewResult()}>
            <button class="px-6 py-4 text-2xl border rounded-md"
              onClick={() => {
                computeResult()
                setViewResult(true)
              }}>Correggi</button>
          </Show>
          <Show when={viewResult()}>
            <div>
            </div>
            <button class="px-6 py-4 text-2xl border rounded-md"
              onClick={() => {
                setViewResult(false)
                setAnswer({})
                setQuizQuestions(shuffle(questions).slice(0, numOfQuestions()))
                window.scrollTo(0, 0)
              }}>
              Riprova
            </button>
          </Show>
        </div>
      </div>

    </div>
  )
};

export default App;
