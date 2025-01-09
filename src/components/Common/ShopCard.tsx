import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { foodData } from "@/lib/shop-data";
import { cn } from "@/lib/utils";
import clsx from "clsx";

export interface Props {
	id: string;
	title: string;
	subTitle?: string;
	menu?: string;
	menu1: string;
	menu2: string;
	description: string;
	image: string;
	image2?: string;
	image3?: string;
	imgClass?: string;
}

// const { title, subTitle, description, image, imaclassName } = Astro.props;
export const ShopCard = ({
	id,
	title,
	subTitle,
	menu,
	menu1,
	menu2,
	image,
	image2,
	image3,
	imgClass,
}: Props) => {
	return (
		<Dialog>
			<DialogTrigger asChild className="cursor-pointer">
				<div className="flex flex-col gap-[10px] drop-shadow-og w-full md:w-[calc(50%-10px)] rounded-[10px] bg-white px-[10px] md:px-[17px] pb-[20px] md:pb-[18px] pt-[15px] md:pt-[18px] text-black">
					<p className="text-[16px] md:leading-[44px] md:text-[22px] font-semibold text-red">
						{id}.{title}
					</p>
					{/* <p className="text-[12px] md:text-[16px] md:leading-[24px] text-red mb-[12px]">
						{subTitle || "　"}
					</p> */}
					
						<div className={cn("flex justify-between", image3 ? "gap-[6px]" : "gap-[8px]")}>
						{image && (
							<div className="w-1/2">
								<img
									src={image}
									alt=""
									className={clsx(
										"w-full rounded-[10px] border border-[#CCCCCC] h-[120px] md:h-[204px]",
										imgClass ? imgClass : "object-cover",
									)}
								/>
								<p className="text-[13px] text-center md:text-[18px] md:leading-[36px] font-semibold whitespace-pre-line">
									{menu1}
								</p>
							</div>
						)}
						{image2 && (
							<div className="w-1/2">
								<img
									src={image2}
									alt=""
									className={clsx(
										"w-full rounded-[10px] border border-[#CCCCCC] h-[120px] md:h-[204px]",
										imgClass ? imgClass : "object-cover",
									)}
								/>
								<p className="text-[13px] text-center md:text-[18px] md:leading-[36px] font-semibold whitespace-pre-line">
									{menu2}
								</p>
							</div>
						)}
						{image3 && (
							<div className="w-[calc(50%-6px)]">
								<img
									src={image3}
									alt=""
									className={clsx(
										"w-full rounded-[10px] border border-[#CCCCCC] h-[120px] md:h-[204px]",
										imgClass ? imgClass : "object-cover",
									)}
								/>
								<p className="text-[13px] text-center md:text-[18px] md:leading-[36px] font-semibold whitespace-pre-line">
								いちご飴
								</p>
							</div>
						)}
						</div>

						{menu && (
						<p className="text-[13px] text-center md:text-[18px] md:leading-[36px] font-semibold whitespace-pre-line">
							{menu}
						</p>
						)}
					
					{/* <p className="text-[13px] md:text-[14px] font-medium mb-[7px] md:mb-[12px]">
						{description}
					</p> */}
					{/* <div className="text-center text-[13px] md:text-[14px] font-semibold text-red mt-auto">
						もっと詳しく
					</div> */}
				</div>
			</DialogTrigger>
			<DialogContent className="rounded-[16px] md:rounded-[33px] h-auto px-[15px] w-[95%] md:max-w-[803px] md:pt-[40px] md:pl-[50px] md:pr-[20px]">
				<DialogHeader className="text-left">
					<DialogTitle>
						<p className="text-[20px] md:text-[28px] text-red font-semibold">
							{title}
						</p>
						<p className="text-[14px] md:text-[22px] text-red font-normal mt-[8px]">
							{subTitle || "　"}
						</p>
					</DialogTitle>
					<DialogDescription className="overflow-y-auto max-h-[493px] text-[#222222]">
						{foodData.find((food) => food.id === id)?.info?.map((info) => {
							// if (info.image !== "") {
							return (
								<div
									key={info?.title}
									className="flex flex-col justify-between md:flex-row border-b border-[#E6E6E6] md:border-none md:gap-x-[72px] mb-[20px] md:mb-[30px] md:mr-[5px]"
								>
									{info.image && (
										<img
											src={info?.image}
											alt=""
											className={cn(
												"order-0 mt-[10px] md:mt-0 md:order-1 max-h-[245px] w-full md:max-w-[244px] md:h-[190px] mx-auto md:mx-0 object-cover border border-[#CCCCCC] rounded-[15px]",
												info?.imgClass
											)}
										/>
									)}
									<div className="mt-[16px]">
										<p className="text-[16px] md:text-[22px] font-semibold leading-[30px]">
											{info?.title}　{info?.price ? `${info.price}円` : ""}
										</p>
										<div className="my-[18px] font-semibold text-[16px] md:text-[18px] leading-[30px]">
											{info?.catchcopy && (
												<span className="bg-[#FFE4E2] py-[7px] px-[8px]">
													{info.catchcopy}
												</span>
											)}
										</div>
										<p className="text-[16px] leading-[30px] mb-[17px] md:mb-[6px]">
											{info?.description}
										</p>
									</div>
								</div>
							);
							// }
						})}
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
