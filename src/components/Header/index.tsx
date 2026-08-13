import SubTitle from "../subTitle"

const Header = () => {
  return (
    <header className="flex justify-center items-center gap-3 p-4 mt-5 m-auto bg-blue-300 rounded-4xl">
      <img
        src="/packingList.jpg"
        alt="Travel documents icon"
        className="h-20 w-20"
      />
      <div className="flex flex-col ">
        <h1 className="text-3xl font-semibold">Are you ready to travel the world?</h1>
        <SubTitle />
      </div>
    </header>
  )
}

export default Header