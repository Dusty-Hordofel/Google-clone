import ImageSearchResults from "@/components/ImageSearchResults";

const ImageSearchPage = async ({ searchParams }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a slow connection, this prevents us from making too many requests, if not the API spits out. remove this line on production

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`
  );

  const data = await response.json();
  // console.log("🚀 ~ file: page.jsx:7 ~ ImageSearchPage ~ data:", data);
  const results = data.items;
  console.log("🚀 ~ file: page.jsx:13 ~ ImageSearchPage ~ results:", results);
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

  return <>{results && <ImageSearchResults results={data} />}</>;
};

export default ImageSearchPage;
