import RecipesCards from "../components/RecipesCards";

const FavoritesPage = () => {
	const fav = JSON.parse(localStorage.getItem("favorites")) || [];
	console.log(fav);
	return (
		<div className="bg-gray-950 flex-1 p-10 min-h-screen">
			<div className="max-w-screen-lg mx-auto">
				<p className="font-bold text-3xl md:text-5xl my-4 text-white">
					My Favourites
				</p>

				{fav.lenght === 0 && (
					<div className="h-[80vh] flex flex-col items-center gap-4">
						<img
							src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg"
							alt=""
							className=" h-3/4  rounded"
						/>
					</div>
				)}

				<RecipesCards recipes={fav} loading={false} fromFav={true} />
			</div>
		</div>
	);
};

export default FavoritesPage;
