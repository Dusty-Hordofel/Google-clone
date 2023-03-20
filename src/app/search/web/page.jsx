const WebSearchPage = async ({ searchParams }) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  const data = await response.json();
  console.log("🚀 ~ file: page.jsx:7 ~ WebSearchPage ~ data:", data);
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="mb-4 text-3xl">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <>{results && results.map((result) => <h1>{result.title}</h1>)}</>;
  // return <>{results && <WebSearchResults results={data} />}</>;
};

export default WebSearchPage;
