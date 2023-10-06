import classNames from 'classnames';
import './SvgIcon.scss';

type SvgIconProps = {
  name: string;
  size?: 'sm' | 'md';
};

export default function SvgIcon({ name, size = 'sm' }: SvgIconProps) {
  return (
    <svg
      className={classNames('svg-icon', `svg-icon--${size}`)}
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
}
