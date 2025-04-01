import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  customClass,
}: {
  value: number;
  customClass?: string;
}) => {
  const parsedValue = value.toFixed(2);

  const [int, dec] = parsedValue.split(".");
  return (
    <p className={cn("text-2xl", customClass)}>
      <span className="text-xs align-super">$</span>
      {int}
      <span className="text-xs align-super">.{dec}</span>
    </p>
  );
};

export default ProductPrice;
