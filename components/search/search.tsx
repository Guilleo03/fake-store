import { FC, useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";

const Search: FC = () => {
  const [autoCompleteState, setAutoCompleteState] = useState<any>({
    collections: [],
    isOpen: false,
  });

  const autocomplete = createAutocomplete({
    onStateChange: ({ state }) => setAutoCompleteState(state),
    getSources: () => [
      {
        sourceId: "products",
        getItems: ({ query }) => {
          if (!!query) {
            return;
          }
        },
      },
    ],
  });

  return (
    <div>
      <form>
        <input type="search" placeholder="Search" />
      </form>
    </div>
  );
};

export default Search;
