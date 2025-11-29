function Card(props) {
  return (
    <div className="bg-gray-900 mt-30 text-white flex justify-around items-center inline-block ml-8 m-5 border-4 border-gray-900 rounded-xl">
      <img
        className="h-[300px] w-[220px] rounded-xl"
        src={props.img}
      />
      <div className="text-center mt-2">
        <h1 className="font-bold text-md p-1">{props.cloth}</h1>
        <h2 className="font-bold text-xl">{props.Offer}</h2>
        <h2 className="font-bold text-lg">{props.price}</h2>
        <button className="mb-2 font-bold border-2 p-1">Shop Now</button>
      </div>
    </div>
  );
}

export default Card;
