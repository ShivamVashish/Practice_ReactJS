import { useCallback, useEffect, useState } from "react";

function Body() {
  const [profile, setprofile] = useState([]);
  // const [numberofprofile, setnumberofprofile] = useState("");
  const [name,setname] = useState('')
  const generate = useCallback(async () => {
    try {
      // const ran = Math.floor(1 + Math.random() * 10);
      // const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${numberofprofile}`);
      const response = await fetch(`https://api.github.com/search/users?q=${name}`)
      const data = await response.json();
      setprofile(data.items || []);
    } catch (err) {
      console.error(err);
      setprofile([]);
    }
  }, [name]);
    
  useEffect(() => {
    generate();
  }, []);
  return (
    <>
      <div className="text-center mt-2 mb-2">
        <input
          className="mr-10 p-1 rounded-sm"
          type="text"
          placeholder="search githubr of profiles"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <button onClick={generate} className="text-black font-bold bg-white p-1 rounded-sm">Search Profile
 </button>
      </div>

      <div className="flex gap-5 flex-wrap justify-center items-center p-2">
        {profile.map((value) => (
          <div key={value.id}>
            <h1>{value.login}</h1>
            <a href={value.html_url} target="_blank" rel="noreferrer">
              <img src={value.avatar_url}className="h-[200px] rounded-xl border-white border-4"
              />
            </a>
            <h2 className="text-white uppercase text-center font-bold">
              {value.login}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default Body;
