import { Link } from "react-router-dom";
import { LOGO } from "../utilis/constant";
import { Heart, Home } from "lucide-react";

const Sidebar = () => {
	return (
		<>
			<DeskstopSidebar />
			<MobileSidebar />
		</>
	);
};

const DeskstopSidebar = () => {
	return (
		<div className="p-3 md-p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block ">
			<div className="flex flex-col gap-20 sticky top-10 left-0">
				<div className="w-full ">
					<img
						src={LOGO}
						alt=""
						className="hidden md:block h-20 rounded mx-auto "
					/>
					<img src={LOGO} alt="" className=" block md:hidden " />
				</div>
				<div className="flex flex-col items-center md:items-start gap-6 ">
					<Link to={"/"} className="flex gap-2">
						<Home size={"28"} />
						<span className="font-bold hidden md:block">Home</span>
					</Link>
					<Link to={"/favorites"} className="flex gap-2">
						<Heart size={"28"} />
						<span className="font-bold hidden md:block">Favorites</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

const MobileSidebar = () => {
	return (
		<div className="flex justify-center gap-10 border-t w-full absolute bottom-0 left-0 bg-slate-950 z-20 p-2 sm:hidden">
			<Link to={"/"}>
				<Home size={"28"} />
			</Link>
			<Link to={"/favorites"}>
				<Heart size={"28"} />
			</Link>
		</div>
	);
};
export default Sidebar;
