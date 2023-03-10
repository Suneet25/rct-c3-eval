import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Projects = ({ project }) => {
  let [proj, setProj] = useState(project);
  let myProject = proj.items;
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ margin: "auto" }}>
        <br />
        <br />
        <br />
        <br />
        <div>
          <h1 style={{ color: "teal", textAlign: "center" }}>Projects</h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          {myProject.map((el) => (
            <div
              key={el.id}
              style={{
                display: "grid",
                textAlign: "center",
                gridTemplateColumns: "repeat(4,1fr)",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4 style={{ color: "lightcoral" }}>{el.full_name}</h4>
              <p>Language:-{el.language}</p>
              <p>Stars Count:-{el.stargazers_count}</p>
              <p>Forks Count:-{el.forks_count}</p>
              <Link href={el.clone_url}>
                <h5>Link Deploy:-{el.full_name}</h5>
              </Link>
              <Link href={el.deployments_url}>
                <h5>HomePage Url</h5>
              </Link>
              <button style={{ width: "300px", borderRadius: "10px" }}>
                Live Link:-{el.homepage}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let res = await fetch(
    " https://api.github.com/search/repositories?q=user:Suneet25+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let data = await res.json();

  return {
    props: {
      project: data,
    },
  };
}

export default Projects;
