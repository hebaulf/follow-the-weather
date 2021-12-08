import * as ScrollArea from "@radix-ui/react-scroll-area";
import { stations } from "../components/Stations";
import styles from "../styles/Scroll.module.css";

export default ({ data }) => {
  return (
    <>
      <div>
        <ScrollArea.Root className={styles.ScrollArea}>
          <ScrollArea.Viewport className={styles.Viewport}>
            <div className={styles.Box}>
              {stations.map((station, index) => (
                <div className={styles.tag} data-index={index}>
                  <tag>{station.name}</tag>
                </div>
              ))}
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            orientation="horizontal"
            className={styles.Scrollbar}
          >
            <ScrollArea.Thumb className={styles.Thumb} />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
      <br></br>
      <br></br>
      <div>
        <ScrollArea.Root className={styles.ScrollArea}>
          <ScrollArea.Viewport className={styles.Viewport}>
            <div className={styles.Box}>
              <div className={styles.tag}>
                <div className={styles.Box}>
                  {data.hourly.map((hours, index) => (
                    <div className={styles.tag} data-index={index}>
                      <tag>
                        {new Date(hours.dt * 1000).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </tag>
                      <tag>
                        {hours.weather.map((weather) => (
                          <h3>{weather.main}</h3>
                        ))}
                      </tag>

                      <tag>{Math.round(hours.feels_like)} ℃</tag>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            orientation="horizontal"
            className={styles.Scrollbar}
          >
            <ScrollArea.Thumb className={styles.Thumb} />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const URL = `https://api.openweathermap.org/data/2.5/onecall`;
  const API_KEY = `da80dff9846628584a158c4c17eb8ca9`;
  const lat = 64.1355;
  const lon = -21.8954;
  const units = "metric";
  const res = await fetch(
    `${URL}?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,dayly&appid=${API_KEY}`
  );

  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
