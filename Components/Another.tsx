export default async function Another() {
  await new Promise((resolve) => setTimeout(resolve, 2 * 1000));
  // throw new Error("주석을 풀어서 일부로 에러를 발생시켜보세요🤙");
  const value = Math.random();

  return (
    <>
      <div className="w-40 mr-20 bg-blue-600 h-80">어떤 컴포넌트 {value}</div>
    </>
  );
}
