import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Online Academy`;
  }, [title]);
};
export default useTitle;
