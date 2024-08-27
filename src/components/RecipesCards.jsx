import RecipeCard from "./RecipeCard";

const RecipesCards = ({ loading, recipes, fromFav = false }) => {
	return (
		<div className="grid gap-3 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{loading &&
				[...Array(20)].map((_, index) => (
					<div key={index} className="flex flex-col gap-4 w-full">
						<div className="skeleton h-32 w-full"></div>
						<div className="flex justify-between">
							<div className="skeleton h-4 w-28"></div>
							<div className="skeleton h-4 w-28"></div>
						</div>
						<div className="skeleton h-4 w-1/2"></div>
					</div>
				))}

			{!loading &&
				!fromFav &&
				recipes.map(({ recipe }, index) => (
					<RecipeCard key={index} recipe={recipe} />
				))}
			{!loading &&
				fromFav &&
				recipes.map((recipe, index) => (
					<RecipeCard key={index} recipe={recipe} />
				))}
		</div>
	);
};

export default RecipesCards;
