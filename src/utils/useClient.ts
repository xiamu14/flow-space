import { useEffect, useRef } from "react";

export default function useClient(action: () => void) {
  const actionRef = useRef(action);
  useEffect(() => {
    if (typeof window !== "undefined") {
      actionRef.current();
    }
  }, []);
}
