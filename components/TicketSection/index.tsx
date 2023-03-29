import TicketItem from "./TicketItem";

interface TicketSectionProps {
    ticketTitle: string;
    
}

const TicketSection = () => {
	return (
		<div className="flex flex-col gap-[35px] h-full min-w-[323px]">
			<div className="h-[51px] w-full bg-[#E6E4FF] pl-[25px] flex items-center rounded-[5px] bg-opacity-30">
				To - Do
			</div>
			<div className="bg-[#71839B] px-[17px] py-[27px] bg-opacity-[0.08] rounded-t-[5px] h-full min-h-[calc(100vh-271px)] flex flex-col gap-[30px]">
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
				<TicketItem
					ticketTitle="Request fot Banking Statement"
					ticketId="WC-1520"
					severity={"high"}
				/>
			</div>
		</div>
	);
};
export default TicketSection;
