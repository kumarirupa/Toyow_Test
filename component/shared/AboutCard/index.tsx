import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAboutData } from "@redux/actions/aboutData";
import { About } from "@redux/reducers/aboutData";

import {
  ActionStatus,
  storeState,
} from "@redux/reducers/rootReducer";

export default function AboutCard() {
  const aboutData: About[] = useSelector(
    (state: storeState) => state.data.aboutData //fatch about data
  );

  const status: ActionStatus | null = useSelector(
    (state: storeState) => state.status.fetchAboutData //fetch status data
  );

  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true; //Preventing useEffect to twice double
    dispatch<any>(getAboutData());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
      {status === "success" ? (
        aboutData.map((e: About, i: number) => {
          //Iterating over about data came from Redux store
          return (
            <div
              className="flex flex-col block p-11 bg-card h-full gap-8"
              key={i}
            >
              <h2 className="text-2xl dark:text-black md:text-1.75vw">
                {e.title}
              </h2>

              <span className="text-customDesc dark:text-black text-base">
                {e.description}
              </span>

              <a
                href="#"
                className="dark:text-black text-sm font-normal about_text"
              >
                {e.type}
              </a>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
