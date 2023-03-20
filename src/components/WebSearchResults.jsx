// import PaginationButtons from "./PaginationButtons";

import Link from "next/link";
import Parser from "html-react-parser";

export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52 bg-yellow-200">
      <p className="mt-3 mb-5 text-sm text-gray-600">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className="max-w-xl mb-8" key={result.link}>
          <div className="flex flex-col group">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="text-xl font-medium text-blue-800 truncate group-hover:underline decoration-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          {/* Google Send Us a html result , we use "html-react-parser" to transform HTML ins React elements*/}
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      {/* <PaginationButtons /> */}
    </div>
  );
}
