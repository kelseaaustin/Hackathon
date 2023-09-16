import React, { Component } from "react";
import styles from "./FinancialQuiz.module.css";

class FinancialQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          questionText: 'What does "APR" stand for?',
          answerOptions: [
            "Annual Personal Rate",
            "Annual Percentage Rate",
            "Average Payment Return",
            "All-Purpose Reserve",
          ],
          correctAnswer: "Annual Percentage Rate",
        },
        {
          questionText: "Which of the following is considered a liquid asset?",
          answerOptions: [
            "Real Estate",
            "Stocks",
            "Savings Account",
            "Jewelry",
          ],
          correctAnswer: "Savings Account",
        },
        {
          questionText: "What is the primary purpose of a budget?",
          answerOptions: [
            "To track your income",
            "To control your spending",
            "To maximize debt",
            "To invest in stocks",
          ],
          correctAnswer: "To control your spending",
        },
        {
          questionText:
            "Which type of investment carries the highest level of risk?",
          answerOptions: [
            "Savings Account",
            "Government Bonds",
            "Stocks",
            "Certificates of Deposit (CDs)",
          ],
          correctAnswer: "Stocks",
        },
        {
          questionText: 'What does "401(k)" refer to?',
          answerOptions: [
            "A type of credit card",
            "A retirement savings plan offered by employers",
            "The stock market index",
            "A high-interest savings account",
          ],
          correctAnswer: "A retirement savings plan offered by employers",
        },
        {
          questionText:
            "What is the key advantage of diversifying your investment portfolio?",
          answerOptions: [
            "Higher taxes",
            "Lower returns",
            "Reduced risk",
            "No fees",
          ],
          correctAnswer: "Reduced risk",
        },
        {
          questionText:
            "What is the recommended emergency fund size for most individuals?",
          answerOptions: [
            "1 month of expenses",
            "3-6 months of expenses",
            "1 year of expenses",
            "It varies from person to person",
          ],
          correctAnswer: "3-6 months of expenses",
        },
        {
          questionText:
            "What is the difference between a debit card and a credit card?",
          answerOptions: [
            "Debit cards have a credit limit, while credit cards don't.",
            "Debit cards withdraw money directly from your bank account, while credit cards allow you to borrow money.",
            "Debit cards are not accepted at most stores, while credit cards are.",
            "Debit cards have higher interest rates than credit cards.",
          ],
          correctAnswer:
            "Debit cards withdraw money directly from your bank account, while credit cards allow you to borrow money.",
        },
        {
          questionText: "What is the main benefit of a fixed-rate mortgage?",
          answerOptions: [
            "The interest rate stays the same throughout the loan term.",
            "You can pay off the loan early without penalty.",
            "It requires a smaller down payment.",
            "The interest rate adjusts with market fluctuations.",
          ],
          correctAnswer:
            "The interest rate stays the same throughout the loan term.",
        },
        {
          questionText: "What is inflation?",
          answerOptions: [
            "A decrease in the overall level of prices",
            "The rate at which money increases in value",
            "An increase in the overall level of prices",
            "The interest rate on a savings account",
          ],
          correctAnswer: "An increase in the overall level of prices",
        },
      ],
      currentQuestion: 0,
      userAnswers: Array(10).fill(null),
      score: 0,
      showResults: false,
    };
  }

  handleAnswerClick = (selectedAnswer) => {
    const { currentQuestion, questions, userAnswers } = this.state;

    // Update the user's answer for the current question
    userAnswers[currentQuestion] = selectedAnswer;

    this.setState({ userAnswers });

    // Check if the selected answer is correct and update the score
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
      }));
    }

    // Move to the next question or show results if it's the last question
    if (currentQuestion < questions.length - 1) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
      }));
    } else {
      this.setState({ showResults: true });
    }
  };

  render() {
    const { questions, currentQuestion, userAnswers, score, showResults } =
      this.state;

    if (showResults) {
      return (
        <div className={styles["quiz-container"]}>
          <h2>Quiz Results</h2>
          <p>
            You scored {score} out of {questions.length}.
          </p>
        </div>
      );
    }

    const currentQ = questions[currentQuestion];

    return (
      <div className={styles["quiz-container"]}>
        <h2 className={styles.question}>Financial Literacy Quiz</h2>
        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <h3 className={styles.question}>{currentQ.questionText}</h3>
        <ul>
          {currentQ.answerOptions.map((answer, index) => (
            <li key={index}>
              <button
                className={styles["answer-option"]}
                onClick={() => this.handleAnswerClick(answer)}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FinancialQuiz;
