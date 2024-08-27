import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";

const RecipeCard = ({ recipe }) => {
	const [isFav, setIsFav] = useState(
		localStorage.getItem("favorites")?.includes(recipe.label) || false
	);

	const addToFavorite = () => {
		let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		const alreadyFavorited = favorites.some((f) => f.label === recipe.label);
		if (alreadyFavorited) {
			favorites = favorites.filter((f) => f.label !== recipe.label);
			setIsFav(false);
		} else {
			favorites.push(recipe);
			setIsFav(true);
		}
		localStorage.setItem("favorites", JSON.stringify(favorites));
	};

	return (
		<div className="flex flex-col rounded-md bg-slate-950 overflow-hidden p-3 relative">
			<a
				href={
					"https://www.youtube.com/results?search_query=" +
					recipe.label +
					" recipe"
				}
				target="_blank"
				className=" h-32 relative text-gray-600"
			>
				<div className="skeleton absolute inset-0 " />
				<img
					src={recipe.image}
					alt="recipe-image"
					className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500"
					onLoad={(evt) => {
						const e = evt.currentTarget;
						e.style.opacity = 1;
						e.previousElementSibling.style.display = "none";
					}}
				/>
				<div className="absolute bottom-2 left-3 bg-white  rounded-full px-3 py-1 flex items-center gap-1 text-sm">
					<Soup size={"16"} /> {recipe.yield} Servings
				</div>
				<div
					className="absolute top-1 right-1 bg-white  rounded-full p-2"
					onClick={(e) => {
						e.preventDefault();
						addToFavorite();
					}}
				>
					{!isFav && (
						<Heart
							size={"24"}
							className="hover:fill-red-600 hover:text-red-600"
						/>
					)}
					{isFav && <Heart size={"24"} className="fill-red-600 text-red-600" />}
				</div>
			</a>

			<p className="font-bold tracking-wide mt-1">{recipe.label}</p>
			<p className="my-2">
				{" "}
				{recipe.cuisineType[0][0].toUpperCase() +
					recipe.cuisineType[0].slice(1)}
			</p>

			<div className="flex gap-2 mt-auto text-gray-900">
				<div className="flex gap-1 bg-yellow-300 items-center p-1 px-2 rounded-md">
					<HeartPulse size={"16"} />
					<span className="text-sm tracking-tighter font-semibold ">
						Gluten Free
					</span>
				</div>
				{recipe.healthLabels.map((label, index) => {
					if (index >= 1) return;
					return (
						<div
							key={index}
							className="flex gap-1 bg-yellow-300 items-center p-1 px-2 rounded-md"
						>
							<HeartPulse size={"16"} />
							<span className="text-sm tracking-tighter font-semibold ">
								{label}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RecipeCard;
