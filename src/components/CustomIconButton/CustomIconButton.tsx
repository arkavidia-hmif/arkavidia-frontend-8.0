import HomeIcon from '../Icon/HomeIcon';
import clsx from 'clsx';

interface CustomIconButtonProps {
  bgColor?: string;
}

type Variants = 'Primary' | 'Secondary';

const variantStyle: { [key in Variants]: string } = {
  Primary: 'bg-blue300 hover:bg-blue200',
  Secondary: 'bg-red300 hover:bg-red200',
};

const CustomIconButton: React.FC<CustomIconButtonProps> = ({ bgColor }) => {
  return (
    <div>
      <button
        className={clsx(
          'rounded-full p-3 w-12 h-12 flex items-center justify-center',
          variantStyle[bgColor],
        )}>
        <div>
          <HomeIcon className="fill-white w-6 h-6" />
        </div>
      </button>
    </div>
  );
};

export default CustomIconButton;
