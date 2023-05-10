// import useCurrentUser from "@/hooks/useCurrentUser";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session){
    return {
      redirect:{
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {
  // const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList() 
  console.log(movies)
  return (
    <>
      <Navbar/>
      <Billboard/>
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
      {/* <h1 className="text-2xl text-green-500">Netflix Clone</h1>
      <p className="text-white">Logged in as {user?.name} </p>
      <button className="bg-white " onClick={()=> signOut()}>Logout</button> */}
    </>
  )
}
