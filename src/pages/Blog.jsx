
import React, { useState } from "react";
import { Clock3, CalendarDays, UserRound } from "lucide-react";
import "./Blog.css";

const article = {
  id: "maurice-olley",
  category: "Vehicle Dynamics",
  series: "Foundations of Vehicle Dynamics",
  part: "Part 1",
  title: "Maurice Olley: The Father of Vehicle Dynamics",
  excerpt:
    "How Maurice Olley turned vehicle handling from guesswork into measured engineering.",
  author: "Flat Ride Engineering",
  date: "18 November 2026",
  readTime: "4 min read",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPlSmFXtp5xmuyHHjO45clk5WJaIsas7JRNAQIHmh3w&s=10",
};

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(false);

  return (
    <main className="blog-page">

      {/* BLOG HEADER */}
      <header className="blog-header">
        <div className="blog-container">
          <span className="blog-eyebrow">FIELD NOTES</span>

          <h1>
            Engineering insight.
            <br />
            <span>Explained clearly.</span>
          </h1>

          <p>
            Technical stories, engineering history and practical thinking from
            the Flat Ride Engineering team.
          </p>
        </div>
      </header>

      {/* BLOG CONTENT */}
      <section className="blog-content">
        <div className="blog-container">

          {!selectedArticle ? (
            <div className="blog-grid">

              {/* MAURICE OLLEY PART 1 */}
              <article className="blog-card">
                <button
                  type="button"
                  className="blog-card-image"
                  onClick={() => setSelectedArticle(true)}
                  aria-label={`Read ${article.title}`}
                >
                  <img src={article.image} alt={article.title} />

                  <span>
                    {article.series} · {article.part}
                  </span>
                </button>

                <div className="blog-card-content">
                  <span className="blog-category">
                    {article.category}
                  </span>

                  <h2>
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(true)}
                    >
                      {article.title}
                    </button>
                  </h2>

                  <p>{article.excerpt}</p>

                  <div className="blog-meta">
                    <span>
                      <CalendarDays size={14} />
                      {article.date}
                    </span>

                    <span>
                      <Clock3 size={14} />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </article>

            </div>
          ) : (

            /* FULL ARTICLE */
            <article className="blog-article">

              <button
                type="button"
                className="blog-back"
                onClick={() => setSelectedArticle(false)}
              >
                ← Back to all field notes
              </button>

              <div className="blog-article-heading">
                <span className="blog-category">
                  {article.series} · {article.part}
                </span>

                <h2>{article.title}</h2>

                <div className="blog-meta">
                  <span>
                    <UserRound size={14} />
                    By {article.author}
                  </span>

                  <span>
                    <CalendarDays size={14} />
                    {article.date}
                  </span>

                  <span>
                    <Clock3 size={14} />
                    {article.readTime}
                  </span>
                </div>
              </div>

              <img
                className="blog-article-image"
                src={article.image}
                alt="Classic car representing early vehicle engineering"
              />

              <div className="blog-article-body">

                <p className="blog-lead">
                  Vehicle dynamics is the study of how a car moves: how it
                  speeds up, brakes, rides over bumps and turns. Today it is a
                  proper science. But 100 years ago, it was mostly guesswork.
                </p>

                <p>
                  The man who changed that was{" "}
                  <a
                    href="https://corvettemuseum.org/?p=11173"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Maurice Olley
                  </a>{" "}
                  (1889–1972). Words we use every day, like understeer, flat
                  ride and roll centre, come from his work.
                </p>

                <h3>Before Olley</h3>

                <p>
                  In the 1920s, cars were tuned by feel. Almost all of them
                  used a solid front axle on leaf springs. Nobody really
                  knew how tyres made cornering force.
                </p>

                <p>
                  Olley was not the first to study this, but he was among
                  the first to measure and record it properly.
                </p>

                <h3>From Rolls-Royce to Cadillac</h3>

                <p>
                  Olley grew up in North Wales. In 1912 he joined{" "}
                  <a
                    href="https://www.millikenresearch.com/MauriceOlleybyWFMilliken.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rolls-Royce
                  </a>{" "}
                  and soon worked in Sir Henry Royce's own design team.
                  Later he ran Rolls-Royce's factory in America.
                </p>

                <p>
                  When that business closed after the 1929 crash, he joined
                  Cadillac in 1930, where much of the foundation of vehicle
                  dynamics was laid.
                </p>

                <h3>What He Discovered</h3>

                <ul>
                  <li>
                    <strong>Flat ride</strong> — Front springs should be
                    softer than rear springs so the car stays level over bumps.
                  </li>

                  <li>
                    <strong>Independent front suspension</strong> — Soft
                    springs exposed shake in solid axles, leading to
                    short-long arm suspension.
                  </li>

                  <li>
                    <strong>Understeer</strong> — Olley began testing cars
                    on a circular skid pad and popularised the term.
                  </li>

                  <li>
                    <strong>Tyre data</strong> — He obtained the first tyre
                    force data in the United States from Goodyear.
                  </li>

                  <li>
                    <strong>Roll centre and anti-roll bars</strong> — His
                    team defined anti-dive and anti-squat geometry.
                  </li>
                </ul>

                <h3>The First Corvette</h3>

                <p>
                  In 1952 Olley became head of Chevrolet Research and
                  Development. There he helped design the chassis of the
                  first Corvette. In 2008 he was inducted into the Corvette
                  Hall of Fame.
                </p>

                <h3>Fun Facts</h3>

                <ul>
                  <li>
                    He did his maths with a slide rule, with no computers.
                  </li>

                  <li>
                    GM kept his notes secret for 30 years before they were
                    published as a book in 2002.
                  </li>

                  <li>His notes include cartoons he drew himself.</li>

                  <li>
                    He reacted enthusiastically when he first heard how
                    aircraft engineers calculated stability.
                  </li>
                </ul>

                <h3>His Book</h3>

                <p>
                  Olley's notes became{" "}
                  <em>Chassis Design: Principles and Analysis</em> by
                  William and Douglas Milliken (SAE, 2002). It remains one
                  of the key references on suspension and handling.
                </p>

                <p>
                  His lesson was simple:{" "}
                  <strong>measure first, then design.</strong> It is also
                  the idea behind our company name, Flat Ride Engineering.
                </p>

              </div>
            </article>
          )}

        </div>
      </section>
    </main>
  );
}
