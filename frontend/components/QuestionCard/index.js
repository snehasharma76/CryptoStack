import Link from "next/link";

const QuestionCard = ({ answers, isAnswered, questionId, question }) => {
  return (
    <Link href={`/${questionId}`}>
      <a className="p-[30px] shadow rounded-[10px]">
        <h2 className="font-medium text-[18px]">{question}</h2>
        <p className="text-gray-600 text-base mt-[16px]">
          {isAnswered
            ? answers?.[0]?.length > 110
              ? `${answers?.[0]?.slice(0, 107)}...`
              : answers?.[0]
            : "No accepted asnwers yet. Write an answer and get a chance to win CELO tokens!"}
        </p>
        <Link href={`/${questionId}`}>
          <a className="inline-block text-white font-bold bg-blue-500 px-[20px] py-[10px] rounded mt-[20px]">
            {isAnswered ? "Checkout the answer" : "Write an Answer"}
          </a>
        </Link>
      </a>
    </Link>
  );
};

export default QuestionCard;
