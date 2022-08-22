import { parseISO, format } from "date-fns";

interface DateProps {
  dateString: string;
}

function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "LLL d, yyyy")}</time>;
}

export default Date;
