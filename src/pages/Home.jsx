import React from "react";

const Home = () => {

const handleImageGenarate = (e)=>{
    e.preventDefault();
    const prompt = e.target.prompt.value;
    console.log(prompt);
}

// 
  return (
    <div className="w-full mx-auto py-20">
      <h1 className="text-center text-4xl font-semibold capitalize mb-8">Genarate Image</h1>
      <div className="text-center">
        <form onSubmit={handleImageGenarate}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              </g>
            </svg>
            <input name="prompt" type="text" className="grow" placeholder="Write Your Prompt" />
          </label>
          {/*  */}
          <button type="submit" className="btn btn-outline btn-accent ml-4">Genarate Image</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
