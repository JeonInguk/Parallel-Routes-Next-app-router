"use client"; // 에러 컴포넌트는 항상 Client Component여야 합니다.

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h2>Left 컴포넌트에서 에러 발생했음!</h2>
      <button onClick={() => reset()}>다시 시도하기</button>
    </>
  );
}
