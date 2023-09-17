import React, { Component } from "react";
import styles from "./FinancialQuiz.module.css";

class FinancialQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          questionText: 'What is the "pink tax" in personal finance?',
          answerOptions: [
            "A tax specifically levied on women's income",
            "The extra cost women may pay for certain products and services",
            "A tax deduction available only to women",
          ],
          correctAnswer:
            "The extra cost women may pay for certain products and services",
        },
        {
          questionText:
            "True or False: Women tend to live longer than men on average. Does this impact their retirement savings needs?",
          answerOptions: ["True", "False"],
          correctAnswer: "True",
        },
        {
          questionText:
            "Why is it crucial for women to invest and build wealth over time?",
          answerOptions: [
            "Women generally earn more than men in the long run.",
            "Women tend to have more job security than men.",
            "Women live longer on average and may need more financial resources in retirement.",
          ],
          correctAnswer:
            "Women live longer on average and may need more financial resources in retirement.",
        },
        {
          questionText:
            "True or False: Historically, women have been less likely to invest in the stock market compared to men, which can impact their long-term wealth accumulation.",
          answerOptions: ["True", "False"],
          correctAnswer: "True",
        },
        {
          questionText: "What is impact investing?",
          answerOptions: [
            "Investing in companies with a focus on promoting gender equality and social responsibility.",
            "Investing in highly speculative stocks.",
            "Investing in luxury brands and products.",
          ],
          correctAnswer:
            "Investing in companies with a focus on promoting gender equality and social responsibility.",
        },
        {
          questionText:
            "How can student loan debt impact women differently than men?",
          answerOptions: [
            "Women typically receive more scholarships to cover their education costs.",
            "Women tend to earn higher salaries, making it easier to repay student loans.",
            "Women may carry a larger burden of student loan debt due to the gender pay gap.",
          ],
          correctAnswer:
            "Women may carry a larger burden of student loan debt due to the gender pay gap.",
        },
        {
          questionText:
            "True or False: Women should avoid using credit cards altogether to maintain good financial health.",
          answerOptions: ["True", "False"],
          correctAnswer: "False",
        },
        {
          questionText:
            "What is the 'gender pay gap,' and how can it affect a woman's ability to manage debt and save for the future?",
          answerOptions: [
            "The difference in pay between men and women, which can lead to women having less income to manage debt and save.",
            "A government program that provides financial assistance to women in debt.",
            "A tax benefit available only to women.",
          ],
          correctAnswer:
            "The difference in pay between men and women, which can lead to women having less income to manage debt and save.",
        },
        {
          questionText:
            "Why is it important for women to take an active role in retirement planning and not rely solely on a spouse or partner?",
          answerOptions: [
            "Women tend to outlive their spouses and may need to manage finances on their own.",
            "Women are generally better at managing finances than men.",
            "Women don't need to worry about retirement planning as much as men.",
          ],
          correctAnswer:
            "Women tend to outlive their spouses and may need to manage finances on their own.",
        },
        {
          questionText:
            "True or False: Women are eligible for Social Security benefits based on their own work history, even if they have never been married.",
          answerOptions: ["True", "False"],
          correctAnswer: "True",
        },
        {
          questionText:
            "What are some strategies women can use to catch up on retirement savings if they start later in life?",
          answerOptions: [
            "Delay retirement age and continue working longer.",
            "Rely solely on government pension plans.",
            "Depend on family support during retirement.",
          ],
          correctAnswer: "Delay retirement age and continue working longer.",
        },
        {
          questionText:
            "Why is it important for women to set financial goals and have a clear vision of their financial future?",
          answerOptions: [
            "Setting financial goals can help women accumulate wealth and achieve financial independence.",
            "Financial goals are not necessary for women.",
          ],
          correctAnswer:
            "Setting financial goals can help women accumulate wealth and achieve financial independence.",
        },
        {
          questionText:
            "True or False: Financial independence means that a woman should never rely on anyone else, including a spouse or partner, for financial support.",
          answerOptions: ["True", "False"],
          correctAnswer: "False",
        },
        {
          questionText:
            "How can networking and mentorship opportunities benefit women in their financial and career growth?",
          answerOptions: [
            "Networking and mentorship are not essential for women's financial success.",
            "They can provide valuable guidance, support, and access to career opportunities.",
            "Networking and mentorship are only relevant for men.",
          ],
          correctAnswer:
            "They can provide valuable guidance, support, and access to career opportunities.",
        },
      ],
      currentQuestion: 0,
      userAnswers: Array(15).fill(null),
      score: 0,
      showResults: false,
    };
  }

  handleGoToHomePage = () => {
    this.props.history.push("/"); // Navigate to the home route ("/")
  };

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
          <h3>Correct Answers:</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <strong>Question {index + 1}:</strong> {question.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    const currentQ = questions[currentQuestion];
    return (
      <div className={styles["quiz-container"]}>
        <h2 className={styles.question}>Financial Literacy Quiz for Women</h2>
        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <h3 className={styles.question}>{currentQ.questionText}</h3>
        {/* <button
          className={styles["go-home-button"]}
          onClick={this.handleGoToHomePage}
        >
          Go back to home
        </button> */}
        <div>
          {currentQ.answerOptions.map((answer, index) => (
            <button
              key={index}
              className={styles["answer-option"]}
              onClick={() => this.handleAnswerClick(answer)}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default FinancialQuiz;
