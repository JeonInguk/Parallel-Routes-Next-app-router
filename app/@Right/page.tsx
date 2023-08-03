export default async function Right() {
  await new Promise((resolve) => setTimeout(resolve, 2 * 1000));
  // throw new Error('주석을 풀어서 일부로 에러를 발생시켜보세요🤙')
  const value = Math.random();

  return (
    <>
      <div className="w-40 bg-red-400 h-80">오른쪽 {value}</div>
    </>
  );
}
