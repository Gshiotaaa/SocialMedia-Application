import { Header } from "./Components/Header";
import { Content, Post } from "./Components/Post";
import { Sidebar } from "./Components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/gshiotaaa.png",
        name: "Gabriel Shiota",
        role: "Web Developer",
      },

      content: [
        {
          type: "paragraph",
          content: "Mais um projeto criado dentro da plataforma da RocketSeat.",
        },
        {
          type: "paragraph",
          content:
            " Sempre em busca do próximo nível e ele nunca será o último ",
        },
        { type: "link", content: "https://www.rocketseat.com.br/" },
      ],

      publishedAt: new Date("2022-11-30 10:05:00"),
    },

    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/david-ackerman.png",
        name: "David Ackerman",
        role: "Web Developer",
      },

      content: [
        {
          type: "paragraph",
          content:
            "Muito legal esse novo projeto de microserviços da RocketSeat",
        },
        {
          type: "paragraph",
          content:
            "Sempre nos informando sobre atualizações e ferramentas novas",
        },
        { type: "link", content: "https://www.rocketseat.com.br/" },
      ],

      publishedAt: new Date("2022-11-29 10:30:00"),
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content as Content[]}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
