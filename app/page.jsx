import Feed from "@components/Feed";

const getPrompts = async () => {
  const response = await fetch(
    "https://promptopia-git-main-alikutluca.vercel.app/api/prompt"
  );
  const data = await response.json();
  return data;
};

const Home = async () => {
  const data = await getPrompts();

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed data={data} />
    </section>
  );
};

export default Home;
