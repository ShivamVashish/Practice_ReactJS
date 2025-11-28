function Card(props) {
  return (
    <div className="bg-gray-900 text-white flex justify-around items-center inline-block ml-8 m-5 border-4 rounded-xl mt-30">
      <img
        className="h-[300px] w-[220px] rounded-xl"
        src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d"
      />
      <div className="text-center mt-2">
        <h1 className="font-bold text-xl pt-2 pb-2">{props.cloth}</h1>
        <h2 className="pb-2 font-bold ">{props.Offer}</h2>
        <button className="mb-2 font-bold">Shop Now</button>
      </div>
    </div>
  );
}
export default Card