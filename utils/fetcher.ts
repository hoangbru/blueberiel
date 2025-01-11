export const fetcher = async (path: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);
  const data = await res.json();

  return data;
};
