import HomeIcon from '../Icon/HomeIcon';
import clsx from 'clsx';

interface CustomButtonProps {
  bgColor?: string;
  icon?: boolean;
  size?: string;
}

type colors = 'primary' | 'secondary';
type sizes = 'small' | 'normal';

const variantColor: { [key in colors]: string } = {
  primary: 'bg-blue300 hover:bg-blue200',
  secondary: 'bg-red300 hover:bg-red200',
};

const variantSize: { [key in sizes]: string } = {
  small: 'w-auto h-10',
  normal: 'w-auto h-16',
};

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor,
  size,
  children,
}) => {
  return (
    <div>
      <button
        className={clsx(
          'flex items-center justify-center',
          variantColor[bgColor],
          variantSize[size],
        )}>
        <div className="font-helvatica font-bold text-sm text-white">
          {children}
        </div>
      </button>
    </div>
  );
};

export default CustomButton;
