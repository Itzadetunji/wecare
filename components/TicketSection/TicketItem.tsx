interface TicketItemProps {
	ticketTitle: string;
    ticketId: string;
    severity: string;
}

const TicketItem: React.FC<TicketItemProps> = ({ ticketTitle, ticketId, severity }) => {
	return (
		<div className="w-full py-[13px] px-[14px] bg-white rounded-[5px]">
			<div className="flex justify-between items-center">
				<p>{ticketTitle}</p>
				<div
					style={{ color: "#4DCAA4" }}
					className="w-[15px] h-[11px] "
				></div>
			</div>
			<p className="mt-[7px] text-[14px] ">{ticketId}</p>
		</div>
	);
};

export default TicketItem;
