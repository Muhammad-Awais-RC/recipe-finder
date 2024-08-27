import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import RecipesCards from "./RecipesCards";

const MainContent = () => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchRecipes = async (searchQuery) => {
		setLoading(true);
		try {
			const res = await fetch(
				`https://api.edamam.com/api/recipes/v2/?app_id=${
					import.meta.env.VITE_APP_ID
				}&app_key=${import.meta.env.VITE_APP_KEY}&q=${searchQuery}&type=public`
			);
			const data = await res.json();
			setRecipes(data.hits);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = (e) => {
		e.preventDefault();
		fetchRecipes(e.target[0].value);
	};

	useEffect(() => {
		fetchRecipes("chicken");
	}, []);

	return (
		<div className="p-10 max-w-screen-lg mx-auto ">
			<form onSubmit={handleSearch}>
				<label className="input shadow-md flex items-center gap-2">
					<Search size={"24"} />
					<input
						type="text"
						className="text-sm md:text-md grow"
						placeholder="What do you want to cook"
					/>
				</label>
			</form>
			<h2 className="font-bold text-3xl md:text-5xl mt-4 text-white">
				{" "}
				Recommonded Recipes{" "}
			</h2>
			<p className="text-slate-500 font-semibold mx-1 my-2 text-sm tracking-tight">
				{" "}
				Popular Choices{" "}
			</p>

			<RecipesCards loading={loading} recipes={recipes} />
		</div>
	);
};

export default MainContent;
