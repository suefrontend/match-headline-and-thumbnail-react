"use client";

import React, { useRef, useEffect } from "react";
import Headline from "@components/Headline";
import ThumbnailList from "@components/ThumbnailList";

function Home() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  const items = [
    // {
    //   title:
    //     "Negotiations to end B.C. ports strike stall as retailers warn of continent-wide impact",
    //   pubDate: "2022-06-18 12:02:05",
    //   link: "https://www.cbc.ca/news/canada/british-columbia/port-strike-1.6895907?cmp=rss",
    //   guid: "1.6493561",
    //   author: "",
    //   thumbnail: "",
    //   description:
    //     '\n<img src="https://i.cbc.ca/1.6895919.1688417271!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_460/port-strike-vancouver.jpg" alt="PORT STRIKE VANCOUVER" width="460" title="An International Longshore and Warehouse Union worker pickets outside of Pacific Coast Terminals in Port Moody, British Columbia on Monday, July 3, 2023." height="259"><p></p>\n',
    //   content:
    //     '\n<img src="https://i.cbc.ca/1.6895919.1688417271!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_460/port-strike-vancouver.jpg" alt="PORT STRIKE VANCOUVER" width="460" title="An International Longshore and Warehouse Union worker pickets outside of Pacific Coast Terminals in Port Moody, British Columbia on Monday, July 3, 2023." height="259"><p></p>\n',
    //   enclosure: {},
    //   categories: ["News"],
    // },
    // {
    //   title:
    //     "Destructive Alberta tornado stronger than 95% that touch down in Canada, researcher says",
    //   pubDate: "2023-07-03 00:06:11",
    //   link: "https://www.cbc.ca/news/canada/calgary/tornado-researcher-connell-miller-carstairs-didsbury-ef2-1.6895578?cmp=rss",
    //   guid: "1.6895176",
    //   author: "",
    //   thumbnail: "",
    //   description:
    //     '\n<img src="https://i.cbc.ca/1.6895048.1688410745!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/tornado.jpg" alt="tornado" width="460" title="A house is no longer visible after a tornado in central Alberta. A woman was rescued from her basement in this area Saturday. " height="259"><p></p>\n',
    //   content:
    //     '\n<img src="https://i.cbc.ca/1.6895048.1688410745!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/tornado.jpg" alt="tornado" width="460" title="A house is no longer visible after a tornado in central Alberta. A woman was rescued from her basement in this area Saturday. " height="259"><p></p>\n',
    //   enclosure: {},
    //   categories: ["News/Canada"],
    // },
    {
      title:
        "Hundreds displaced as staff residence in Lake Louise engulfed in flames",
      pubDate: "2023-07-03 20:57:13",
      link: "https://www.cbc.ca/news/canada/calgary/lake-louise-alberta-parks-canada-fire-environment-1.6895901?cmp=rss",
      guid: "1.6895901",
      author: "Omar Sherif",
      thumbnail: "",
      description:
        '\n<img src="https://i.cbc.ca/1.6896108.1688424956!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/july-3rd-lake-louise-fire.jpg" alt="July 3rd Lake Louise fire" width="460" title="The Charleston Residence in Lake Louise was engulfed in fire on Monday afternoon." height="259"><p>Large, three-storey log building evacuated with up to 200 residents being displaced.</p>\n',
      content:
        '\n<img src="https://i.cbc.ca/1.6896108.1688424956!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/july-3rd-lake-louise-fire.jpg" alt="July 3rd Lake Louise fire" width="460" title="The Charleston Residence in Lake Louise was engulfed in fire on Monday afternoon." height="259"><p>Large, three-storey log building evacuated with up to 200 residents being displaced.</p>\n',
      enclosure: {},
      categories: ["News/Canada/Calgary"],
    },
    {
      title: "Wimbledon visitors say lengthy queues are part of the attraction",
      pubDate: "2023-07-03 23:34:04",
      link: "https://www.cbc.ca/player/play/2241285187999?cmp=rss",
      guid: "1.6896120",
      author: "",
      thumbnail: "",
      description:
        '\n<img src="https://i.cbc.ca/1.6896130.1688426957!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/wimbledon-queue-07-03-2023.jpg" alt="wimbledon-queue-07-03-2023" width="460" title="The Wimbledon Championships draw tennis fans from far and wide to see some of the world\'s best players competing on the famous grass courts. Some visitors say lengthy queues are part of the attraction, despite needing to wake up extra early to get a good position in line." height="259"><p></p>\n',
      content:
        '\n<img src="https://i.cbc.ca/1.6896130.1688426957!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/wimbledon-queue-07-03-2023.jpg" alt="wimbledon-queue-07-03-2023" width="460" title="The Wimbledon Championships draw tennis fans from far and wide to see some of the world\'s best players competing on the famous grass courts. Some visitors say lengthy queues are part of the attraction, despite needing to wake up extra early to get a good position in line." height="259"><p></p>\n',
      enclosure: {},
      categories: [],
    },
    {
      title: "Supermoon shines over ancient Greek temple",
      pubDate: "2023-07-03 23:24:00",
      link: "https://www.cbc.ca/news/world/supermoon-shines-over-ancient-greek-temple-1.6896147?cmp=rss",
      guid: "1.6896147",
      author: "",
      thumbnail: "",
      description:
        '\n<img src="https://i.cbc.ca/1.6896147.1688428802!/httpImage/image.jpg_gen/derivatives/16x9_460/image.jpg" alt="Supermoon shines over ancient Greek temple" width="460" title="The temple of Poseidon in Cape Sounion, Greece, was illuminated by the light of a supermoon that crept into the night sky, striking an impressive sight for spectators who were able to catch the experience." height="259"><p>The temple of Poseidon in Cape Sounion, Greece, was illuminated by the light of a supermoon that crept into the night sky, striking an impressive sight for spectators who were able to catch the experience.</p>\n',
      content:
        '\n<img src="https://i.cbc.ca/1.6896147.1688428802!/httpImage/image.jpg_gen/derivatives/16x9_460/image.jpg" alt="Supermoon shines over ancient Greek temple" width="460" title="The temple of Poseidon in Cape Sounion, Greece, was illuminated by the light of a supermoon that crept into the night sky, striking an impressive sight for spectators who were able to catch the experience." height="259"><p>The temple of Poseidon in Cape Sounion, Greece, was illuminated by the light of a supermoon that crept into the night sky, striking an impressive sight for spectators who were able to catch the experience.</p>\n',
      enclosure: {},
      categories: ["News/World"],
    },
    {
      title:
        "Quebec City woman among 2 missing after flood, landslide in town near Saguenay, Que.",
      pubDate: "2023-07-03 18:45:18",
      link: "https://www.cbc.ca/news/canada/montreal/saguenay-riviere-eternite-missing-landslide-flood-1.6895592?cmp=rss",
      guid: "1.6895592",
      author: "Erika Morris",
      thumbnail: "",
      description:
        '\n<img src="https://i.cbc.ca/1.6895653.1688408054!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/riviere-eternite-road.jpg" alt="Rivière-Éternité road" width="460" title="Landslides and flooding caused Route 170 to collapse." height="259"><p>The search for two missing people continues Monday after the town of Rivière-Éternité, Que., was hit by flooding and landslides over the weekend. </p>\n',
      content:
        '\n<img src="https://i.cbc.ca/1.6895653.1688408054!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/riviere-eternite-road.jpg" alt="Rivière-Éternité road" width="460" title="Landslides and flooding caused Route 170 to collapse." height="259"><p>The search for two missing people continues Monday after the town of Rivière-Éternité, Que., was hit by flooding and landslides over the weekend. </p>\n',
      enclosure: {},
      categories: ["News/Canada/Montreal"],
    },
    // {
    //   title:
    //     "'The abuse of power is obvious,' says Hong Kong activist named in overseas arrest warrant",
    //   pubDate: "2023-07-03 22:47:34",
    //   link: "https://www.cbc.ca/radio/asithappens/hong-kong-activist-nathan-law-warrant-1.6895929?cmp=rss",
    //   guid: "1.6895929",
    //   author: "Keena Alwahaidi",
    //   thumbnail: "",
    //   description:
    //     '\n<img src="https://i.cbc.ca/1.6895941.1688417643!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_460/italy-china-protest.jpg" alt="Italy China Protest" width="460" title="Hong Kong activist Nathan Law takes part in a protest during a meeting of Chinese Foreign Minister Wang Yi with Italian Foreign Minister Luigi Di Maio, in Rome, Tuesday, Aug. 25, 2020. (AP Photo/Andrew Medichini)" height="259"><p>Hong Kong police have accused eight activists living overseas of national security offences. They are wanted under a national security law that Beijing imposed on the former British colony in 2020, shortly after anti-China protests the previous year. </p>\n',
    //   content:
    //     '\n<img src="https://i.cbc.ca/1.6895941.1688417643!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_460/italy-china-protest.jpg" alt="Italy China Protest" width="460" title="Hong Kong activist Nathan Law takes part in a protest during a meeting of Chinese Foreign Minister Wang Yi with Italian Foreign Minister Luigi Di Maio, in Rome, Tuesday, Aug. 25, 2020. (AP Photo/Andrew Medichini)" height="259"><p>Hong Kong police have accused eight activists living overseas of national security offences. They are wanted under a national security law that Beijing imposed on the former British colony in 2020, shortly after anti-China protests the previous year. </p>\n',
    //   enclosure: {},
    //   categories: ["Radio/As It Happens"],
    // },
    // {
    //   title:
    //     "At least 8 Palestinians killed as Israeli troops launch drone strikes on West Bank refugee camp",
    //   pubDate: "2023-07-03 18:03:56",
    //   link: "https://www.cbc.ca/news/world/israel-troops-drone-strokes-west-bank-jenin-1.6895576?cmp=rss",
    //   guid: "1.6895576",
    //   author: "Reuters",
    //   thumbnail: "",
    //   description:
    //     '\n<img src="https://i.cbc.ca/1.6895594.1688405520!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/1427735565.jpg" alt="1427735565" width="460" title="TOPSHOT - Palestinian youths run for cover amid clashes during an Israeli military operation in Jenin city in the occupied West Bank, on July 3, 2023. Israel has stepped up operations in the northern West Bank, home to Jenin city and its adjacent refugee camp, a stronghold of Palestinian armed groups where there has been a spate of attacks on Israelis as well as attacks by Jewish settlers on Palestinian communities. (Photo by Jaafar ASHTIYEH / AFP) (Photo by JAAFAR ASHTIYEH/AFP via Getty Images)" height="259"><p>Israeli forces hit the city of Jenin with drone strikes on Monday as part of one of the biggest West Bank operations in 20 years, killing at least eight Palestinians and wounding dozens of people as gun battles continued into the afternoon.</p>\n',
    //   content:
    //     '\n<img src="https://i.cbc.ca/1.6895594.1688405520!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/1427735565.jpg" alt="1427735565" width="460" title="TOPSHOT - Palestinian youths run for cover amid clashes during an Israeli military operation in Jenin city in the occupied West Bank, on July 3, 2023. Israel has stepped up operations in the northern West Bank, home to Jenin city and its adjacent refugee camp, a stronghold of Palestinian armed groups where there has been a spate of attacks on Israelis as well as attacks by Jewish settlers on Palestinian communities. (Photo by Jaafar ASHTIYEH / AFP) (Photo by JAAFAR ASHTIYEH/AFP via Getty Images)" height="259"><p>Israeli forces hit the city of Jenin with drone strikes on Monday as part of one of the biggest West Bank operations in 20 years, killing at least eight Palestinians and wounding dozens of people as gun battles continued into the afternoon.</p>\n',
    //   enclosure: {},
    //   categories: ["News/World"],
    // },
    // {
    //   title:
    //     "As housing costs soar, some financial analysts advise to scrap the 30% rule",
    //   pubDate: "2023-07-02 13:00:00",
    //   link: "https://www.cbc.ca/news/canada/british-columbia/housing-costs-soar-financial-analysts-30-per-cent-rule-1.6894375?cmp=rss",
    //   guid: "1.6894375",
    //   author: "Maryse Zeidler",
    //   thumbnail: "",
    //   description:
    //     '\n<img src="https://i.cbc.ca/1.6323148.1661112947!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_460/real-estate-housing-apartments-vancouver.jpg" alt="Real estate, housing, apartments Vancouver" width="460" title="Aerial view of apartments and condo buildings in Vancouver\'s West End neighbourhood, near English Bay. Taken Jan. 20, 2022." height="259"><p>Thirty per cent is the often-touted maximum percentage of your income that you should spend on a home. But in an age where the average one-bedroom apartment in Vancouver rents for $2,787 a month, is that number still realistic?</p>\n',
    //   content:
    //     '\n<img src="https://i.cbc.ca/1.6323148.1661112947!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_460/real-estate-housing-apartments-vancouver.jpg" alt="Real estate, housing, apartments Vancouver" width="460" title="Aerial view of apartments and condo buildings in Vancouver\'s West End neighbourhood, near English Bay. Taken Jan. 20, 2022." height="259"><p>Thirty per cent is the often-touted maximum percentage of your income that you should spend on a home. But in an age where the average one-bedroom apartment in Vancouver rents for $2,787 a month, is that number still realistic?</p>\n',
    //   enclosure: {},
    //   categories: ["News/Canada/British Columbia"],
    // },
    // {
    //   title:
    //     "Orcas are ramming into boats, but experts warn against calling it revenge on humans",
    //   pubDate: "2023-07-03 21:43:12",
    //   link: "https://www.cbc.ca/radio/thecurrent/orca-boat-incidents-social-media-reaction-1.6895465?cmp=rss",
    //   guid: "1.6895465",
    //   author: "Magan Carty",
    //   thumbnail: "",
    //   description:
    //     '\n<img src="https://i.cbc.ca/1.6895822.1688419124!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/orca-lead.jpg" alt="orca lead" width="460" title="On orca jumps out of water in the sea near Rausu, Hokkaido, Japan. Orcas are commonly known as killer whales but they are actually the largest species of dolphin.    REUTERS/Kim Kyung-Hoon" height="259"><p>Pods of orcas began toying with yachts in 2020, ramming them, spinning them, and in some cases terrifying those on board. This behaviour is gaining momentum off the southwest coast of Europe and experts believe it’s being passed from orca to orca.</p>\n',
    //   content:
    //     '\n<img src="https://i.cbc.ca/1.6895822.1688419124!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/orca-lead.jpg" alt="orca lead" width="460" title="On orca jumps out of water in the sea near Rausu, Hokkaido, Japan. Orcas are commonly known as killer whales but they are actually the largest species of dolphin.    REUTERS/Kim Kyung-Hoon" height="259"><p>Pods of orcas began toying with yachts in 2020, ramming them, spinning them, and in some cases terrifying those on board. This behaviour is gaining momentum off the southwest coast of Europe and experts believe it’s being passed from orca to orca.</p>\n',
    //   enclosure: {},
    //   categories: ["Radio/The Current"],
    // },
  ];

  return (
    <>
      <div className="video-wrapper">
        <video
          ref={videoRef}
          src="images/background.mp4"
          width="250"
          loop
          muted
          className="video"
        ></video>
      </div>
      <main className="wrapper">
        <div className="content">
          <Headline items={items} />
          <ThumbnailList items={items} />
        </div>
      </main>
    </>
  );
}

export default Home;
